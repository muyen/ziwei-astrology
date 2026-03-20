# 基礎星曜 Batch A 原始收錄

## metadata
- topic: Batch A 基礎星曜原始收錄
- layer: raw
- source_canon: 諸星問答論
- format: ingest_queue

## ingest_targets
- id: target.raw.star.taiyin
  target_type: ingest_target
  topic: 太陰
  priority: highest
  notes: 直接影響庚幹四化與月朗天門

- id: target.raw.star.tianfu
  target_type: ingest_target
  topic: 天府
  priority: highest
  notes: 直接影響紫府同宮與庚壬四化爭議

- id: target.raw.star.zuofu
  target_type: ingest_target
  topic: 左輔
  priority: highest
  notes: 直接影響壬幹四化與輔弼系統

- id: target.raw.star.youbi
  target_type: ingest_target
  topic: 右弼
  priority: highest
  notes: 直接影響戊幹四化與輔弼系統

- id: target.raw.star.wenchang
  target_type: ingest_target
  topic: 文昌
  priority: highest
  notes: 直接影響陽梁昌祿與鈴昌陀武

- id: target.raw.star.lucun
  target_type: ingest_target
  topic: 祿存
  priority: highest
  notes: 直接影響陽梁昌祿與祿倒馬倒

## record_scaffolds
- id: star.taiyin.001
  layer: raw
  source:
    canon: 諸星問答論
    section: 主星問答
    chapter: 太陰
    locator: 所主
  type: star_rule
  subject: 太陰
  object: 星性
  conditions: []
  claim: 水之精，為田宅主，化富，與日為配
  quote: 太陰乃水之精，為田宅主，化富，與日為配。
  notes: 直接影響庚幹四化與月朗天門
  tags: [太陰, 星性]
  conflict_group: null
  confidence: primary

- id: star.taiyin.002
  layer: raw
  source:
    canon: 諸星問答論
    section: 主星問答
    chapter: 太陰
    locator: 一般論
  type: star_rule
  subject: 太陰
  object: 命身
  conditions: [命坐銀輝之宮, 諸吉鹹集]
  claim: 享福；居陷地則落弱
  quote: 命坐銀輝之宮，諸吉鹹集，為享福之論。若居陷地，則落弱之名。
  notes: 補強月朗天門與太陰旺陷解釋
  tags: [太陰, 命宮, 旺陷]
  conflict_group: null
  confidence: primary

- id: star.taiyin.003
  layer: raw
  source:
    canon: 諸星問答論
    section: 主星問答
    chapter: 太陰
    locator: 希夷先生曰
  type: star_rule
  subject: 太陰
  object: 旺陷
  conditions: []
  claim: 卯辰巳午未為陷地，酉戌亥子醜為得垣
  quote: 太陰化祿與日為配，以卯辰巳午未為陷地，以酉戌亥子醜為得垣。
  notes: 直接影響月朗天門與庚幹解釋
  tags: [太陰, 旺陷]
  conflict_group: null
  confidence: primary

- id: star.tianfu.002
  layer: raw
  source:
    canon: 諸星問答論
    section: 主星問答
    chapter: 天府
    locator: 希夷先生曰
  type: star_rule
  subject: 天府
  object: 星性
  conditions: []
  claim: 南斗延壽解厄之星，又曰司命，職掌財帛田宅衣祿
  quote: 天府乃南鬥延壽解厄之星，又曰司命。上相鎮國之星，在鬥司權，在數則職掌財帛、田宅、衣祿之神。
  notes: 補強天府財庫與司命語義
  tags: [天府, 司命, 財帛, 田宅]
  conflict_group: null
  confidence: primary

- id: star.tianfu.003
  layer: raw
  source:
    canon: 諸星問答論
    section: 主星問答
    chapter: 天府
    locator: 祕雲
  type: star_rule
  subject: 天府
  object: 祿庫
  conditions: []
  claim: 為祿庫，命逢終是富
  quote: 祕雲：天府為祿庫，命逢終是富是也。
  notes: 直接影響紫府同宮與天府科/祿類解釋
  tags: [天府, 祿庫]
  conflict_group: null
  confidence: primary

- id: star.zuofu.002
  layer: raw
  source:
    canon: 諸星問答論
    section: 輔曜問答
    chapter: 左輔
    locator: 希夷先生曰
  type: star_rule
  subject: 左輔
  object: 吉格
  conditions: [紫府祿權若得三合沖照]
  claim: 主文武大貴
  quote: 紫府祿權若得三合沖照，主文武大貴。
  notes: 補強左輔科與紫府結構
  tags: [左輔, 紫府, 三合]
  conflict_group: null
  confidence: primary

- id: star.youbi.002
  layer: raw
  source:
    canon: 諸星問答論
    section: 輔曜問答
    chapter: 右弼
    locator: 希夷先生曰
  type: star_rule
  subject: 右弼
  object: 吉格
  conditions: [紫府吉星同垣]
  claim: 財官雙美，文武雙全
  quote: 紫府吉星同垣，財官雙美，文武雙全。
  notes: 補強右弼科與紫府同宮分析
  tags: [右弼, 紫府]
  conflict_group: null
  confidence: primary

- id: star.wenchang.002
  layer: raw
  source:
    canon: 諸星問答論
    section: 文曜問答
    chapter: 文昌
    locator: 歌曰
  type: star_rule
  subject: 文昌
  object: 旺地
  conditions: []
  claim: 辰巳旺，利午，嫌卯酉
  quote: 文昌主科甲，辰巳是旺地，利午嫌卯酉。
  notes: 補強功名格的位點條件
  tags: [文昌, 旺地]
  conflict_group: null
  confidence: primary

- id: star.lucun.002
  layer: raw
  source:
    canon: 諸星問答論
    section: 輔曜問答
    chapter: 祿存
    locator: 希夷先生曰
  type: star_rule
  subject: 祿存
  object: 宮位
  conditions: [身命, 田宅, 財帛]
  claim: 為要，主富
  quote: 十二宮中惟身命、田宅、財帛為要，主富。
  notes: 補強祿存與富格結構
  tags: [祿存, 身命, 田宅, 財帛]
  conflict_group: null
  confidence: primary

- id: star.lucun.003
  layer: raw
  source:
    canon: 諸星問答論
    section: 輔曜問答
    chapter: 祿存
    locator: 又曰
  type: star_rule
  subject: 祿存
  object: 遷移
  conditions: [對向守遷移, 三合逢之]
  claim: 利祿，白手起家
  quote: 祿存對向守遷移，三合逢之利祿宜，得逢遐邇人欽敬，的然白手起家基。
  notes: 補強祿倒馬倒與遷移分析
  tags: [祿存, 遷移, 三合]
  conflict_group: null
  confidence: primary

- id: star.tianfu.001
  layer: raw
  source:
    canon: 諸星問答論
    section: 主星問答
    chapter: 天府
    locator: 所主
  type: star_rule
  subject: 天府
  object: 星性
  conditions: []
  claim: 屬土，南斗主令第一星，為財帛主宰，司福權
  quote: 天府屬土，南鬥主令第一星也。為財帛之主宰，在鬥司福權之宿。
  notes: 直接影響紫府同宮與庚壬四化爭議
  tags: [天府, 星性]
  conflict_group: null
  confidence: primary

- id: star.zuofu.001
  layer: raw
  source:
    canon: 諸星問答論
    section: 輔曜問答
    chapter: 左輔
    locator: 所主
  type: star_rule
  subject: 左輔
  object: 星性
  conditions: []
  claim: 帝極主宰之星，守身命諸宮降福
  quote: 左輔帝極主宰之星，守身命諸宮降福。
  notes: 直接影響壬幹四化與輔弼系統
  tags: [左輔, 星性]
  conflict_group: null
  confidence: primary

- id: star.youbi.001
  layer: raw
  source:
    canon: 諸星問答論
    section: 輔曜問答
    chapter: 右弼
    locator: 所主
  type: star_rule
  subject: 右弼
  object: 星性
  conditions: []
  claim: 帝極主宰之星，守身命文墨精通
  quote: 右弼帝極主宰之星，守身命文墨精通。
  notes: 直接影響戊幹四化與輔弼系統
  tags: [右弼, 星性]
  conflict_group: null
  confidence: primary

- id: star.wenchang.001
  layer: raw
  source:
    canon: 諸星問答論
    section: 文曜問答
    chapter: 文昌
    locator: 所主
  type: star_rule
  subject: 文昌
  object: 星性
  conditions: []
  claim: 主科甲，守身命主人幽閑儒雅，博文廣記，一舉成名
  quote: 文昌主科甲，守身命主人幽閑儒雅，清秀魁梧，博文廣記，機變異常，一舉成名。
  notes: 直接影響陽梁昌祿與鈴昌陀武
  tags: [文昌, 星性]
  conflict_group: null
  confidence: primary

- id: star.lucun.001
  layer: raw
  source:
    canon: 諸星問答論
    section: 輔曜問答
    chapter: 祿存
    locator: 所主
  type: star_rule
  subject: 祿存
  object: 星性
  conditions: []
  claim: 北斗第三星，主人貴爵，掌人壽基
  quote: 祿存北鬥第三星，真人之宿，主人貴爵，掌人壽基。
  notes: 直接影響陽梁昌祿與祿倒馬倒
  tags: [祿存, 星性]
  conflict_group: null
  confidence: primary
