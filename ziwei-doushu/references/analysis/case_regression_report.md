# 案例回歸報告

## metadata
- topic: runtime mapping 案例回歸
- layer: analysis
- status: partial
- purpose: 檢查目前 distilled runtime assets 是否能對既有案例做出與分析層一致的判定
- basis: `distilled/mapping.json`, `distilled/mechanism_branches.json`, `distilled/formation_policy_candidates.json`, `analysis/case_validation.md`

## regression_framework
- check_id: regression.001
  target: formation_family
  meaning: runtime 是否能辨識案例所屬 formation family

- check_id: regression.002
  target: mechanism_branch
  meaning: runtime 是否能把案例落到正確的機制分支

- check_id: regression.003
  target: citation_trace
  meaning: runtime 結論是否能回指到既有 source ids

- check_id: regression.004
  target: outcome_alignment
  meaning: runtime 的結論方向是否與 case_validation 現有判定一致

## records
- regression_id: regression.case.001
  case_id: case.quanshu.v4.011
  subject: 孫臏
  runtime_expectation:
    formation: formation.zifutonggong
    mechanism: neg.limit_collision
    branch: fatal
  comparison_basis: [validation.case.007, validation.case.011]
  result:
    formation_family: pass
    mechanism_branch: partial
    citation_trace: pass
    outcome_alignment: pass
  notes:
    - `紫府朝垣` 與 `formation.zifutonggong` 已足夠接近，可穩定召回同一高格 family
    - 但 fatal / nonfatal 分支仍依賴更多細條件，不宜只憑單一 `天羅`

- regression_id: regression.case.002
  case_id: case.quanshu.v4.019
  subject: 張子房
  runtime_expectation:
    formation: formation.zifutonggong
    mechanism: neg.limit_collision
    branch: fatal
  comparison_basis: [validation.case.011]
  result:
    formation_family: pass
    mechanism_branch: pass
    citation_trace: pass
    outcome_alignment: pass
  notes:
    - 此案是目前 runtime 最穩的 fatal branch 標案之一
    - `雙祿 + 紫府 + 大小二限 + 天傷天空天使` 已與 branch policy 高度一致

- regression_id: regression.case.003
  case_id: case.quanshu.v4.013
  subject: 伍明輔
  runtime_expectation:
    formation: none_or_weak
    mechanism: neg.limit_collision
    branch: delayed_success
  comparison_basis: [validation.case.008]
  result:
    formation_family: pass
    mechanism_branch: pass
    citation_trace: pass
    outcome_alignment: pass
  notes:
    - runtime 已能區分這不是 fatal 案，而是 `delayed_success`
    - 這是 branch 分級開始有用的第一個證據

- regression_id: regression.case.004
  case_id: case.quanshu.v4.026
  subject: 百里奚
  runtime_expectation:
    formation: none_or_weak
    mechanism: neg.limit_collision
    branch: delayed_success
  comparison_basis: [validation.case.014]
  result:
    formation_family: pass
    mechanism_branch: pass
    citation_trace: pass
    outcome_alignment: pass
  notes:
    - 與伍明輔案共同構成 delayed-success regression pair

- regression_id: regression.case.005
  case_id: case.quanshu.v4.029
  subject: 劉伶
  runtime_expectation:
    formation: formation.mingwuzhengyao
    mechanism: neg.limit_collision
    branch: structural_deficit
  comparison_basis: [validation.case.015]
  result:
    formation_family: pass
    mechanism_branch: pass
    citation_trace: pass
    outcome_alignment: pass
  notes:
    - 這案證明 runtime 現在能處理「不是高格翻盤，而是主體缺失」的另一類盤勢

- regression_id: regression.case.006
  case_id: case.quanshu.v4.005
  subject: 端木賜
  runtime_expectation:
    formation: none_or_weak
    mechanism: neg.break_wealth_flow
    branch: unresolved
  comparison_basis: [validation.case.003, validation.case.finding.005]
  result:
    formation_family: pass
    mechanism_branch: weak
    citation_trace: pass
    outcome_alignment: partial
  notes:
    - runtime 目前只能把此案穩定判為限運兇案，還不能穩定判成純祿馬斷流
    - 這正是 `neg.break_wealth_flow` 仍需定向補 raw/case 的原因

## summary
- summary_id: regression.summary.001
  claim: 目前 runtime mapping 對 `neg.limit_collision` 的分支化已具備初步可用性，尤其是 fatal / delayed_success / structural_deficit 三支
  support: [regression.case.002, regression.case.003, regression.case.004, regression.case.005]

- summary_id: regression.summary.002
  claim: formation family 的回歸表現已優於早期版本，特別是 `formation.zifutonggong` 與 `formation.mingwuzhengyao`
  support: [regression.case.001, regression.case.002, regression.case.005]

- summary_id: regression.summary.003
  claim: `neg.break_wealth_flow` 仍是 runtime 中最弱的一條，現階段只能作為輔助判讀，不應作為高置信主判據
  support: [regression.case.006, validation.case.finding.005]

## next_action
- task: 補純祿馬受阻案例或 raw
  reason: 讓 `neg.break_wealth_flow` 從 weak/partial 變成 stable

- task: 擴大 regression 樣本到更多 fatal 與 nonfatal 邊界案
  reason: 目前 branch 規則可用，但還不夠密

- task: 後續把 regression 報告機器化
  reason: 最終應從 markdown 報告走向可腳本化檢查
