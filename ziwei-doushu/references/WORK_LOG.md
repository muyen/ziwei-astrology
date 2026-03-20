# Zi Wei Skill Work Log

## Purpose

This file is a plain-language log of what has been done in the repo.

It exists because the repo now has enough moving parts that reading only the raw files is no longer enough to understand current progress.

Use this file together with:

- `references/corpus_index.md`
- `references/remaining_tasks.md`
- `references/distilled/mapping.json`

## What This Project Is Actually Doing

This is not just a note collection project.

The real pipeline is:

1. Collect raw Traditional Chinese source material.
2. Convert it into AI-efficient structured records.
3. Compare conflicting versions across books.
4. Reverse engineer recurring logic and hidden patterns.
5. Distill the results into runtime-ready mappings and policies.
6. Use those distilled assets inside the skill for research and chart reading.

The target is a `紫微鬥數` skill that is:

- source-aware
- conflict-aware
- explainable
- fast enough to use at runtime

## Why The Work Shifted

At first the work focused on collecting raw text.

That was necessary, but after enough raw was collected, continuing to collect more of the same had lower value.

The work then shifted toward:

- term normalization
- mechanism analysis
- branch classification
- distilled runtime assets
- validation scripts

This is why later work is less about "adding another case" and more about "turning the corpus into something the skill can reliably use."

## Major Work Completed

### 1. Skill and Schema Foundation

Completed:

- rewrote the skill around `raw -> compare -> distilled -> chart reading`
- established a stable record format for AI consumption
- created master index and backlog files

Key files:

- `SKILL.md`
- `references/ai_corpus_schema.md`
- `references/corpus_index.md`
- `references/remaining_tasks.md`

### 2. Raw Corpus Ingestion

Completed:

- classical lyrics corpus
- star Q&A corpus
- formation corpus
- sihua conflict corpus
- 全書 卷一 core theories
- 全書 卷二 first-pass palace corpus
- 全書 卷三 major timing/theory records
- 全書 卷四 case records

Current case coverage:

- first 30 `命圖` cases ingested
- from `孔仲尼` through `韓通`

Key files:

- `references/classical_texts/lyrics.md`
- `references/classical_texts/stars_classical.md`
- `references/classical_texts/formations_raw.md`
- `references/classical_texts/sihua_conflicts_raw.md`
- `references/raw_corpus/quan_shu/vol1/core_theories.md`
- `references/raw_corpus/quan_shu/vol2/palaces_detail.md`
- `references/raw_corpus/quan_shu/vol2/palaces_remaining.md`
- `references/raw_corpus/quan_shu/vol3/time_cycles_raw.md`
- `references/raw_corpus/quan_shu/vol4/case_records.md`

### 3. Star Corpus Expansion

Completed:

- core star raw records
- mobility and malefic star raw records
- void/interruption star raw records

This includes practical support for:

- `太陰`
- `天府`
- `文昌`
- `祿存`
- `天馬`
- `擎羊`
- `陀羅`
- `火星`
- `鈴星`
- `空劫`
- plus several earlier core stars already present in `stars_classical.md`

Key files:

- `references/raw_corpus/stars/batch_a_foundation_stars.md`
- `references/raw_corpus/stars/batch_b_malefic_and_mobility_stars.md`
- `references/raw_corpus/stars/batch_c_void_and_interruption_stars.md`

### 4. Analysis Layer

Completed:

- sihua conflict scoring
- formation pattern scoring
- negative mechanism analysis
- palace derivation analysis
- case validation analysis
- term normalization analysis

The most important current analysis result is:

- `neg.limit_collision` is now the strongest validated cross-layer mechanism

Meaning:

- high-status or high-grade formations can still fail when `大限 + 小限 + 太歲` collide with strong hazard signals

Key files:

- `references/analysis/sihua_conflict_analysis.md`
- `references/analysis/formation_pattern_analysis.md`
- `references/analysis/negative_mechanisms.md`
- `references/analysis/case_validation.md`
- `references/analysis/palace_derivation.md`
- `references/analysis/term_normalization.md`

### 5. Distilled Runtime Assets

Completed:

- `sihua_policy_candidates.json`
- `formation_policy_candidates.json`
- `palace_mapping.json`
- `term_normalization_map.json`
- `mechanism_branches.json`
- `runtime_policy.json`
- `star_semantic_vectors.json` (partial)
- `mapping.json` (partial master mapping)

These are the files the skill should increasingly rely on first before falling back to raw text.

Key files:

- `references/distilled/sihua_policy_candidates.json`
- `references/distilled/formation_policy_candidates.json`
- `references/distilled/palace_mapping.json`
- `references/distilled/term_normalization_map.json`
- `references/distilled/mechanism_branches.json`
- `references/distilled/runtime_policy.json`
- `references/distilled/star_semantic_vectors.json`
- `references/distilled/mapping.json`

### 6. Validation Infrastructure

Completed:

- created a real validation script for distilled assets
- script checks:
  - JSON parse validity
  - reference traceability
  - mapping cross-references

Key file:

- `scripts/validate_distilled.js`

Current command:

```bash
node ziwei-doushu/scripts/validate_distilled.js
```

Current result:

- distilled JSONs parse correctly
- traceability refs pass
- mapping cross refs pass

## Why Cases Were De-Prioritized

Cases are still useful, but not all cases are equally useful.

After 30 cases, the main bottleneck is no longer "lack of famous examples."

The main bottlenecks are now:

- unresolved term equivalence, especially `截空` vs `截路`
- incomplete branch rules for runtime use
- incomplete star semantic coverage
- compare-layer backfill from other books

So the strategy changed:

- no more broad case harvesting by default
- only collect cases that solve a specific unresolved mechanism

## What The Skill Can Already Use

The skill now has a usable runtime lookup order:

1. `references/distilled/mapping.json`
2. `references/distilled/term_normalization_map.json`
3. `references/distilled/palace_mapping.json`
4. `references/distilled/sihua_policy_candidates.json`
5. `references/distilled/formation_policy_candidates.json`
6. then fall back to `classical_texts/` and `raw_corpus/`

This is already wired into `SKILL.md`.

## Current State Summary

The project is no longer in "raw notes" stage.

It is currently in:

- partial raw completeness
- strong analysis foundation
- early runtime distillation
- early validation infrastructure

The best description of current status is:

- raw corpus: usable
- analysis: meaningful
- distilled runtime: partial but real
- compare corpus: still weak
- final skill behavior: not fully wired yet

## Immediate Next Work

These are the highest-value next actions now:

1. Expand `star_semantic_vectors.json` using already-ingested raw star records.
2. Keep refining `neg.limit_collision` branch rules for runtime use.
3. Find pure cases or raw evidence for `neg.break_wealth_flow`.
4. Backfill compare-layer material from `全集 / 宣微 / 十八飛星`.
5. Improve traceability so every distilled conclusion has cleaner source coverage.

## What Not To Prioritize Right Now

Do not default to these unless they directly unblock a mechanism:

- broad case harvesting
- adding more famous historical names just because they exist
- polishing prose summaries
- speculative theory without raw or case support

## If Continuing In A New Session

Read these first:

- `references/WORK_LOG.md`
- `references/corpus_index.md`
- `references/remaining_tasks.md`
- `references/distilled/mapping.json`
- `references/distilled/runtime_policy.json`

Then continue from the current distilled/runtime bottlenecks, not from generic raw collection.

## Recent Execution Log

- `2026-03-18`
  - rewrote the skill structure and AI-efficient schema
  - converted early corpus files into record-based format
  - ingested major parts of `全書 卷一-卷三`
  - began star corpus expansion and early sihua / formation analysis

- `2026-03-18`
  - ingested first batch of `命圖` cases
  - created `case_validation.md`
  - identified `neg.limit_collision` as the strongest validated mechanism

- `2026-03-19`
  - expanded `命圖` corpus to 30 cases
  - shifted priority away from broad case harvesting
  - created `term_normalization.md` and `term_normalization_map.json`
  - created `mapping.json`, `mechanism_branches.json`, and `runtime_policy.json`
  - added `star_semantic_vectors.json` as partial runtime support
  - added `traceability_index.json`
  - added `output_contract.json`
  - added `case_regression_report.md`
  - added `scripts/validate_distilled.js` and verified current distilled assets
