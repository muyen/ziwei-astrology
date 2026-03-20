# 空劫與阻斷星 Batch C 原始收錄

## metadata
- topic: Batch C 空劫與阻斷星原始收錄
- layer: raw
- source_canon: 諸星問答論 / 待補其他古籍
- format: mixed

## records
- id: star.kongjie.001
  layer: raw
  source:
    canon: 諸星問答論
    section: 煞曜問答
    chapter: 天空地劫
    locator: 希夷先生
  type: star_rule
  subject: 空劫
  object: 星性
  conditions: [守身命]
  claim: 遇吉則吉，遇兇則兇；四殺沖照則下賤或六畜之命；不宜見，主破財
  quote: 二星守身命，遇吉則吉，遇兇則兇。如四殺沖照，輕者下賤，重者六畜之命。僧道不正，女子婢妾，刑剋孤獨。大抵二星俱不宜見，定主破財，二限逢之必兇。
  notes: 直接影響祿倒馬倒與空劫兇化分析
  tags: [空劫, 守身命, 破財]
  conflict_group: null
  confidence: primary

- id: star.kongjie.002
  layer: raw
  source:
    canon: 諸星問答論
    section: 煞曜問答
    chapter: 天空地劫
    locator: 歌曰
  type: star_rule
  subject: 空劫
  object: 歌訣
  conditions: []
  claim: 為害最重，才智英雄亦誤身；雖堆金積玉亦貧
  quote: 劫空為害最愁人，才智英雄誤一身，只好為僧並學術，堆金積玉也須貧。
  notes: null
  tags: [空劫, 歌訣]
  conflict_group: null
  confidence: primary

- id: star.jielu.001
  layer: raw
  source:
    canon: 紫微鬥數全書
    section: 全覽檢索
    chapter: 截路空亡訣
    locator: 安截路空亡訣 論本生年
  type: star_rule
  subject: 截路
  object: 安法
  conditions: [按本生年]
  claim: 有獨立安截路空亡訣，非純現代術語
  quote: 安截路空亡訣 論本生年。甲己申酉宮，乙庚午未宮，丙辛辰巳宮，丁壬寅卯宮，戊癸子丑宮。
  notes: 直接證明古籍中存在「截路空亡」用語與安法
  tags: [截路, 截路空亡, 安法]
  conflict_group: term.jiekong_vs_jielu
  confidence: primary

- id: star.jielu.002
  layer: raw
  source:
    canon: 紫微鬥數全書
    section: 全覽檢索
    chapter: 斷橋截路
    locator: 斷橋截路大小難行
  type: star_rule
  subject: 截路
  object: 阻斷
  conditions: [命限遇截路]
  claim: 主阻隔難行
  quote: 斷橋截路大小難行，卯酉二空聰明發福。
  notes: 強化截路的阻隔語義
  tags: [截路, 阻斷, 難行]
  conflict_group: term.jiekong_vs_jielu
  confidence: primary

- id: star.jielu.003
  layer: raw
  source:
    canon: 紫微鬥數全書
    section: 全覽檢索
    chapter: 天馬訣
    locator: 天馬火最喜會祿存
  type: star_rule
  subject: 截路
  object: 天馬
  conditions: [天馬, 會祿存]
  claim: 天馬最忌截路空亡
  quote: 天馬火，最喜會祿存，極忌截路空亡。
  notes: 直接把截路與天馬相連，對 break_wealth_flow 很重要
  tags: [截路, 天馬, 祿存, 空亡]
  conflict_group: term.jiekong_vs_jielu
  confidence: primary

## ingest_targets
- id: target.star.jielu
  target_type: ingest_target
  canon: 紫微鬥數全書 / 待補其他來源
  section: 截路相關
  topic: 截路
  source_status: partial
  priority: high
  notes: 已補入全書 direct raw；後續仍需校對與截空是否完全同義
