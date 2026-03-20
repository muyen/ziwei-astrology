# 星曜原始收錄佇列

## metadata
- topic: 缺失星曜原始收錄
- layer: raw
- format: ingest_queue
- purpose: 補齊格局、四化、宮位分析所需的星曜原始定義

## ingest_targets
- id: target.star.taiyin
  target_type: ingest_target
  canon: 諸星問答論
  section: 主星問答
  topic: 太陰
  source_status: missing
  priority: high
  notes: 直接影響庚幹四化、月朗天門、財福類格局

- id: target.star.tianfu
  target_type: ingest_target
  canon: 諸星問答論
  section: 主星問答
  topic: 天府
  source_status: missing
  priority: high
  notes: 直接影響紫府同宮與庚壬四化爭議

- id: target.star.wenchang
  target_type: ingest_target
  canon: 諸星問答論
  section: 輔曜問答
  topic: 文昌
  source_status: missing
  priority: high
  notes: 直接影響陽梁昌祿與鈴昌陀武

- id: target.star.lucun
  target_type: ingest_target
  canon: 諸星問答論
  section: 輔曜問答
  topic: 祿存
  source_status: missing
  priority: high
  notes: 直接影響陽梁昌祿與祿倒馬倒

- id: target.star.huoxing
  target_type: ingest_target
  canon: 諸星問答論
  section: 煞曜問答
  topic: 火星
  source_status: missing
  priority: high
  notes: 直接影響巨火羊兇格解釋

- id: target.star.qingyang
  target_type: ingest_target
  canon: 諸星問答論
  section: 煞曜問答
  topic: 擎羊
  source_status: missing
  priority: high
  notes: 直接影響巨火羊與刑險型格局

- id: target.star.lingxing
  target_type: ingest_target
  canon: 諸星問答論
  section: 煞曜問答
  topic: 鈴星
  source_status: missing
  priority: high
  notes: 直接影響鈴昌陀武兇格解釋

- id: target.star.tuoluo
  target_type: ingest_target
  canon: 諸星問答論
  section: 煞曜問答
  topic: 陀羅
  source_status: missing
  priority: high
  notes: 直接影響鈴昌陀武兇格解釋

- id: target.star.tianma
  target_type: ingest_target
  canon: 諸星問答論
  section: 雜曜問答
  topic: 天馬
  source_status: missing
  priority: high
  notes: 直接影響祿倒馬倒與遷移論述

- id: target.star.kongjie
  target_type: ingest_target
  canon: 諸星問答論
  section: 煞曜問答
  topic: 空劫
  source_status: partial
  priority: high
  notes: 已補基礎 raw；仍需更多與祿存、天馬、截路的交會條目

- id: target.star.jielu
  target_type: ingest_target
  canon: 待補來源
  section: 阻斷星
  topic: 截路
  source_status: missing
  priority: high
  notes: 直接影響祿倒馬倒與負向阻斷機制

- id: target.star.kongjie
  target_type: ingest_target
  canon: 諸星問答論
  section: 煞曜問答
  topic: 空劫
  source_status: missing
  priority: medium_high
  notes: 直接影響祿倒馬倒、亡馬、資源斷裂類分析

- id: target.star.jielu
  target_type: ingest_target
  canon: 諸星問答論
  section: 雜曜問答
  topic: 截路
  source_status: missing
  priority: medium_high
  notes: 直接影響祿倒馬倒與路斷類機制分析

- id: target.star.zuofu
  target_type: ingest_target
  canon: 諸星問答論
  section: 輔曜問答
  topic: 左輔
  source_status: missing
  priority: medium_high
  notes: 直接影響壬幹四化與輔弼對稱分析

- id: target.star.youbi
  target_type: ingest_target
  canon: 諸星問答論
  section: 輔曜問答
  topic: 右弼
  source_status: missing
  priority: medium_high
  notes: 直接影響戊幹四化與輔弼對稱分析

## record_template

```yaml
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
  claim: 最小語義抽取
  quote: 原始繁體中文
  notes: null
  tags: [太陰, 星性]
  conflict_group: null
  confidence: primary
```

## batch_plan
- batch_id: stars.batch.001
  name: 四化與富貴格核心星
  stars: [太陰, 天府, 左輔, 右弼]
  reason: 直接影響四化裁決與紫府/月朗類格局

- batch_id: stars.batch.002
  name: 文曜與祿曜
  stars: [文昌, 祿存]
  reason: 直接影響陽梁昌祿與吉格結構完整度

- batch_id: stars.batch.003
  name: 凶煞收斂星
  stars: [火星, 擎羊, 鈴星, 陀羅]
  reason: 直接影響巨火羊與鈴昌陀武

- batch_id: stars.batch.004
  name: 流動與遷移星
  stars: [天馬]
  reason: 直接影響祿倒馬倒與遷移體系

- batch_id: stars.batch.005
  name: 空劫與阻斷星
  stars: [空劫, 截路]
  reason: 補足吉轉兇與資源阻斷機制

- batch_id: stars.batch.005
  name: 資源斷裂星
  stars: [空劫, 截路]
  reason: 補足祿倒馬倒與吉轉兇的斷裂機制
