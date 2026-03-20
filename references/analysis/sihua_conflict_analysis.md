# 十干四化衝突分析

## metadata
- topic: 十干四化衝突分析
- layer: analysis
- status: provisional
- basis: raw_and_compare
- method: symbolic_scoring

## scoring_weights
- w_raw: 0.40
- w_logic: 0.20
- w_sym: 0.10
- w_cross: 0.15
- w_case: 0.10
- w_risk: 0.05

## records
- conflict_group: sihua.wu
  source_records:
    raw: [lyric.sihua.002]
    compare: [sihua.wu.quanshu, sihua.wu.north]
    related: [lyric.gusui.001, star.tianji.001, star.tianji.002, star.tianji.003]
  versions:
    - version_id: wu.quanshu
      claim: 貪狼祿 太陰權 右弼科 天機忌
      evidence_level: primary_supported
      scores:
        raw: 1.00
        logic: 0.78
        symmetry: 0.90
        cross: 0.60
        case: 0.00
        scribal_risk: 0.30
        total: 0.721
      explanation:
        - 有 primary raw 支撐
        - 天機忌與天機多思不耐靜的語義相容
        - 右弼新增 raw 後，右弼科的輔佐與文墨語義更可解釋
        - 與壬左輔科形成輔弼對稱
    - version_id: wu.north
      claim: 貪狼祿 太陰權 左輔科 天機忌
      evidence_level: compare_only
      scores:
        raw: 0.20
        logic: 0.75
        symmetry: 0.40
        cross: 0.50
        case: 0.00
        scribal_risk: 0.45
        total: 0.323
      explanation:
        - 無指定語料內 primary raw
        - 左輔新增 raw 後，左輔科的輔佐與大貴語義更可解釋
        - 但仍缺直接四化口訣 raw 支撐
  provisional_ruling:
    selected_version: wu.quanshu
    confidence: medium_high
    reasoning: raw_support_plus_pair_symmetry
  open_questions:
    - 左輔右弼已補基礎星性，但仍缺更多入宮與交會條目

- conflict_group: sihua.geng
  source_records:
    raw: [lyric.sihua.003]
    compare: [sihua.geng.quanshu, sihua.geng.zhongzhou, sihua.geng.north]
    related: [star.taiyang.001, star.taiyang.003, star.wuqu.001, star.wuqu.002, star.tong.001]
  versions:
    - version_id: geng.raw_koujue
      claim: 太陽祿 武曲權 太陰科 天同忌
      evidence_level: primary_supported
      scores:
        raw: 1.00
        logic: 0.78
        symmetry: 0.55
        cross: 0.60
        case: 0.00
        scribal_risk: 0.20
        total: 0.691
      explanation:
        - 目前唯一有 primary raw 的庚幹版本
        - 太陽祿與武曲權都與星曜職司相容
        - 太陰新增 raw 後，化富、旺陷與配日語義可實質支撐太陰科
    - version_id: geng.quanshu_compare
      claim: 太陽祿 武曲權 天府科 天同忌
      evidence_level: compare_only
      scores:
        raw: 0.20
        logic: 0.72
        symmetry: 0.50
        cross: 0.50
        case: 0.00
        scribal_risk: 0.40
        total: 0.329
      explanation:
        - compare 層聲稱為全書版本
        - 天府新增 raw 後，天府科的司福權與祿庫語義更可解釋
        - 但目前倉庫仍沒有對應四化口訣 raw 記錄
    - version_id: geng.north
      claim: 太陽祿 武曲權 天同科 太陰忌
      evidence_level: compare_only
      scores:
        raw: 0.20
        logic: 0.62
        symmetry: 0.85
        cross: 0.45
        case: 0.00
        scribal_risk: 0.35
        total: 0.339
      explanation:
        - 具有最強理論化對稱感
        - 但缺 primary raw 支撐
        - 更像後設理論修正方案
  provisional_ruling:
    selected_version: geng.raw_koujue
    confidence: medium
    reasoning: only_primary_raw_support
  open_questions:
    - 必須補證 compare 所稱庚天府科的 raw 來源
    - 卷四案例可能改變庚幹裁決權重

- conflict_group: sihua.ren
  source_records:
    raw: [lyric.sihua.004]
    compare: [sihua.ren.quanshu, sihua.ren.north]
    related: [star.tianliang.001, star.wuqu.003, lyric.gusui.001]
  versions:
    - version_id: ren.quanshu
      claim: 天梁祿 紫微權 左輔科 武曲忌
      evidence_level: primary_supported
      scores:
        raw: 1.00
        logic: 0.90
        symmetry: 0.90
        cross: 0.60
        case: 0.00
        scribal_risk: 0.20
        total: 0.750
      explanation:
        - 有 primary raw 支撐
        - 天梁祿、紫微權、武曲忌都與現有星性高度相容
        - 左輔新增 raw 後，左輔科的輔佐與大貴語義更可解釋
        - 與戊右弼科形成強對稱
    - version_id: ren.north
      claim: 天梁祿 紫微權 天府科 武曲忌
      evidence_level: compare_only
      scores:
        raw: 0.20
        logic: 0.72
        symmetry: 0.40
        cross: 0.45
        case: 0.00
        scribal_risk: 0.30
        total: 0.317
      explanation:
        - 無指定語料內 primary raw
        - 天府新增 raw 後，天府科的司福權與祿庫語義不再偏弱
        - 但仍缺直接四化口訣 raw 支撐
  provisional_ruling:
    selected_version: ren.quanshu
    confidence: medium_high
    reasoning: raw_support_plus_role_fit_plus_pair_symmetry
  open_questions:
    - 左輔與天府已補基礎星性，但仍缺更多入宮與交會條目

## global_findings
- finding_id: sihua.pattern.001
  claim: 三組衝突都集中在化科星，而非祿權忌
  basis: [sihua.wu, sihua.geng, sihua.ren]
  status: inferred

- finding_id: sihua.pattern.002
  claim: 戊右弼科與壬左輔科可能反映原始口訣的對偶記憶設計
  basis: [lyric.sihua.002, lyric.sihua.004, lyric.gusui.001]
  status: inferred

- finding_id: sihua.pattern.003
  claim: 庚幹版本差異更像流派理論修正，而不只是傳抄誤差
  basis: [lyric.sihua.003, sihua.geng.quanshu, sihua.geng.zhongzhou, sihua.geng.north]
  status: inferred
