# 術語正規化表

## metadata
- topic: 紫微鬥數術語正規化
- layer: analysis
- status: in_progress
- purpose: 把 raw corpus 中反覆出現但寫法不一的古文術語壓成穩定 canonical terms，供 compare、distilled 與 skill runtime 使用
- method: evidence_grouping

## normalization_principles
- principle_id: norm.001
  claim: 正規化只統一檢索與推理用 canonical term，不覆蓋 raw `quote`
  implication: 原文保留，mapping 層另加 `canonical_term`

- principle_id: norm.002
  claim: 語義相近但未證明完全同義者，只能標為 `related_terms`，不可直接硬合併
  implication: `截空` 與 `截路` 目前仍屬此類

- principle_id: norm.003
  claim: 應把「觸發層」、「兇曜族羣」、「結果類型」分開正規化，避免把星曜名和機制名混成一類
  implication: 例如 `太歲` 是 trigger layer，不等於 `喪門` 或 `白虎`

## records
- canonical_term: limit_layers
  type: trigger_stack
  aliases: [大限, 小限, 太歲, 流年]
  status: stable
  semantic_role: 應期層
  distinctions:
    - 大限: 十年層
    - 小限: 年內短期層
    - 太歲: 年度主觸發層
    - 流年: 年度盤面與太歲配合的外層
  evidence:
    theory: [quanshu.v3.dayun.002, quanshu.v3.dayun.003, quanshu.v3.taisui.002, quanshu.v3.taisui.003]
    cases: [case.quanshu.v4.001, case.quanshu.v4.015, case.quanshu.v4.020, case.quanshu.v4.023]
  mapping_use:
    - runtime 可把四者視為同一 `trigger_stack` 的不同層級
    - validation 可量化其重疊度

- canonical_term: void_blockers
  type: disruptor_family
  aliases: [空亡, 天空, 旬空, 截空]
  related_terms: [截路, 空劫]
  status: partially_resolved
  semantic_role: 阻斷/落空
  distinctions:
    - 空亡: 泛稱，偏「落空」
    - 天空: 明確兇觸發星
    - 旬空: 空亡的較弱變體
    - 截空: 已有卷三 primary raw
    - 截路: 已有全書 primary raw，語義明確偏阻截與難行，但仍未確認與截空完全同義
    - 空劫: 同屬破壞 family，但更偏破財/虛耗，不能直接等同空亡
  evidence:
    theory: [quanshu.v3.tanxing.001, quanshu.v3.dayun.003, star.jielu.001, star.jielu.002, star.jielu.003]
    cases: [case.quanshu.v4.009, case.quanshu.v4.020, case.quanshu.v4.024]
    leads: [lead.jiekong.001, lead.jiekong.002, lead.kongwang.001]
  mapping_use:
    - skill 可用 `void_blockers` 作召回詞羣
    - `截空/截路` 仍需保留 unresolved flag，但已不再是「無 raw」狀態

- canonical_term: trap_spaces
  type: spatial_hazard
  aliases: [天羅, 地網, 夾地, 虛絕, 絕地]
  status: stable
  semantic_role: 空間性陷阱/死結位
  distinctions:
    - 天羅/地網: 最常見雙網陷阱
    - 夾地: 兩兇夾限或夾命
    - 虛絕/絕地: 氣勢衰絕位
  evidence:
    theory: [quanshu.v3.dayun.003]
    cases: [case.quanshu.v4.001, case.quanshu.v4.004, case.quanshu.v4.009, case.quanshu.v4.015, case.quanshu.v4.019]
  mapping_use:
    - 可視為 `limit_collision` 的 amplifier family

- canonical_term: blade_malefics
  type: malefic_family
  aliases: [擎羊, 陀羅, 流羊, 流陀, 羊刃]
  status: stable
  semantic_role: 鋒刃/撞擊/切割
  distinctions:
    - 擎羊/陀羅: 本命或固定配置兇曜
    - 流羊/流陀: 流年層的疊加兇曜
    - 羊刃: 同家族，但更偏極端鋒刃化
  evidence:
    theory: [quanshu.v3.taisui.002, quanshu.v3.yangtuo.001, quanshu.v3.qisha.001]
    cases: [case.quanshu.v4.003, case.quanshu.v4.014, case.quanshu.v4.020, case.quanshu.v4.023]
  mapping_use:
    - compare 與 validation 可先壓成同一 `blade_malefics` family，再看層級差異

- canonical_term: mourning_signals
  type: omen_family
  aliases: [喪門, 白虎, 天哭, 病符]
  status: stable
  semantic_role: 喪、哭、病、喪亡前兆
  distinctions:
    - 喪門/白虎: 喪傷、刑災傾向
    - 天哭: 哭泣、哀傷傾向
    - 病符: 病災傾向
  evidence:
    theory: [quanshu.v3.taisui.003]
    cases: [case.quanshu.v4.006, case.quanshu.v4.007, case.quanshu.v4.010, case.quanshu.v4.022]
  mapping_use:
    - 適合放進 `event_risk` 欄，而不是獨立 formation

- canonical_term: injury_env
  type: hazard_family
  aliases: [天傷, 天使]
  status: stable
  semantic_role: 傷害/夾限/官災環境
  distinctions:
    - 天傷: 傷災、破損、夾擊
    - 天使: 傳使/夾地，但在限運語境常與天傷聯動
  evidence:
    theory: [quanshu.v3.dayun.003]
    cases: [case.quanshu.v4.001, case.quanshu.v4.006, case.quanshu.v4.015, case.quanshu.v4.019, case.quanshu.v4.023]
  mapping_use:
    - 可直接作為 `neg.limit_collision` 的 amplifier family

- canonical_term: delayed_success
  type: outcome_pattern
  aliases: [先貧後富, 先抑後揚, 三十六後遂志, 三十五後方得遂志]
  status: emerging
  semantic_role: 非致死型兇限結果
  distinctions:
    - 不是純吉
    - 不是致死
    - 屬「先受阻，後發達」
  evidence:
    theory: [quanshu.v3.mingfu.001]
    cases: [case.quanshu.v4.013, case.quanshu.v4.026]
  mapping_use:
    - 後續可從 `neg.limit_collision` 拆出 nonfatal branch

- canonical_term: structural_deficit
  type: structural_pattern
  aliases: [無正曜, 帶空, 怯劫, 主體缺位]
  status: emerging
  semantic_role: 不是高格翻盤，而是本體先天不足
  distinctions:
    - 與一般煞曜過強不同
    - 更接近 `formation.mingwuzhengyao`
  evidence:
    theory: [quanshu.v3.tanxing.005]
    cases: [case.quanshu.v4.029]
    formations: [formation.mingwuzhengyao]
  mapping_use:
    - 應獨立於 fatal/nonfatal 的結果分級

- canonical_term: mobility_breakers
  type: movement_hazard
  aliases: [沉馬, 馬頭帶箭]
  related_terms: [祿馬交馳, 亡馬, 折足馬]
  status: emerging
  semantic_role: 流動性與行動能力受損
  distinctions:
    - 沉馬: 晚限或行限受阻
    - 馬頭帶箭: 偏刑傷與行動風險
    - 祿馬交馳/亡馬/折足馬: 尚需併回更完整天馬 family
  evidence:
    theory: [quanshu.v3.tanxing.001]
    cases: [case.quanshu.v4.008, case.quanshu.v4.025, case.quanshu.v4.030]
  mapping_use:
    - 對 `neg.break_wealth_flow` 與遷移類規則都重要

## immediate_uses
- use_id: term.use.001
  task: 將 `neg.limit_collision` 的 amplifier 改為引用 canonical families
  target_files: [analysis/negative_mechanisms.md, analysis/case_validation.md]

- use_id: term.use.002
  task: 在後續 distilled mapping 中加入 `canonical_term` 與 `related_terms`
  target_files: [distilled/mapping.json, distilled/star_semantic_vectors.json]

- use_id: term.use.003
  task: 把 `截空/截路` 保留 unresolved flag，避免過早硬合併
  target_files: [analysis/external_source_leads.md, analysis/star_gap_analysis.md]
