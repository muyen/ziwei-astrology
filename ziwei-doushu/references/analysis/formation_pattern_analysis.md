# 格局模式分析

## metadata
- topic: 格局模式分析
- layer: analysis
- status: provisional
- basis: raw_and_lyric

## pattern_families
- family_id: formation.family.001
  family: 富貴權位
  description: 帝星或高階主星得位，直接導向尊貴權勢
  members: [formation.jixiangliming, formation.rizhaoleimen]
  likely_drivers: [主星職司, 得地, 口訣壓縮]
  status: inferred

- family_id: formation.family.002
  family: 功名公職
  description: 官祿、教化、文曜、祿曜收斂，導向功名與行政能力
  members: [formation.yangliangchanglu, formation.jiyuetongliang]
  likely_drivers: [星曜職司, 三方四正, 結構收斂]
  status: inferred

- family_id: formation.family.003
  family: 財福穩定
  description: 財庫或陰性福曜在強位，導向福厚與穩定富貴
  members: [formation.zifutonggong, formation.yuelangtianmen]
  likely_drivers: [主星職司, 位點條件]
  status: inferred

- family_id: formation.family.004
  family: 破敗奔波
  description: 祿、馬等資源流動被破壞，導向奔波失序
  members: [formation.ludaomadao]
  likely_drivers: [吉凶轉化, 結構破壞]
  status: inferred

- family_id: formation.family.005
  family: 是非刑險
  description: 煞曜與口舌或財曜形成負向收斂，導向官非、意外、財崩
  members: [formation.juhuoyang, formation.lingchangtuowu]
  likely_drivers: [煞曜收斂, 結構失衡]
  status: inferred

- family_id: formation.family.006
  family: 結構缺失
  description: 不是兇曜過強，而是主體結構核心缺位
  members: [formation.mingwuzhengyao]
  likely_drivers: [星曜配置缺失]
  status: inferred

## records
- formation_id: formation.zifutonggong
  family: 財福穩定
  secondary_family: 富貴權位
  evidence:
    raw: [formation.zifutonggong.001]
    lyric: [lyric.gusui.001]
    related_theory: [quanshu.v1.fawei.002]
    related_stars: [star.ziwei.001, star.ziwei.003]
    related_cases: [validation.case.004, validation.case.007, validation.case.011, validation.case.012]
  generation_factors:
    star_duty: strong
    structural_closure: strong
    positional_privilege: medium
    mnemonic_compression: medium
    case_abstraction: medium_high
  provisional_score: 0.89
  confidence: high
  explanation:
    - 紫微至尊與天府祿庫/財帛主宰形成高秩序富貴模板
    - 左輔右弼新增 raw 後，輔弼扶持語義更明確
    - 卷四案例已累積子產、孫臏、張子房、韓信等紫府/雙祿高格 family，formation 不再只靠語義推定
  open_questions:
    - 仍可補更多天府與輔弼的入宮條目
    - 尚需繼續分辨紫府系案例中哪些屬 fatal、哪些屬 delayed_success

- formation_id: formation.jixiangliming
  family: 富貴權位
  evidence:
    raw: [formation.jixiangliming.001]
    lyric: [lyric.gusui.004]
    related_theory: [quanshu.v1.xingyuan.002, quanshu.v1.fawei.003]
    related_stars: [star.ziwei.001, star.ziwei.002]
  generation_factors:
    star_duty: strong
    structural_closure: medium
    positional_privilege: strong
    mnemonic_compression: strong
    case_abstraction: unknown
  provisional_score: 0.74
  confidence: medium_high
  explanation:
    - 帝星坐強位，結果直指權位
    - 賦文與格局論雙重支持
  open_questions:
    - 午位對紫微的強位理據仍需更多 raw

- formation_id: formation.yangliangchanglu
  family: 功名公職
  evidence:
    raw: [formation.yangliangchanglu.001]
    lyric: [lyric.gusui.002]
    related_theory: [quanshu.v1.fawei.004]
    related_stars: [star.taiyang.001, star.tianliang.001]
  generation_factors:
    star_duty: strong
    structural_closure: strong
    positional_privilege: medium
    mnemonic_compression: strong
    case_abstraction: unknown
  provisional_score: 0.90
  confidence: high
  explanation:
    - 官祿、教化、文氣、祿資源高度收斂
    - 文昌與祿存新增 raw 後，文氣與祿資源的支撐鏈完整度明顯提高
    - 是目前最穩的功名模板之一
  open_questions:
    - 仍可補更多文昌與祿存的交會條目

- formation_id: formation.jiyuetongliang
  family: 功名公職
  evidence:
    raw: [formation.jiyuetongliang.001]
    lyric: [lyric.gusui.003]
    related_theory: [quanshu.v1.fawei.004]
    related_stars: [star.tianji.001, star.tianji.002, star.tong.001, star.tianliang.001]
  generation_factors:
    star_duty: strong
    structural_closure: strong
    positional_privilege: medium
    mnemonic_compression: strong
    case_abstraction: unknown
  provisional_score: 0.86
  confidence: high
  explanation:
    - 明確收斂為審慎、行政、公職模板
    - 太陰新增 raw 後，機月同梁中的月曜角色更可解釋
    - 語義家族非常穩定
  open_questions:
    - 仍可補更多太陰在不同宮位的條目

- formation_id: formation.yuelangtianmen
  family: 財福穩定
  evidence:
    raw: [formation.yuelangtianmen.001]
    lyric: []
    related_theory: [quanshu.v1.xingyuan.002, quanshu.v1.fawei.003]
    related_stars: [star.taiyin.001, star.taiyin.003, star.taiyin.004]
  generation_factors:
    star_duty: strong
    structural_closure: medium
    positional_privilege: strong
    mnemonic_compression: strong
    case_abstraction: unknown
  provisional_score: 0.74
  confidence: medium_high
  explanation:
    - 太陰新增 raw 後，化富、母星/妻宿、旺陷條件都能支撐此格
    - 太陰在亥屬得垣，使位點優勢不再只是猜測
  open_questions:
    - 仍可補更多太陰入命與亥位的直接條目

- formation_id: formation.rizhaoleimen
  family: 富貴權位
  evidence:
    raw: [formation.rizhaoleimen.001]
    lyric: []
    related_theory: [quanshu.v1.xingyuan.002]
    related_stars: [star.taiyang.001, star.taiyang.003]
    related_cases: [validation.case.005, validation.case.006]
  generation_factors:
    star_duty: medium
    structural_closure: medium
    positional_privilege: strong
    mnemonic_compression: strong
    case_abstraction: medium
  provisional_score: 0.74
  confidence: medium_high
  explanation:
    - 太陽外顯與官祿語義支持其富貴方向
    - 蘇丞相與晏平仲兩案已提供日月權位型案例支撐
    - 但卯位理據尚未在 raw 展開
  open_questions:
    - 卯位強勢條件待補證
    - 還需要更多日月權位案例，確認其失效模式是否集中在太歲/小限而非本命結構

- formation_id: formation.ludaomadao
  family: 破敗奔波
  evidence:
    raw: [formation.ludaomadao.001]
    lyric: [lyric.taiwei.004]
    related_theory: [quanshu.v1.fawei.003, quanshu.v3.tanxing.001]
    related_stars: [star.lucun.001, star.lucun.003, star.tianma.001, star.tianma.002, star.kongjie.001, star.kongjie.002]
  generation_factors:
    star_duty: strong
    structural_closure: strong
    positional_privilege: weak
    mnemonic_compression: strong
    case_abstraction: unknown
  provisional_score: 0.88
  confidence: medium_high
  explanation:
    - 直接符合祿逢沖破則吉轉兇的理論
    - 祿存與天馬新增 raw 後，祿馬交馳、亡馬、折足馬的機制鏈更完整
    - 空劫新增 raw 後，破財與二限逢之必兇的負向阻斷語義也已接上
    - 卷三新增「祿馬不落空亡天空截空最緊」的 raw，直接補上時限層阻斷證據
    - 是目前最穩的負向機制模板之一
  open_questions:
    - 仍需校對截空與現代截路術語是否完全對應

- formation_id: formation.juhuoyang
  family: 是非刑險
  evidence:
    raw: [formation.juhuoyang.001]
    lyric: []
    related_theory: []
    related_stars: [star.jumen.001, star.huoxing.002, star.qingyang.001, star.qingyang.002]
  generation_factors:
    star_duty: strong
    structural_closure: strong
    positional_privilege: weak
    mnemonic_compression: strong
    case_abstraction: unknown
  provisional_score: 0.80
  confidence: medium_high
  explanation:
    - 巨門口舌為是非官非提供強支撐
    - 火星與擎羊新增 raw 後，刑險與暴烈機制鏈已明確
  open_questions:
    - 仍可補更多火羊交會與入宮條目

- formation_id: formation.lingchangtuowu
  family: 是非刑險
  evidence:
    raw: [formation.lingchangtuowu.001]
    lyric: []
    related_theory: []
    related_stars: [star.wuqu.001, star.wuqu.003, star.lingxing.002, star.tuoluo.001, star.wenchang.001]
  generation_factors:
    star_duty: strong
    structural_closure: strong
    positional_privilege: weak
    mnemonic_compression: strong
    case_abstraction: unknown
  provisional_score: 0.79
  confidence: medium
  explanation:
    - 武曲財曜可支撐金錢崩潰方向
    - 鈴星與陀羅新增 raw 後，凶煞收斂機制不再是空白
    - 文昌新增 raw 後，文曜在此格中的負向扭轉更值得追蹤
  open_questions:
    - 仍可補更多鈴陀與文昌、武曲的交會條目

- formation_id: formation.mingwuzhengyao
  family: 結構缺失
  evidence:
    raw: [formation.mingwuzhengyao.001]
    lyric: []
    related_theory: [quanshu.v1.fawei.002]
    related_stars: []
    related_cases: [validation.case.015]
  generation_factors:
    star_duty: weak
    structural_closure: strong
    positional_privilege: weak
    mnemonic_compression: medium
    case_abstraction: medium
  provisional_score: 0.69
  confidence: medium_high
  explanation:
    - 這格的核心是命體主結構缺位
    - 應獨立於一般凶煞格看待
    - 劉伶案已提供直接案例支撐，證明此格不是純理論分類
  open_questions:
    - 卷四案例是否支持離祖過房的高頻應驗
    - 尚需更多無正曜或主體缺位案例，細分其 fatal 與 nonfatal 邊界

## global_findings
- finding_id: formation.pattern.001
  claim: 格局系統更像高維盤面模板的口訣壓縮，而不是單條星曜描述相加
  basis: [formation.yangliangchanglu, formation.jiyuetongliang, formation.ludaomadao]
  status: inferred

- finding_id: formation.pattern.002
  claim: 三方四正會齊類格局通常比單點坐命類格局穩定
  basis: [quanshu.v1.fawei.004, formation.yangliangchanglu.001, formation.jiyuetongliang.001]
  status: inferred

- finding_id: formation.pattern.003
  claim: 富貴格多屬高秩序收斂，兇格多屬破壞性收斂
  basis: [formation.zifutonggong.001, formation.yangliangchanglu.001, formation.ludaomadao.001, formation.juhuoyang.001]
  status: inferred

- finding_id: formation.pattern.004
  claim: 案例顯示本命高格只決定上限，不決定終局；終局強烈受大限、小限、太歲的撞擊結構支配
  basis: [case.quanshu.v4.001, case.quanshu.v4.003, case.quanshu.v4.006, case.quanshu.v4.008, case.quanshu.v4.009, case.quanshu.v4.010, neg.limit_collision]
  status: inferred
