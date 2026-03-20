const fs = require('fs');
const path = require('path');

const repoRoot = path.resolve(__dirname, '..');
const referencesRoot = path.join(repoRoot, 'references');
const distilledRoot = path.join(referencesRoot, 'distilled');

const DISTILLED_FILES = [
  'formation_policy_candidates.json',
  'mechanism_branches.json',
  'mapping.json',
  'output_contract.json',
  'palace_mapping.json',
  'runtime_policy.json',
  'sihua_policy_candidates.json',
  'star_semantic_vectors.json',
  'term_normalization_map.json',
  'traceability_index.json'
];

const MARKDOWN_FILES = [
  path.join(referencesRoot, 'analysis', 'external_source_leads.md'),
  path.join(referencesRoot, 'analysis', 'case_validation.md'),
  path.join(referencesRoot, 'analysis', 'formation_pattern_analysis.md'),
  path.join(referencesRoot, 'analysis', 'negative_mechanisms.md'),
  path.join(referencesRoot, 'analysis', 'sihua_conflict_analysis.md'),
  path.join(referencesRoot, 'analysis', 'term_normalization.md'),
  path.join(referencesRoot, 'classical_texts', 'lyrics.md'),
  path.join(referencesRoot, 'classical_texts', 'formations_raw.md'),
  path.join(referencesRoot, 'classical_texts', 'sihua_conflicts_raw.md'),
  path.join(referencesRoot, 'classical_texts', 'stars_classical.md'),
  path.join(referencesRoot, 'raw_corpus', 'quan_shu', 'vol1', 'core_theories.md'),
  path.join(referencesRoot, 'raw_corpus', 'quan_shu', 'vol2', 'palaces_detail.md'),
  path.join(referencesRoot, 'raw_corpus', 'quan_shu', 'vol2', 'palaces_remaining.md'),
  path.join(referencesRoot, 'raw_corpus', 'quan_shu', 'vol3', 'time_cycles_raw.md'),
  path.join(referencesRoot, 'raw_corpus', 'quan_shu', 'vol4', 'case_records.md')
];

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function collectMarkdownIds() {
  const ids = new Set();
  const patterns = [
    /^\s*-\s+id:\s+([A-Za-z0-9._-]+)/gm,
    /^\s*-\s+validation_id:\s+([A-Za-z0-9._-]+)/gm,
    /^\s*-\s+summary_id:\s+([A-Za-z0-9._-]+)/gm,
    /^\s*-\s+lead_id:\s+([A-Za-z0-9._-]+)/gm,
    /^\s*-\s+principle_id:\s+([A-Za-z0-9._-]+)/gm,
    /^\s*-\s+use_id:\s+([A-Za-z0-9._-]+)/gm,
    /^\s*-\s+formation_id:\s+([A-Za-z0-9._-]+)/gm,
    /^\s*-\s+family_id:\s+([A-Za-z0-9._-]+)/gm,
    /^\s*-\s+mechanism_id:\s+([A-Za-z0-9._-]+)/gm,
    /^\s*-\s+finding_id:\s+([A-Za-z0-9._-]+)/gm,
    /^\s*-\s+conflict_group:\s+([A-Za-z0-9._-]+)/gm
  ];

  for (const filePath of MARKDOWN_FILES) {
    if (!fs.existsSync(filePath)) continue;
    const content = fs.readFileSync(filePath, 'utf8');
    for (const pattern of patterns) {
      let match;
      while ((match = pattern.exec(content)) !== null) {
        ids.add(match[1]);
      }
    }
  }
  return ids;
}

function walk(value, visitor, currentPath = []) {
  if (Array.isArray(value)) {
    value.forEach((item, index) => walk(item, visitor, currentPath.concat(index)));
    return;
  }
  if (value && typeof value === 'object') {
    Object.entries(value).forEach(([key, child]) => {
      visitor(key, child, currentPath);
      walk(child, visitor, currentPath.concat(key));
    });
  }
}

function isReferenceKey(key) {
  return new Set([
    'supported_by',
    'source_ids',
    'case_support',
    'example_cases',
    'linked_formations',
    'alternatives'
  ]).has(key);
}

function validateDistilledRefs(distilledJsons, knownIds, termFamilies) {
  const missing = [];

  for (const [fileName, json] of Object.entries(distilledJsons)) {
    walk(json, (key, child, currentPath) => {
      if (!isReferenceKey(key) || !Array.isArray(child)) return;
      for (const ref of child) {
        if (typeof ref !== 'string') continue;
        const isAltPolicy = key === 'alternatives';
        const isFormationRef = ref.startsWith('formation.');
        const isTermFamily = termFamilies.has(ref);
        if (isAltPolicy || isTermFamily) continue;
        if (isFormationRef) continue;
        if (!knownIds.has(ref)) {
          missing.push({
            file: fileName,
            path: currentPath.concat(key).join('.'),
            ref
          });
        }
      }
    });
  }

  return missing;
}

function validateMappingCrossRefs(mappingJson, termNormalizationJson) {
  const issues = [];
  const termFamilies = new Set(Object.keys(termNormalizationJson.families || {}));

  const mechanisms = mappingJson.mechanisms || {};
  for (const [mechanismId, mechanism] of Object.entries(mechanisms)) {
    if (mechanism.trigger_stack_family && !termFamilies.has(mechanism.trigger_stack_family)) {
      issues.push(`${mechanismId}: missing trigger_stack_family ${mechanism.trigger_stack_family}`);
    }
    for (const family of mechanism.amplifier_families || []) {
      if (!termFamilies.has(family)) {
        issues.push(`${mechanismId}: missing amplifier family ${family}`);
      }
    }
  }

  return issues;
}

function main() {
  const distilledJsons = {};
  for (const fileName of DISTILLED_FILES) {
    const filePath = path.join(distilledRoot, fileName);
    distilledJsons[fileName] = readJson(filePath);
  }

  const knownIds = collectMarkdownIds();
  const termFamilies = new Set(Object.keys(distilledJsons['term_normalization_map.json'].families || {}));

  const missingRefs = validateDistilledRefs(distilledJsons, knownIds, termFamilies);
  const crossRefIssues = validateMappingCrossRefs(
    distilledJsons['mapping.json'],
    distilledJsons['term_normalization_map.json']
  );

  console.log(`checked_distilled_files=${DISTILLED_FILES.length}`);
  console.log(`known_markdown_ids=${knownIds.size}`);

  if (missingRefs.length === 0) {
    console.log('traceability_refs=ok');
  } else {
    console.log('traceability_refs=missing');
    for (const item of missingRefs) {
      console.log(`missing_ref file=${item.file} path=${item.path} ref=${item.ref}`);
    }
  }

  if (crossRefIssues.length === 0) {
    console.log('mapping_cross_refs=ok');
  } else {
    console.log('mapping_cross_refs=issues');
    for (const issue of crossRefIssues) {
      console.log(issue);
    }
  }

  if (missingRefs.length > 0 || crossRefIssues.length > 0) {
    process.exit(1);
  }
}

main();
