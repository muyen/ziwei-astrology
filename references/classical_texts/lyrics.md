# 紫微鬥數經典賦文

## metadata
- topic: 經典賦文
- layer: raw
- format: record_list

## records
- id: lyric.taiwei.001
  layer: raw
  source:
    canon: 太微賦
    section: 全篇
    chapter: 開篇總論
    locator: 觀盤次序
  type: lyric_rule
  subject: 觀盤次序
  object: 命宮/身宮/流年
  conditions: []
  claim: 先看命宮，再看身宮，再審流年動靜
  quote: 觀乎紫微動靜，審乎流年之行止。凡看命者，先看命宮，次看身宮。
  notes: null
  tags: [觀盤, 命宮, 身宮, 流年]
  conflict_group: null
  confidence: primary

- id: lyric.taiwei.002
  layer: raw
  source:
    canon: 太微賦
    section: 全篇
    chapter: 命限總論
    locator: 榮枯判斷
  type: lyric_rule
  subject: 命身限
  object: 榮枯
  conditions: [命好, 身好, 限好]
  claim: 命身限俱佳則晚年榮昌
  quote: 命好、身好、限好，到老榮昌；命好、身好、限不好，終身坎坷。
  notes: 同句含兩種條件
  tags: [命身限, 榮枯]
  conflict_group: null
  confidence: primary

- id: lyric.taiwei.003
  layer: raw
  source:
    canon: 太微賦
    section: 全篇
    chapter: 星曜總綱
    locator: 星曜職司
  type: lyric_rule
  subject: 紫微
  object: 萬星之主
  conditions: []
  claim: 紫微為萬星之主，位居極尊
  quote: 紫微乃萬星之主，位居極尊。
  notes: null
  tags: [紫微, 主星]
  conflict_group: null
  confidence: primary

- id: lyric.taiwei.004
  layer: raw
  source:
    canon: 太微賦
    section: 全篇
    chapter: 吉凶總綱
    locator: 吉凶轉化
  type: lyric_rule
  subject: 祿忌互動
  object: 吉凶
  conditions: [祿逢沖破]
  claim: 原本吉象可轉兇
  quote: 祿逢沖破，吉也成兇。忌曜相逢，兇者愈兇。
  notes: null
  tags: [祿, 忌, 吉凶]
  conflict_group: null
  confidence: primary

- id: lyric.gusui.001
  layer: raw
  source:
    canon: 骨髓賦
    section: 全篇
    chapter: 格局
    locator: 輔佐條件
  type: lyric_rule
  subject: 紫微天府
  object: 輔弼
  conditions: [紫微, 天府]
  claim: 紫微天府格局需依賴輔弼扶持
  quote: 紫微天府，全依輔弼之功。
  notes: null
  tags: [紫微, 天府, 輔弼]
  conflict_group: null
  confidence: primary

- id: lyric.gusui.002
  layer: raw
  source:
    canon: 骨髓賦
    section: 全篇
    chapter: 格局
    locator: 陽梁昌祿
  type: lyric_rule
  subject: 陽梁昌祿
  object: 功名
  conditions: [太陽, 天梁, 文昌, 祿]
  claim: 主功名顯達
  quote: 陽梁昌祿，名震全球。
  notes: 原句偏誇飾，claim 已最小化
  tags: [格局, 陽梁昌祿]
  conflict_group: formation.yangliangchanglu
  confidence: primary

- id: lyric.gusui.003
  layer: raw
  source:
    canon: 骨髓賦
    section: 全篇
    chapter: 格局
    locator: 機月同梁
  type: lyric_rule
  subject: 機月同梁
  object: 職業傾向
  conditions: [天機, 太陰, 天同, 天梁]
  claim: 適合作吏人或行政類角色
  quote: 機月同梁，作吏人。
  notes: null
  tags: [格局, 機月同梁]
  conflict_group: formation.jiyuetongliang
  confidence: primary

- id: lyric.gusui.004
  layer: raw
  source:
    canon: 骨髓賦
    section: 全篇
    chapter: 格局
    locator: 極向離明
  type: lyric_rule
  subject: 極向離明
  object: 權位
  conditions: [紫微坐午]
  claim: 主極高權位
  quote: 極向離明，紫微坐午，位極人臣。
  notes: null
  tags: [格局, 極向離明, 紫微]
  conflict_group: formation.jixiangliming
  confidence: primary

- id: lyric.sihua.001
  layer: raw
  source:
    canon: 十干四化口訣
    section: 十干四化
    chapter: 甲
    locator: 甲幹
  type: sihua_rule
  subject: 甲
  object: 四化
  conditions: []
  claim: 廉貞祿 破軍權 武曲科 太陽忌
  quote: 甲：廉貞化祿、破軍化權、武曲化科、太陽化忌。
  notes: null
  tags: [甲, 四化]
  conflict_group: null
  confidence: primary

- id: lyric.sihua.002
  layer: raw
  source:
    canon: 十干四化口訣
    section: 十干四化
    chapter: 戊
    locator: 戊幹
  type: sihua_rule
  subject: 戊
  object: 四化
  conditions: []
  claim: 貪狼祿 太陰權 右弼科 天機忌
  quote: 戊：貪狼化祿、太陰化權、右弼化科、天機化忌。
  notes: 與部分流派左輔科不同
  tags: [戊, 四化]
  conflict_group: sihua.wu
  confidence: primary

- id: lyric.sihua.003
  layer: raw
  source:
    canon: 十干四化口訣
    section: 十干四化
    chapter: 庚
    locator: 庚幹
  type: sihua_rule
  subject: 庚
  object: 四化
  conditions: []
  claim: 太陽祿 武曲權 太陰科 天同忌
  quote: 庚：太陽化祿、武曲化權、太陰化科、天同化忌。
  notes: 與其他古籍版本存在衝突
  tags: [庚, 四化]
  conflict_group: sihua.geng
  confidence: primary

- id: lyric.sihua.004
  layer: raw
  source:
    canon: 十干四化口訣
    section: 十干四化
    chapter: 壬
    locator: 壬幹
  type: sihua_rule
  subject: 壬
  object: 四化
  conditions: []
  claim: 天梁祿 紫微權 左輔科 武曲忌
  quote: 壬：天梁化祿、紫微化權、左輔化科、武曲化忌。
  notes: 與部分流派天府科不同
  tags: [壬, 四化]
  conflict_group: sihua.ren
  confidence: primary
