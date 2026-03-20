# 剩餘任務總表

## metadata
- topic: Zi Wei Dou Shu 剩餘任務
- status: active
- purpose: 將所有剩餘工作整理成可執行 backlog
- ordering: 依賴優先

## phase_1_raw_corpus

- id: task.raw.vol2.zinv
  status: partial
  priority: high
  scope: 補卷二子女宮原始斷語
  output: `raw_corpus/quan_shu/vol2/palaces_remaining.md` 對應 records

- id: task.raw.vol2.jie
  status: partial
  priority: high
  scope: 補卷二疾厄宮原始斷語
  output: `raw_corpus/quan_shu/vol2/palaces_remaining.md` 對應 records

- id: task.raw.vol2.qianyi
  status: partial
  priority: high
  scope: 補卷二遷移宮原始斷語
  output: `raw_corpus/quan_shu/vol2/palaces_remaining.md` 對應 records

- id: task.raw.vol2.jiaoyou
  status: partial
  priority: high
  scope: 補卷二交友宮原始斷語
  output: `raw_corpus/quan_shu/vol2/palaces_remaining.md` 對應 records

- id: task.raw.vol2.guanlu
  status: partial
  priority: high
  scope: 補卷二官祿宮原始斷語
  output: `raw_corpus/quan_shu/vol2/palaces_remaining.md` 對應 records

- id: task.raw.vol2.tianzhai
  status: partial
  priority: high
  scope: 補卷二田宅宮原始斷語
  output: `raw_corpus/quan_shu/vol2/palaces_remaining.md` 對應 records

- id: task.raw.vol2.fude
  status: partial
  priority: high
  scope: 補卷二福德宮原始斷語
  output: `raw_corpus/quan_shu/vol2/palaces_remaining.md` 對應 records

- id: task.raw.vol2.fumu
  status: partial
  priority: high
  scope: 補卷二父母宮原始斷語
  output: `raw_corpus/quan_shu/vol2/palaces_remaining.md` 對應 records

- id: task.raw.vol3.tanxing
  status: in_progress
  priority: high
  scope: 補卷三談星要論其餘條目
  output: `raw_corpus/quan_shu/vol3/time_cycles_raw.md`

- id: task.raw.vol3.renge
  status: partial
  priority: high
  scope: 補卷三論人命入格
  output: `raw_corpus/quan_shu/vol3/time_cycles_raw.md`

- id: task.raw.vol3.gegao
  status: partial
  priority: high
  scope: 補卷三論格星數高下
  output: `raw_corpus/quan_shu/vol3/time_cycles_raw.md`

- id: task.raw.vol3.dayun
  status: partial
  priority: high
  scope: 補卷三論大限十年禍福
  output: `raw_corpus/quan_shu/vol3/time_cycles_raw.md`

- id: task.raw.vol3.taisui
  status: partial
  priority: high
  scope: 補卷三論二限太歲吉凶與流年太歲條目
  output: `raw_corpus/quan_shu/vol3/time_cycles_raw.md`

- id: task.raw.vol3.children
  status: partial
  priority: medium
  scope: 補卷三小兒命相關條目
  output: `raw_corpus/quan_shu/vol3/time_cycles_raw.md`

- id: task.raw.vol4.case_ingest
  status: in_progress
  priority: medium_high
  scope: 定向導入卷四可裁決未解機制的案例，不再無差別擴表
  output: `raw_corpus/quan_shu/vol4/case_records.md`

## phase_2_star_corpus

- id: task.raw.stars.batch_a.secondary
  status: in_progress
  priority: high
  scope: 補 Batch A 星曜的入宮、旺陷、交會條目
  output: `classical_texts/stars_classical.md`, `raw_corpus/stars/batch_a_foundation_stars.md`

- id: task.raw.stars.batch_b.secondary
  status: in_progress
  priority: high
  scope: 補 Batch B 星曜的交會、入宮、旺陷條目
  output: `classical_texts/stars_classical.md`, `raw_corpus/stars/batch_b_malefic_and_mobility_stars.md`

- id: task.raw.stars.batch_c.jiekong_mapping
  status: in_progress
  priority: high
  scope: 校對截空與截路術語是否完全對應
  output: `analysis/external_source_leads.md`, `analysis/star_gap_analysis.md`

- id: task.raw.stars.batch_c.jielu_raw
  status: pending
  priority: high
  scope: 補截路或截空阻斷條目的直接 raw
  output: `raw_corpus/stars/batch_c_void_and_interruption_stars.md`

- id: task.raw.stars.extra
  status: pending
  priority: medium
  scope: 補文曲、天相、貪狼、七殺、破軍等尚未完整收錄的原始星性
  output: `classical_texts/stars_classical.md`

## phase_3_compare_corpus

- id: task.compare.quanji
  status: pending
  priority: high
  scope: 導入《紫微鬥數全集》並建立 compare records
  output: `raw_corpus/quan_ji/*`, 新 compare 檔

- id: task.compare.xuanwei
  status: pending
  priority: high
  scope: 導入《紫微鬥數宣微》並建立 compare records
  output: `raw_corpus/xuan_wei/*`, 新 compare 檔

- id: task.compare.feixing18
  status: pending
  priority: medium_high
  scope: 導入《十八飛星》作為星曜溯源資料
  output: `raw_corpus/others/*` 或專屬目錄

- id: task.compare.sihua.backfill
  status: pending
  priority: high
  scope: 為庚天府科等 compare 說法補直接 raw 或降權
  output: `analysis/sihua_conflict_analysis.md`, `classical_texts/sihua_conflicts_raw.md`

## phase_4_analysis

- id: task.analysis.sihua.iteration
  status: in_progress
  priority: high
  scope: 隨新 raw 持續重算四化衝突評分
  output: `analysis/sihua_conflict_analysis.md`, `distilled/sihua_policy_candidates.json`

- id: task.analysis.formation.iteration
  status: in_progress
  priority: high
  scope: 隨新 raw 持續重算格局評分
  output: `analysis/formation_pattern_analysis.md`, `analysis/formation_scoring.md`, `distilled/formation_policy_candidates.json`

- id: task.analysis.negative_mechanisms
  status: in_progress
  priority: high
  scope: 擴寫負向機制模板
  output: `analysis/negative_mechanisms.md`

- id: task.analysis.palace_derivation
  status: in_progress
  priority: medium_high
  scope: 建立宮位派生關係分析檔
  output: 新增 `analysis/palace_derivation.md`

- id: task.analysis.case_validation
  status: partial
  priority: high
  scope: 用卷四案例回驗四化與格局模型
  output: 新增 `analysis/case_validation.md`

- id: task.analysis.term_normalization
  status: in_progress
  priority: high
  scope: 建立古文術語正規化表
  output: 新增 `analysis/term_normalization.md`, `distilled/term_normalization_map.json`

## phase_5_distillation

- id: task.distill.sihua_mapping
  status: in_progress
  priority: high
  scope: 生成四化 policy/mapping 穩定版
  output: `distilled/sihua_policy_candidates.json` 穩定化或新 mapping

- id: task.distill.formation_mapping
  status: in_progress
  priority: high
  scope: 生成格局 family/score 穩定版
  output: `distilled/formation_policy_candidates.json`

- id: task.distill.palace_mapping
  status: partial
  priority: high
  scope: 生成十二宮 mapping
  output: 新增 `distilled/palace_mapping.json`

- id: task.distill.star_vectors
  status: partial
  priority: medium_high
  scope: 生成星曜語義向量或壓縮表示
  output: 新增 `distilled/star_semantic_vectors.json`

- id: task.distill.master_mapping
  status: partial
  priority: high
  scope: 生成可供 skill 秒級檢索的總 mapping
  output: 新增 `distilled/mapping.json`, `distilled/mechanism_branches.json`

## phase_6_skill_runtime

- id: task.skill.runtime_policy
  status: partial
  priority: medium_high
  scope: 讓 skill 執行時可切換 raw_first / compare_quanshu / zhongzhou / north policy
  output: `SKILL.md`, `distilled/runtime_policy.json` 與 runtime 配置

- id: task.skill.citation_mode
  status: partial
  priority: medium
  scope: 讓 skill 在輸出時能帶 source ids
  output: `SKILL.md`, `distilled/traceability_index.json`, `distilled/output_contract.json`

- id: task.skill.analysis_mode
  status: partial
  priority: medium
  scope: 區分解盤模式與研究模式
  output: `SKILL.md`, `distilled/runtime_policy.json`, `distilled/output_contract.json`

## phase_7_validation

- id: task.validation.json
  status: partial
  priority: medium
  scope: 驗證所有 distilled json 可解析
  output: 驗證腳本或檢查流程

- id: task.validation.traceability
  status: partial
  priority: high
  scope: 驗證每個 distilled 結論都可回溯至 raw 或 compare
  output: `distilled/traceability_index.json`, `scripts/validate_distilled.js`

- id: task.validation.case_regression
  status: partial
  priority: high
  scope: 用卷四案例做回歸驗證
  output: `analysis/case_regression_report.md`

## immediate_next

- id: next.001
  status: ready
  scope: 將 `star_semantic_vectors.json` 從 partial 擴到更多已收錄星曜

- id: next.002
  status: ready
  scope: 針對 `neg.break_wealth_flow` 定向搜尋純祿馬受阻 raw/case；目前已檢查韓通之後首批 queued 案，尚未找到更純樣本

- id: next.003
  status: ready
  scope: 建立 case regression 報告，驗證 runtime mapping 對既有案例是否一致
