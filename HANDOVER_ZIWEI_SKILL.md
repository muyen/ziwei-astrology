# Zi Wei Skill Handover

## Project Goal

The final goal is to build the best possible `紫微鬥數` skill by following this pipeline:

1. Collect as much **raw traditional Chinese source data** as possible.
2. Structure all source material into **AI-efficient records**.
3. Run **cross-book comparison** and **conflict analysis**.
4. Reverse engineer the system to find patterns, logic, and generation rules.
5. Distill the results into compact runtime artifacts such as mappings and policy files.
6. Build a skill that can do both:
   - research mode
   - chart reading mode

This is not just a note-taking project. It is a domain knowledge engineering project.

## What This Repo Is About

This repo is building a structured knowledge base for Zi Wei Dou Shu.

The working idea is:

- `raw_corpus/` stores raw source material in structured form
- `classical_texts/` stores thematic cross-source corpora
- `analysis/` stores reverse engineering, scoring, and interpretation frameworks
- `distilled/` stores compact outputs for future skill/runtime use

The repo already has a working `ziwei-doushu` skill shell, but the real value is in the corpus and analysis pipeline.

## Current Architecture

Main skill entry:
- [ziwei-doushu/SKILL.md](/Users/arsenelee/github/ziwei-astrology/ziwei-doushu/SKILL.md)

Readable work log:
- [ziwei-doushu/references/WORK_LOG.md](/Users/arsenelee/github/ziwei-astrology/ziwei-doushu/references/WORK_LOG.md)
- [ziwei-doushu/references/WORK_LOG_ZH.md](/Users/arsenelee/github/ziwei-astrology/ziwei-doushu/references/WORK_LOG_ZH.md)

Core schema:
- [ziwei-doushu/references/ai_corpus_schema.md](/Users/arsenelee/github/ziwei-astrology/ziwei-doushu/references/ai_corpus_schema.md)

Master index:
- [ziwei-doushu/references/corpus_index.md](/Users/arsenelee/github/ziwei-astrology/ziwei-doushu/references/corpus_index.md)

Backlog:
- [ziwei-doushu/references/remaining_tasks.md](/Users/arsenelee/github/ziwei-astrology/ziwei-doushu/references/remaining_tasks.md)

## Important Design Decisions

### 1. All AI-facing docs use AI-efficient format

We intentionally moved away from human-friendly prose notes.

All important documents are being converted into record-based format with fields like:

- `id`
- `layer`
- `source`
- `type`
- `subject`
- `conditions`
- `claim`
- `quote`
- `tags`
- `conflict_group`
- `confidence`

### 2. Raw content should stay in Traditional Chinese

The actual source content in `quote` and most `claim` fields should stay in Traditional Chinese.

Schema keys stay in English because they are better for parsing and future tooling.

### 3. Analysis is not casual commentary

Deep analysis is being handled as:

- symbolic analysis
- scoring
- conflict resolution
- reverse engineering

Not just summary writing.

### 4. Highest model for analysis

The instruction from the user is:

- use the strongest available model for analysis tasks
- local data engineering can continue on the main flow

So in future sessions:

- raw ingestion / file organization can be done normally
- deep analysis should use highest model path

## What Has Been Completed

### A. Skill and schema foundation

Completed:

- rewrote the skill around `raw -> compare -> distilled -> chart reading`
- created a formal corpus schema
- created a corpus index

Files:
- [ziwei-doushu/SKILL.md](/Users/arsenelee/github/ziwei-astrology/ziwei-doushu/SKILL.md)
- [ziwei-doushu/references/ai_corpus_schema.md](/Users/arsenelee/github/ziwei-astrology/ziwei-doushu/references/ai_corpus_schema.md)
- [ziwei-doushu/references/corpus_index.md](/Users/arsenelee/github/ziwei-astrology/ziwei-doushu/references/corpus_index.md)

### B. Raw/source corpora already structured

Completed:

- classical lyrics
- star Q&A corpus
- formation corpus
- sihua conflict corpus
- volume 1 core theories
- volume 2 partial palace corpus
- volume 3 first substantial timing/theory records, including 小兒命、二限太歲、陰騭延壽、羊陀迭併、七殺重逢

Important files:
- [ziwei-doushu/references/classical_texts/lyrics.md](/Users/arsenelee/github/ziwei-astrology/ziwei-doushu/references/classical_texts/lyrics.md)
- [ziwei-doushu/references/classical_texts/stars_classical.md](/Users/arsenelee/github/ziwei-astrology/ziwei-doushu/references/classical_texts/stars_classical.md)
- [ziwei-doushu/references/classical_texts/formations_raw.md](/Users/arsenelee/github/ziwei-astrology/ziwei-doushu/references/classical_texts/formations_raw.md)
- [ziwei-doushu/references/classical_texts/sihua_conflicts_raw.md](/Users/arsenelee/github/ziwei-astrology/ziwei-doushu/references/classical_texts/sihua_conflicts_raw.md)
- [ziwei-doushu/references/raw_corpus/quan_shu/vol1/core_theories.md](/Users/arsenelee/github/ziwei-astrology/ziwei-doushu/references/raw_corpus/quan_shu/vol1/core_theories.md)
- [ziwei-doushu/references/raw_corpus/quan_shu/vol2/palaces_detail.md](/Users/arsenelee/github/ziwei-astrology/ziwei-doushu/references/raw_corpus/quan_shu/vol2/palaces_detail.md)
- [ziwei-doushu/references/raw_corpus/quan_shu/vol2/palaces_remaining.md](/Users/arsenelee/github/ziwei-astrology/ziwei-doushu/references/raw_corpus/quan_shu/vol2/palaces_remaining.md)
- [ziwei-doushu/references/raw_corpus/quan_shu/vol3/time_cycles_raw.md](/Users/arsenelee/github/ziwei-astrology/ziwei-doushu/references/raw_corpus/quan_shu/vol3/time_cycles_raw.md)
- [ziwei-doushu/references/raw_corpus/quan_shu/vol4/case_records.md](/Users/arsenelee/github/ziwei-astrology/ziwei-doushu/references/raw_corpus/quan_shu/vol4/case_records.md)

### C. Volume 2 remaining palaces

Completed first-pass raw records for:

- 子女宮
- 疾厄宮
- 遷移宮
- 交友/奴僕宮
- 官祿宮
- 田宅宮
- 福德宮
- 父母宮

Status:

- these are no longer missing
- they are still incomplete and may need finer splitting

File:
- [ziwei-doushu/references/raw_corpus/quan_shu/vol2/palaces_remaining.md](/Users/arsenelee/github/ziwei-astrology/ziwei-doushu/references/raw_corpus/quan_shu/vol2/palaces_remaining.md)

### D. Star corpus expansion

Completed raw star records for key stars:

- 太陰
- 天府
- 左輔
- 右弼
- 文昌
- 祿存
- 天馬
- 擎羊
- 陀羅
- 火星
- 鈴星
- 空劫

Files:
- [ziwei-doushu/references/classical_texts/stars_classical.md](/Users/arsenelee/github/ziwei-astrology/ziwei-doushu/references/classical_texts/stars_classical.md)
- [ziwei-doushu/references/raw_corpus/stars/batch_a_foundation_stars.md](/Users/arsenelee/github/ziwei-astrology/ziwei-doushu/references/raw_corpus/stars/batch_a_foundation_stars.md)
- [ziwei-doushu/references/raw_corpus/stars/batch_b_malefic_and_mobility_stars.md](/Users/arsenelee/github/ziwei-astrology/ziwei-doushu/references/raw_corpus/stars/batch_b_malefic_and_mobility_stars.md)
- [ziwei-doushu/references/raw_corpus/stars/batch_c_void_and_interruption_stars.md](/Users/arsenelee/github/ziwei-astrology/ziwei-doushu/references/raw_corpus/stars/batch_c_void_and_interruption_stars.md)

### E. Quantitative and reverse-engineering framework

Completed:

- general symbolic scoring framework
- sihua conflict analysis
- formation scoring and pattern analysis
- negative mechanism analysis
- first-pass case validation analysis
- palace derivation analysis

Files:
- [ziwei-doushu/references/analysis/quantitative_framework.md](/Users/arsenelee/github/ziwei-astrology/ziwei-doushu/references/analysis/quantitative_framework.md)
- [ziwei-doushu/references/analysis/sihua_conflict_analysis.md](/Users/arsenelee/github/ziwei-astrology/ziwei-doushu/references/analysis/sihua_conflict_analysis.md)
- [ziwei-doushu/references/analysis/formation_scoring.md](/Users/arsenelee/github/ziwei-astrology/ziwei-doushu/references/analysis/formation_scoring.md)
- [ziwei-doushu/references/analysis/formation_pattern_analysis.md](/Users/arsenelee/github/ziwei-astrology/ziwei-doushu/references/analysis/formation_pattern_analysis.md)
- [ziwei-doushu/references/analysis/negative_mechanisms.md](/Users/arsenelee/github/ziwei-astrology/ziwei-doushu/references/analysis/negative_mechanisms.md)
- [ziwei-doushu/references/analysis/case_validation.md](/Users/arsenelee/github/ziwei-astrology/ziwei-doushu/references/analysis/case_validation.md)
- [ziwei-doushu/references/analysis/palace_derivation.md](/Users/arsenelee/github/ziwei-astrology/ziwei-doushu/references/analysis/palace_derivation.md)

### F. Distilled runtime candidates

Completed:

- sihua candidate policy
- formation candidate policy
- palace mapping
- term normalization map
- partial master mapping
- mechanism branch policy
- runtime policy
- partial star semantic vectors
- traceability index
- output contract
- distilled validation script
- case regression report

Files:
- [ziwei-doushu/references/distilled/sihua_policy_candidates.json](/Users/arsenelee/github/ziwei-astrology/ziwei-doushu/references/distilled/sihua_policy_candidates.json)
- [ziwei-doushu/references/distilled/formation_policy_candidates.json](/Users/arsenelee/github/ziwei-astrology/ziwei-doushu/references/distilled/formation_policy_candidates.json)
- [ziwei-doushu/references/distilled/palace_mapping.json](/Users/arsenelee/github/ziwei-astrology/ziwei-doushu/references/distilled/palace_mapping.json)
- [ziwei-doushu/references/distilled/term_normalization_map.json](/Users/arsenelee/github/ziwei-astrology/ziwei-doushu/references/distilled/term_normalization_map.json)
- [ziwei-doushu/references/distilled/mapping.json](/Users/arsenelee/github/ziwei-astrology/ziwei-doushu/references/distilled/mapping.json)
- [ziwei-doushu/references/distilled/mechanism_branches.json](/Users/arsenelee/github/ziwei-astrology/ziwei-doushu/references/distilled/mechanism_branches.json)
- [ziwei-doushu/references/distilled/runtime_policy.json](/Users/arsenelee/github/ziwei-astrology/ziwei-doushu/references/distilled/runtime_policy.json)
- [ziwei-doushu/references/distilled/star_semantic_vectors.json](/Users/arsenelee/github/ziwei-astrology/ziwei-doushu/references/distilled/star_semantic_vectors.json)
- [ziwei-doushu/references/distilled/traceability_index.json](/Users/arsenelee/github/ziwei-astrology/ziwei-doushu/references/distilled/traceability_index.json)
- [ziwei-doushu/references/distilled/output_contract.json](/Users/arsenelee/github/ziwei-astrology/ziwei-doushu/references/distilled/output_contract.json)
- [ziwei-doushu/scripts/validate_distilled.js](/Users/arsenelee/github/ziwei-astrology/ziwei-doushu/scripts/validate_distilled.js)
- [ziwei-doushu/references/analysis/case_regression_report.md](/Users/arsenelee/github/ziwei-astrology/ziwei-doushu/references/analysis/case_regression_report.md)

### G. Case acquisition tracking

Completed:

- edition mapping for the case section
- recognition that some editions label the case section as volume 4, while others place it in volume 6
- direct full-text access to the case section via 識典古籍 `命圖`
- first 30 case records already ingested, from 孔仲尼 through 韓通
- `case_validation.md` now contains 16 concrete validation records and third-batch findings

Files:
- [ziwei-doushu/references/analysis/case_source_acquisition.md](/Users/arsenelee/github/ziwei-astrology/ziwei-doushu/references/analysis/case_source_acquisition.md)
- [ziwei-doushu/references/analysis/external_source_leads.md](/Users/arsenelee/github/ziwei-astrology/ziwei-doushu/references/analysis/external_source_leads.md)
- [ziwei-doushu/references/raw_corpus/quan_shu/vol4/case_records.md](/Users/arsenelee/github/ziwei-astrology/ziwei-doushu/references/raw_corpus/quan_shu/vol4/case_records.md)
- [ziwei-doushu/references/analysis/case_validation.md](/Users/arsenelee/github/ziwei-astrology/ziwei-doushu/references/analysis/case_validation.md)

## Key Current Findings

### 1. Sihua

Current provisional defaults:

- 戊: `貪狼祿 太陰權 右弼科 天機忌`
- 庚: `太陽祿 武曲權 太陰科 天同忌`
- 壬: `天梁祿 紫微權 左輔科 武曲忌`

Important point:

- `庚天府科` is still not confirmed by direct raw support in the repo
- `庚太陰科` currently has stronger support

### 2. Formation analysis

Strongest current formations:

- `陽梁昌祿`
- `機月同梁`
- `祿倒馬倒`

Important point:

- formations behave like compressed pattern templates
- not just loose star descriptions

### 3. Negative mechanisms

Important point:

- `祿存 + 天馬 + 空劫/空亡/截空` now forms a meaningful negative mechanism chain
- this strongly supports the logic behind `祿倒馬倒`

### 4. Case validation is now real

Important point:

- `孔仲尼命` 與 `顔亞聖命` 已能直接回驗卷三的兇限條件
- 目前最先被案例支持的機制是：
  - `太歲 + 劫空`
  - `小限 + 天傷`
  - `羊陀迭併`
  - `七殺重逢`
  - `天羅地網`
- 這表示 case layer 已經能開始反向校驗 raw 與 analysis，不再只是待補資料

## What Still Needs To Be Completed

### Highest priority

1. Continue volume 3 ingestion
   - more `論流年太歲吉凶星殺`
   - `論太歲小限星辰廟陷遇十二宮中吉凶`
   - `論諸星同位垣各司所宜分別富貴貧賤夭壽`

2. Continue ingesting case text for `古今富貴貧賤夭壽命圖`
   - direct正文已找到，現在的瓶頸是沿 `命圖 -> 下一篇` 逐案結構化與 analysis 同步

3. Continue star second-layer records
   - more `入宮`
   - more `交會`
   - more `旺陷`
   - more `與他星同度`

4. Continue compare corpus ingestion
   - `紫微鬥數全集`
   - `紫微鬥數宣微`
   - `十八飛星`

### Important but not immediate

5. Create stable traceable mappings
   - star semantic vectors
   - palace mapping refinement
   - final master mapping

6. Build runtime policy switching into the skill
   - `raw_first`
   - `compare_quanshu`
   - `zhongzhou`
   - `north`

7. Case-based validation
   - test whether formation and sihua models match actual cases

## Recommended Immediate Next Steps For The Next Session

Paste this into the next Codex session and continue:

### Next execution order

1. Open [ziwei-doushu/references/remaining_tasks.md](/Users/arsenelee/github/ziwei-astrology/ziwei-doushu/references/remaining_tasks.md)
2. Continue `task.raw.vol3.tanxing`, `task.raw.vol3.taisui`, `task.raw.vol3.children`, `task.raw.vol4.case_ingest`, and `task.analysis.case_validation`
3. Continue `task.raw.stars.batch_c.jielu_raw`
4. Keep syncing new raw into:
   - [ziwei-doushu/references/analysis/sihua_conflict_analysis.md](/Users/arsenelee/github/ziwei-astrology/ziwei-doushu/references/analysis/sihua_conflict_analysis.md)
   - [ziwei-doushu/references/analysis/formation_pattern_analysis.md](/Users/arsenelee/github/ziwei-astrology/ziwei-doushu/references/analysis/formation_pattern_analysis.md)
   - [ziwei-doushu/references/distilled/sihua_policy_candidates.json](/Users/arsenelee/github/ziwei-astrology/ziwei-doushu/references/distilled/sihua_policy_candidates.json)
   - [ziwei-doushu/references/distilled/formation_policy_candidates.json](/Users/arsenelee/github/ziwei-astrology/ziwei-doushu/references/distilled/formation_policy_candidates.json)

## Suggested Prompt For The Next Codex Session

Use this:

```text
Continue the Zi Wei Dou Shu knowledge-engineering project in this repo.

Read these first:
- ziwei-doushu/references/remaining_tasks.md
- ziwei-doushu/references/corpus_index.md
- HANDOVER_ZIWEI_SKILL.md

Core rules:
- Do not stop to ask for confirmation unless truly blocked.
- Keep working through known tasks continuously.
- Use the strongest available model path for analysis tasks.
- Keep raw source content in Traditional Chinese.
- Keep schema fields AI-efficient and structured.
- Sync analysis/distilled layers whenever new raw data materially changes the model.

Immediate priorities:
1. Continue volume 3 raw ingestion.
2. Continue ingesting the case section 古今富貴貧賤夭壽命圖 from the confirmed 識典古籍 case pages.
3. Continue star second-layer records and cross-text backfill.
4. Keep updating analysis and distilled artifacts.
```

## Bottom Line

This project is trying to turn Zi Wei Dou Shu from:

- scattered traditional text

into:

- structured raw corpus
- quantified symbolic model
- conflict-aware distilled runtime knowledge
- a high-quality skill that is both explainable and usable

That is the final objective.
