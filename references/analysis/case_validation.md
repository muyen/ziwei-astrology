# 案例回驗分析

## metadata
- topic: 卷四案例回驗
- layer: analysis
- status: provisional
- basis: raw_case_plus_theory_plus_mechanism
- purpose: 用《古今富貴貧賤夭壽命圖》回驗卷三時限規則、負向機制與格局模型
- source_scope: `raw_corpus/quan_shu/vol4/case_records.md`
- method: symbolic_validation_scoring

## validation_framework

### scoring_dimensions
- dimension: structure_fit
  weight: 0.30
  meaning: 案例盤式與既有格局/機制模板的結構吻合度

- dimension: trigger_fit
  weight: 0.25
  meaning: 案例中出現的觸發條件是否對應既有 raw 規則，如劫空、羊陀、天傷、地網、天羅

- dimension: timing_fit
  weight: 0.20
  meaning: 大限、小限、太歲的應期描述是否與卷三時限條目一致

- dimension: outcome_fit
  weight: 0.15
  meaning: 模型預期的結果是否與案例實際應驗結果一致

- dimension: cross_support
  weight: 0.10
  meaning: 是否同時得到 formation、mechanism、theory 三層互證

### scoring_formula
```text
ValidationScore =
  0.30 * StructureFit +
  0.25 * TriggerFit +
  0.20 * TimingFit +
  0.15 * OutcomeFit +
  0.10 * CrossSupport
```

### verdict_thresholds
- strong_support: `>= 0.80`
- medium_support: `0.65 - 0.79`
- partial_support: `0.45 - 0.64`
- weak_support: `< 0.45`

## validation_records
- validation_id: validation.case.001
  case_id: case.quanshu.v4.001
  subject: 孔仲尼
  target_hypotheses:
    theory: [quanshu.v3.taisui.002, quanshu.v3.taisui.003, quanshu.v3.dayun.003]
    mechanisms: [neg.limit_collision]
    formations: []
  observed_pattern:
    structure: 活祿逢迎而成大名，晚年由劫空、天傷、天羅、地網觸發死亡應期
    trigger_chain: [劫空, 天傷, 天羅, 地網, 太歲]
    outcome: 先貴後兇，62歲受困，73歲死
  scoring:
    structure_fit: 0.58
    trigger_fit: 0.84
    timing_fit: 0.90
    outcome_fit: 0.90
    cross_support: 0.42
    total: 0.729
  verdict: medium_support
  claim: 本案強力支持卷三的歲限、太歲與地網天羅觸發規則，但對既有 formation 層幫助較少，主要是時限模型的驗證案
  notes:
    - `quanshu.v3.taisui.002` 的「分看大限、小限、太歲，再看交會」在本案幾乎是直接案例化
    - 本案說明吉命不保證終身平順，限運層可以推翻本命層優勢

- validation_id: validation.case.002
  case_id: case.quanshu.v4.003
  subject: 顔亞聖
  target_hypotheses:
    theory: [quanshu.v3.qisha.001, quanshu.v3.yangtuo.001, quanshu.v3.dayun.002]
    mechanisms: [neg.malefic_convergence, neg.limit_collision]
    formations: []
  observed_pattern:
    structure: 命坐魁鉞、身逢權祿、昌曲，本有文貴之資，但昌曲陷天傷，大限遇七殺重逢，流年再逢羊陀迭併
    trigger_chain: [天傷, 七殺重逢, 羊陀迭併, 太歲]
    outcome: 不能發達，壬辰年死
  scoring:
    structure_fit: 0.76
    trigger_fit: 0.98
    timing_fit: 0.92
    outcome_fit: 0.95
    cross_support: 0.90
    total: 0.887
  verdict: strong_support
  claim: 本案是卷三 `七殺重逢` 與 `羊陀迭併` 最直接的回驗案例之一，也支持煞曜收斂會把原本的文貴結構拉向事件性災厄
  notes:
    - `case.quanshu.v4.003` 幾乎把 `quanshu.v3.qisha.001` 直接寫成實例
    - 本案證明「原命帶吉」不會抵消「限運重兇疊併」

- validation_id: validation.case.003
  case_id: case.quanshu.v4.005
  subject: 端木賜
  target_hypotheses:
    theory: [quanshu.v3.taisui.002, quanshu.v3.mingfu.001]
    mechanisms: []
    formations: []
  observed_pattern:
    structure: 祿存坐命、暗祿會合，本具富貴之勢，但巳亥限、太歲相沖與喪門忌會構成死亡條件
    trigger_chain: [巳亥限, 太歲相沖, 喪門, 化忌]
    outcome: 41歲死
  scoring:
    structure_fit: 0.67
    trigger_fit: 0.82
    timing_fit: 0.86
    outcome_fit: 0.92
    cross_support: 0.55
    total: 0.754
  verdict: medium_support
  claim: 本案支持卷三的限步翻轉邏輯，特別是 `quanshu.v3.mingfu.001` 所說的「本命有富勢，但限步逢兇仍可早亡」
  notes:
    - 這案不是吉格失效，而是限運與太歲相沖直接壓倒本命優勢
    - 後續可拿來比較更多祿存型案例是否都有相似的沖限死亡條件

- validation_id: validation.case.004
  case_id: case.quanshu.v4.008
  subject: 子産
  target_hypotheses:
    theory: [quanshu.v3.mingfu.001, quanshu.v3.dayun.003]
    mechanisms: [neg.limit_collision]
    formations: [formation.zifutonggong]
  observed_pattern:
    structure: 紫府朝垣、左輔文昌加會，明顯屬高秩序富貴模板；但晚限遇沉馬與地網逢忌
    trigger_chain: [沉馬, 地網, 化忌]
    outcome: 一生富貴名揚，64歲凶死
  scoring:
    structure_fit: 0.88
    trigger_fit: 0.72
    timing_fit: 0.77
    outcome_fit: 0.83
    cross_support: 0.70
    total: 0.800
  verdict: strong_support
  claim: 本案對 `formation.zifutonggong` 提供了結構層支持，同時也證明高富貴模板仍會被晚限的地網忌曜反轉
  notes:
    - `formation.zifutonggong` 雖非與「紫府朝垣」完全同名，但結構層高度相近
    - 本案使 formation 層不再只有語義推論，而有實際人物回驗

- validation_id: validation.case.005
  case_id: case.quanshu.v4.009
  subject: 蘇丞相
  target_hypotheses:
    theory: [quanshu.v3.dayun.003, quanshu.v3.taisui.002]
    mechanisms: [neg.break_wealth_flow, neg.limit_collision]
    formations: [formation.rizhaoleimen]
  observed_pattern:
    structure: 日月權祿、左右加會，本可成顯貴；但劫空沖守，再加地網、天羅重疊
    trigger_chain: [劫空, 地網, 天羅, 太歲]
    outcome: 名譽聲揚，34歲死
  scoring:
    structure_fit: 0.84
    trigger_fit: 0.91
    timing_fit: 0.89
    outcome_fit: 0.94
    cross_support: 0.82
    total: 0.878
  verdict: strong_support
  claim: 本案強力支持「吉格不敵重疊兇限」這條主線，也部分支持 `neg.break_wealth_flow` 對空劫阻斷的抽象
  notes:
    - 本案沒有直接寫出祿馬，因此對 `neg.break_wealth_flow` 屬偏旁證，不是最純粹證據
    - 但對 `quanshu.v3.dayun.003` 的歲限危險條件幾乎是正面命中

- validation_id: validation.case.006
  case_id: case.quanshu.v4.010
  subject: 晏平仲
  target_hypotheses:
    theory: [quanshu.v3.taisui.003, quanshu.v3.dayun.003]
    mechanisms: [neg.limit_collision]
    formations: [formation.rizhaoleimen]
  observed_pattern:
    structure: 丹墀貴格、太陽守命、日月爭耀、科權祿會合，屬明顯權位名望模板
    trigger_chain: [太歲, 喪門, 病符, 天哭]
    outcome: 文武雙全，但43歲死
  scoring:
    structure_fit: 0.86
    trigger_fit: 0.79
    timing_fit: 0.83
    outcome_fit: 0.90
    cross_support: 0.72
    total: 0.830
  verdict: strong_support
  claim: 本案支持 `formation.rizhaoleimen` 類型的外顯權位模板，也驗證太歲與小限兇曜沖照足以使高格早折
  notes:
    - 本案把「格高」與「壽夭」放在同一盤上，非常適合做高格失效條件研究
    - 後續若補到更多日月權位型案例，可進一步細分其失效模式

- validation_id: validation.case.007
  case_id: case.quanshu.v4.011
  subject: 孫臏
  target_hypotheses:
    theory: [quanshu.v3.mingfu.001]
    mechanisms: [neg.limit_collision]
    formations: [formation.zifutonggong]
  observed_pattern:
    structure: 紫府朝垣、左右拱照、科權祿三方會合，兼有文昌武曲，屬高秩序文武雙全模板
    trigger_chain: [大限, 天羅]
    outcome: 終身富貴，晚限轉兇
  scoring:
    structure_fit: 0.90
    trigger_fit: 0.69
    timing_fit: 0.72
    outcome_fit: 0.82
    cross_support: 0.75
    total: 0.785
  verdict: medium_support
  claim: 本案進一步支持紫府高格可成立，但終局仍受大限層幹擾；對 formation 層是正證，對時限層屬中強支持
  notes:
    - 本案與 `validation.case.004` 一起，讓紫府/紫府朝垣系案例不再只剩單一樣本
    - 缺點是觸發描述較短，對精細 trigger chain 的幫助不如張子房、韓信

- validation_id: validation.case.008
  case_id: case.quanshu.v4.013
  subject: 伍明輔
  target_hypotheses:
    theory: [quanshu.v3.mingfu.001, quanshu.v3.dayun.003]
    mechanisms: [neg.limit_collision]
    formations: []
  observed_pattern:
    structure: 權祿、左右昌曲、七殺守命，屬可成事之格，但早年被擎羊、天空阻滯
    trigger_chain: [擎羊, 天空]
    outcome: 早年受阻，三十六後方遂志，不屬即時死亡型
  scoring:
    structure_fit: 0.73
    trigger_fit: 0.76
    timing_fit: 0.70
    outcome_fit: 0.68
    cross_support: 0.60
    total: 0.713
  verdict: medium_support
  claim: 本案很重要，因為它證明兇觸發不一定直接導向死亡，也可能表現為延遲發達，能幫我們校正 `neg.limit_collision` 的強弱邊界
  notes:
    - 本案是目前少數可用來建立「非死亡邊界」的案例
    - 對 `quanshu.v3.mingfu.001` 的先抑後揚邏輯有直接幫助

- validation_id: validation.case.009
  case_id: case.quanshu.v4.015
  subject: 陳平
  target_hypotheses:
    theory: [quanshu.v3.dayun.003, quanshu.v3.mingfu.001]
    mechanisms: [neg.limit_collision]
    formations: []
  observed_pattern:
    structure: 權祿生逢天府、武曲守命、左右昌曲加會，為典型入相模板
    trigger_chain: [絕地, 天空, 天使夾地, 大限, 小限]
    outcome: 晚限強兇
  scoring:
    structure_fit: 0.86
    trigger_fit: 0.94
    timing_fit: 0.93
    outcome_fit: 0.88
    cross_support: 0.84
    total: 0.895
  verdict: strong_support
  claim: 本案對 `quanshu.v3.dayun.003` 幾乎是正面命中，尤其是天空與夾地條件，非常強化 `neg.limit_collision`
  notes:
    - 陳平案把「高格 + 絕地 + 天空 + 天使夾地」連成完整事件鏈
    - 它比孫臏、子產更適合拿來做時限規則驗證

- validation_id: validation.case.010
  case_id: case.quanshu.v4.018
  subject: 項羽
  target_hypotheses:
    theory: [quanshu.v3.mingfu.001, quanshu.v3.dayun.003]
    mechanisms: [neg.limit_collision]
    formations: []
  observed_pattern:
    structure: 權祿加會、祿存守命，本具極富貴之勢，但對宮忌星沖破，且大限、小限同步觸發
    trigger_chain: [忌星沖破, 地劫, 大限, 小限]
    outcome: 三十二歲見強兇應
  scoring:
    structure_fit: 0.79
    trigger_fit: 0.84
    timing_fit: 0.86
    outcome_fit: 0.88
    cross_support: 0.72
    total: 0.821
  verdict: strong_support
  claim: 本案把「吉處藏兇」這種口訣式說法轉成可結構化條件，支持本命富勢會被沖破與地劫扭轉
  notes:
    - 雖然不屬最純粹的祿馬受阻，但對「吉格被沖破」的失效模式很有代表性
    - 也進一步擴大 `quanshu.v3.mingfu.001` 的實例面

- validation_id: validation.case.011
  case_id: case.quanshu.v4.019
  subject: 張子房
  target_hypotheses:
    theory: [quanshu.v3.dayun.003, quanshu.v3.taisui.002]
    mechanisms: [neg.limit_collision]
    formations: [formation.zifutonggong]
  observed_pattern:
    structure: 雙祿朝守、左右昌曲加會、紫府同宮，是目前最強的高富貴模板之一
    trigger_chain: [大小二限, 天傷, 天空, 天使, 夾地]
    outcome: 七十六歲因夾地與傷使天空而亡
  scoring:
    structure_fit: 0.94
    trigger_fit: 0.97
    timing_fit: 0.96
    outcome_fit: 0.95
    cross_support: 0.91
    total: 0.949
  verdict: strong_support
  claim: 本案是目前最強的 `neg.limit_collision` 回驗案之一，也把紫府/雙祿高格與大小二限失效條件直接連在一起
  notes:
    - 如果後續要做「高格失效條件」專題，張子房案應列為核心標案
    - 本案也讓 formation 層從語義推定進一步靠近 case-supported

- validation_id: validation.case.012
  case_id: case.quanshu.v4.020
  subject: 韓信
  target_hypotheses:
    theory: [quanshu.v3.dayun.003, quanshu.v3.taisui.002]
    mechanisms: [neg.limit_collision, neg.malefic_convergence]
    formations: [formation.zifutonggong]
  observed_pattern:
    structure: 紫府拱照、左右加舍、祿合科權，屬明顯出將入相模板
    trigger_chain: [傷忌, 空劫, 太歲, 羊陀沖照, 大限, 小限]
    outcome: 三十二歲見多層重兇疊加
  scoring:
    structure_fit: 0.92
    trigger_fit: 0.98
    timing_fit: 0.95
    outcome_fit: 0.94
    cross_support: 0.90
    total: 0.945
  verdict: strong_support
  claim: 韓信案幾乎是「大限、小限、太歲與兇曜重疊撞擊」的教科書案例，明顯強化 `neg.limit_collision`
  notes:
    - 本案比蘇丞相案更完整，因為把傷忌、空劫、羊陀、太歲全放到同一條鏈上
    - 也使紫府高格的案例驗證從 1-2 案擴大成一個小 family

- validation_id: validation.case.013
  case_id: case.quanshu.v4.023
  subject: 曹參
  target_hypotheses:
    theory: [quanshu.v3.dayun.003]
    mechanisms: [neg.limit_collision]
    formations: [formation.jixiangliming]
  observed_pattern:
    structure: 紫微居午，無殺湊，左右權祿加會，官資可至三公
    trigger_chain: [天傷夾地, 流年羊刃, 太歲]
    outcome: 六十三歲見太歲與流年重兇疊加
  scoring:
    structure_fit: 0.88
    trigger_fit: 0.93
    timing_fit: 0.92
    outcome_fit: 0.90
    cross_support: 0.84
    total: 0.897
  verdict: strong_support
  claim: 曹參案直接強化了 `quanshu.v3.dayun.003` 的「天傷夾地 + 流年惡曜」危險條件，也補進紫微高格的失效案例
  notes:
    - 此案把高官格與太歲、流年疊加撞擊連成完整鏈
    - 對紫微強位案例的終局風險判斷很有價值

- validation_id: validation.case.014
  case_id: case.quanshu.v4.026
  subject: 百里奚
  target_hypotheses:
    theory: [quanshu.v3.mingfu.001]
    mechanisms: [neg.limit_collision]
    formations: []
  observed_pattern:
    structure: 巨日同宮、祿合守照、左右昌曲加會，本具可成格條件
    trigger_chain: [羊, 鈴, 地劫, 虛絕, 限步]
    outcome: 少年不順，三十五後方遂志
  scoring:
    structure_fit: 0.78
    trigger_fit: 0.80
    timing_fit: 0.76
    outcome_fit: 0.83
    cross_support: 0.74
    total: 0.784
  verdict: medium_support
  claim: 百里奚案進一步支持 `先抑後揚` 類型，證明兇限不一定導向死亡，也可能只是長時間壓制
  notes:
    - 與伍明輔案互證 delayed-success 分支
    - 這是把 `neg.limit_collision` 從 fatal-only 拉回分級模型的重要案例

- validation_id: validation.case.015
  case_id: case.quanshu.v4.029
  subject: 劉伶
  target_hypotheses:
    theory: [quanshu.v3.tanxing.005]
    mechanisms: [neg.limit_collision]
    formations: [formation.mingwuzhengyao]
  observed_pattern:
    structure: 左右同垣而坐貴向貴，但生處帶空、身宮怯劫、並無正曜，屬先天結構缺失
    trigger_chain: [帶空, 怯劫, 無正曜, 大限小限同到巳]
    outcome: 三十二歲見大限小限重疊應期
  scoring:
    structure_fit: 0.91
    trigger_fit: 0.85
    timing_fit: 0.82
    outcome_fit: 0.78
    cross_support: 0.86
    total: 0.854
  verdict: strong_support
  claim: 劉伶案是 `formation.mingwuzhengyao` 與「結構缺失」family 的高價值案例，顯示不是所有失效都來自高格翻盤，也可能是先天主體不足
  notes:
    - 本案把「帶空 + 無正曜 + 怯劫」直接落到人物案例
    - 對 formation.family.006 的補強價值很高

- validation_id: validation.case.016
  case_id: case.quanshu.v4.030
  subject: 韓通
  target_hypotheses:
    theory: [quanshu.v3.dayun.003]
    mechanisms: [neg.limit_collision]
    formations: [formation.zifutonggong]
  observed_pattern:
    structure: 七殺朝鬥、紫府朝垣、左右昌曲加會，本命富貴榮垂
    trigger_chain: [沉馬, 地網, 卯羊, 太歲]
    outcome: 八限到午時見明確兇險
  scoring:
    structure_fit: 0.89
    trigger_fit: 0.90
    timing_fit: 0.88
    outcome_fit: 0.87
    cross_support: 0.84
    total: 0.884
  verdict: strong_support
  claim: 韓通案把 `沉馬 + 地網 + 卯羊` 這條觸發鏈寫得很清楚，對 `neg.limit_collision` 與紫府高格失效都提供了新證據
  notes:
    - 本案讓 `沉馬` 不再只出現在零散 notes，而有正式案例支撐
    - 也補了七殺朝鬥與紫府朝垣同時成立的混合高格樣本

## second_batch_summary
- summary_id: case.batch2.001
  scope: [case.quanshu.v4.011, case.quanshu.v4.012, case.quanshu.v4.013, case.quanshu.v4.014, case.quanshu.v4.015, case.quanshu.v4.016, case.quanshu.v4.017, case.quanshu.v4.018, case.quanshu.v4.019, case.quanshu.v4.020]
  claim: 第二批十案整體上明顯強化了「高格成立，但終局由限運撞擊決定」這條主線
  strength: strong
  notes:
    - 孫臏、張子房、韓信、陳平最能強化限運規則
    - 龐涓、蕭何、耿弇補了陀羅、擎羊、天傷與太歲的異質觸發

- summary_id: case.batch2.002
  scope: [case.quanshu.v4.013, case.quanshu.v4.017]
  claim: 第二批也補進了「非立即死亡」案例，顯示兇觸發有時表現為延遲發達或單一應期提示，而非直接夭亡
  strength: medium_high
  notes:
    - 伍明輔案支持先抑後揚
    - 蒯文通案目前更像應期標記，仍待後續正文校對

## third_batch_summary
- summary_id: case.batch3.001
  scope: [case.quanshu.v4.021, case.quanshu.v4.022, case.quanshu.v4.023, case.quanshu.v4.024, case.quanshu.v4.025, case.quanshu.v4.026, case.quanshu.v4.027, case.quanshu.v4.028, case.quanshu.v4.029, case.quanshu.v4.030]
  claim: 第三批十案延續了前兩批的主線，但把樣本從高格翻盤進一步擴展到結構缺失、延遲發達、性格扭轉與刑傷 family
  strength: strong
  notes:
    - 曹參、廉頗、韓通強化天傷/地網/沉馬等危險條件
    - 百里奚與劉伶提供了 delayed-success 與 structural-deficit 兩條重要分支

## current_findings
- finding_id: case.finding.001
  claim: 卷四首批案例明確支持卷三時限規則不是抽象口訣，而是可落到真實案例的操作規則
  basis: [validation.case.001, validation.case.002, validation.case.005, validation.case.006]
  status: supported

- finding_id: case.finding.002
  claim: 目前最穩的案例結論不是「某格一定富貴」，而是「吉格可成立，但重疊兇限足以翻盤」
  basis: [validation.case.001, validation.case.004, validation.case.005, validation.case.006, quanshu.v3.mingfu.001, neg.limit_collision]
  status: supported

- finding_id: case.finding.003
  claim: `七殺重逢` 與 `羊陀迭併` 已有直接案例支撐，屬現階段最強的卷三 -> 卷四驗證鏈
  basis: [validation.case.002, quanshu.v3.qisha.001, quanshu.v3.yangtuo.001]
  status: supported

- finding_id: case.finding.004
  claim: formation 層已不再只是初步支撐；紫府、雙祿、日月權位等高格已有一個小型案例羣，但目前仍是「失效條件」比「成格條件」更穩
  basis: [validation.case.004, validation.case.005, validation.case.006, validation.case.007, validation.case.011, validation.case.012]
  status: supported

- finding_id: case.finding.005
  claim: `neg.break_wealth_flow` 還需要更純粹的祿馬受阻案例，目前多數案例驗證的是「重疊兇限」而不是完整祿馬斷流
  basis: [validation.case.005, neg.break_wealth_flow, formation.ludaomadao]
  status: inferred

- finding_id: case.finding.006
  claim: 前 30 案已足以把 `neg.limit_collision` 從假說推進為核心機制；它目前是最穩的卷三 -> 卷四跨層驗證結果
  basis: [validation.case.001, validation.case.002, validation.case.007, validation.case.009, validation.case.010, validation.case.011, validation.case.012, validation.case.013, validation.case.016, neg.limit_collision]
  status: supported

- finding_id: case.finding.007
  claim: 紫府、雙祿、左右昌曲、科權祿等高秩序組合在前 30 案中高頻反覆出現，顯示 formation 層較擅長預測「身分/層級 family」，而非單獨預測終局
  basis: [validation.case.004, validation.case.007, validation.case.009, validation.case.011, validation.case.012, validation.case.013, validation.case.016, formation.zifutonggong]
  status: supported

- finding_id: case.finding.008
  claim: 第二、三批案例一起補上了非死亡與結構缺失邊界，說明兇觸發需要做 fatal / nonfatal / delayed-success / structural-deficit 分級
  basis: [validation.case.008, validation.case.014, validation.case.015, case.batch2.002, case.batch3.001, quanshu.v3.mingfu.001]
  status: supported

- finding_id: case.finding.009
  claim: `formation.mingwuzhengyao` 現在已有直接案例支撐，說明 formation layer 不只處理高格，也能表達「主體結構缺失」型盤勢
  basis: [validation.case.015, formation.mingwuzhengyao]
  status: supported

## next_action
- task: 沿命圖鏈繼續收錄韓通之後的後續案例
  reason: 需要把案例樣本從前 30 案繼續擴大，才能開始做更穩的案例統計與 family 分羣

- task: 針對 `neg.break_wealth_flow` 補直接祿馬受阻案例
  reason: 現有案例對空劫、地網、天羅支持強，但對祿馬鏈的直接性仍不足

- task: 對 `neg.limit_collision` 建立 fatal / nonfatal / delayed_success / structural_deficit 四段式分級
  reason: 伍明輔、百里奚與劉伶已顯示，同樣是兇觸發，不一定都落到死亡事件

- task: 把 validation score 接回 `formation_pattern_analysis.md` 與 `negative_mechanisms.md`
  reason: 讓 formation/mechanism 的信心值不再只靠理論與賦文，正式納入 case 支撐
