# 十干四化衝突比對

## metadata
- topic: 十干四化
- layer: compare
- format: record_list

## records
- id: sihua.common.001
  layer: compare
  source:
    canon: 多來源共識
    section: 十干四化
    chapter: 核心共識
    locator: 甲
  type: sihua_rule
  subject: 甲
  object: 四化
  conditions: []
  claim: 廉貞祿 破軍權 武曲科 太陽忌
  quote: 甲：廉貞祿、破軍權、武曲科、太陽忌。
  notes: 各流派基本一致
  tags: [甲, 共識]
  conflict_group: null
  confidence: secondary

- id: sihua.common.002
  layer: compare
  source:
    canon: 多來源共識
    section: 十干四化
    chapter: 核心共識
    locator: 乙
  type: sihua_rule
  subject: 乙
  object: 四化
  conditions: []
  claim: 天機祿 天梁權 紫微科 太陰忌
  quote: 乙：天機祿、天梁權、紫微科、太陰忌。
  notes: 各流派基本一致
  tags: [乙, 共識]
  conflict_group: null
  confidence: secondary

- id: sihua.wu.quanshu
  layer: compare
  source:
    canon: 紫微鬥數全書
    section: 十干四化
    chapter: 戊幹
    locator: 全書版本
  type: sihua_rule
  subject: 戊
  object: 四化
  conditions: []
  claim: 貪狼祿 太陰權 右弼科 天機忌
  quote: 全書版：貪狼祿、太陰權、右弼科、天機忌。
  notes: 與北派左輔科不同
  tags: [戊, 全書]
  conflict_group: sihua.wu
  confidence: secondary

- id: sihua.wu.north
  layer: compare
  source:
    canon: 北派/部分流派
    section: 十干四化
    chapter: 戊幹
    locator: 北派版本
  type: sihua_rule
  subject: 戊
  object: 四化
  conditions: []
  claim: 貪狼祿 太陰權 左輔科 天機忌
  quote: 北派：貪狼祿、太陰權、左輔科、天機忌。
  notes: 爭議焦點為左輔或右弼
  tags: [戊, 北派]
  conflict_group: sihua.wu
  confidence: secondary

- id: sihua.geng.quanshu
  layer: compare
  source:
    canon: 紫微鬥數全書
    section: 十干四化
    chapter: 庚幹
    locator: 全書版本
  type: sihua_rule
  subject: 庚
  object: 四化
  conditions: []
  claim: 太陽祿 武曲權 天府科 天同忌
  quote: 全書版：太陽祿、武曲權、天府科、天同忌。
  notes: 與現代主流不同
  tags: [庚, 全書]
  conflict_group: sihua.geng
  confidence: secondary

- id: sihua.geng.zhongzhou
  layer: compare
  source:
    canon: 中州派/現代多數
    section: 十干四化
    chapter: 庚幹
    locator: 中州版本
  type: sihua_rule
  subject: 庚
  object: 四化
  conditions: []
  claim: 太陽祿 武曲權 太陰科 天同忌
  quote: 中州派：太陽祿、武曲權、太陰科、天同忌。
  notes: 現代常見版本
  tags: [庚, 中州]
  conflict_group: sihua.geng
  confidence: secondary

- id: sihua.geng.north
  layer: compare
  source:
    canon: 北派/部分古籍
    section: 十干四化
    chapter: 庚幹
    locator: 北派版本
  type: sihua_rule
  subject: 庚
  object: 四化
  conditions: []
  claim: 太陽祿 武曲權 天同科 太陰忌
  quote: 北派：太陽祿、武曲權、天同科、太陰忌。
  notes: 衝突最大的一組
  tags: [庚, 北派]
  conflict_group: sihua.geng
  confidence: secondary

- id: sihua.ren.quanshu
  layer: compare
  source:
    canon: 紫微鬥數全書
    section: 十干四化
    chapter: 壬幹
    locator: 全書版本
  type: sihua_rule
  subject: 壬
  object: 四化
  conditions: []
  claim: 天梁祿 紫微權 左輔科 武曲忌
  quote: 全書版：天梁祿、紫微權、左輔科、武曲忌。
  notes: 與部分北派不同
  tags: [壬, 全書]
  conflict_group: sihua.ren
  confidence: secondary

- id: sihua.ren.north
  layer: compare
  source:
    canon: 部分北派
    section: 十干四化
    chapter: 壬幹
    locator: 北派版本
  type: sihua_rule
  subject: 壬
  object: 四化
  conditions: []
  claim: 天梁祿 紫微權 天府科 武曲忌
  quote: 北派：天梁祿、紫微權、天府科、武曲忌。
  notes: 爭議焦點為左輔或天府
  tags: [壬, 北派]
  conflict_group: sihua.ren
  confidence: secondary

- id: sihua.school.001
  layer: compare
  source:
    canon: 流派立場整理
    section: 十干四化
    chapter: 流派
    locator: 南派
  type: theory_rule
  subject: 南派
  object: 四化立場
  conditions: []
  claim: 傾向全書與全集原始記載
  quote: 南派傾向全書與全集的原始記載。
  notes: 屬流派摘要，不是原始經文
  tags: [南派, 流派]
  conflict_group: null
  confidence: secondary
