# 星曜原始收錄隊列

## metadata
- topic: 星曜原始收錄隊列
- purpose: 補齊缺失星曜原始問答與註解
- format: ingest_queue

## ingest_targets
- id: target.star.taiyin
  target_type: ingest_target
  topic: 太陰
  batch: star.batch.a
  priority: highest
  source_status: missing
  notes: 直接影響庚幹四化與月朗天門

- id: target.star.tianfu
  target_type: ingest_target
  topic: 天府
  batch: star.batch.a
  priority: highest
  source_status: missing
  notes: 直接影響紫府同宮與庚壬幹四化爭議

- id: target.star.zuofu
  target_type: ingest_target
  topic: 左輔
  batch: star.batch.a
  priority: highest
  source_status: missing
  notes: 直接影響壬幹四化與輔弼系統

- id: target.star.youbi
  target_type: ingest_target
  topic: 右弼
  batch: star.batch.a
  priority: highest
  source_status: missing
  notes: 直接影響戊幹四化與輔弼系統

- id: target.star.wenchang
  target_type: ingest_target
  topic: 文昌
  batch: star.batch.a
  priority: highest
  source_status: missing
  notes: 直接影響陽梁昌祿與鈴昌陀武

- id: target.star.lucun
  target_type: ingest_target
  topic: 祿存
  batch: star.batch.a
  priority: highest
  source_status: missing
  notes: 直接影響陽梁昌祿與祿倒馬倒

- id: target.star.huoxing
  target_type: ingest_target
  topic: 火星
  batch: star.batch.b
  priority: high
  source_status: missing
  notes: 直接影響巨火羊

- id: target.star.qingyang
  target_type: ingest_target
  topic: 擎羊
  batch: star.batch.b
  priority: high
  source_status: missing
  notes: 直接影響巨火羊

- id: target.star.lingxing
  target_type: ingest_target
  topic: 鈴星
  batch: star.batch.b
  priority: high
  source_status: missing
  notes: 直接影響鈴昌陀武

- id: target.star.tuoluo
  target_type: ingest_target
  topic: 陀羅
  batch: star.batch.b
  priority: high
  source_status: missing
  notes: 直接影響鈴昌陀武

- id: target.star.tianma
  target_type: ingest_target
  topic: 天馬
  batch: star.batch.b
  priority: high
  source_status: missing
  notes: 直接影響祿倒馬倒

- id: target.star.kongjie
  target_type: ingest_target
  topic: 空劫
  batch: star.batch.b
  priority: high
  source_status: missing
  notes: 直接影響祿倒馬倒與夫妻宮負向斷語

- id: target.star.tanlang
  target_type: ingest_target
  topic: 貪狼
  batch: star.batch.c
  priority: high
  source_status: missing
  notes: 直接影響戊幹四化與後續主星系統

- id: target.star.pojun
  target_type: ingest_target
  topic: 破軍
  batch: star.batch.c
  priority: high
  source_status: missing
  notes: 直接影響甲癸四化與財帛宮

- id: target.star.tianxiang
  target_type: ingest_target
  topic: 天相
  batch: star.batch.c
  priority: high
  source_status: missing
  notes: 十四主星尚未補齊

- id: target.star.qisha
  target_type: ingest_target
  topic: 七殺
  batch: star.batch.c
  priority: high
  source_status: missing
  notes: 賦文已出現但主星原始問答未補

- id: target.star.wenqu
  target_type: ingest_target
  topic: 文曲
  batch: star.batch.c
  priority: high
  source_status: missing
  notes: 文曜與四化系統缺口

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

## batch_order
- batch: star.batch.a
  focus: 先補四化與核心格局的解釋鏈

- batch: star.batch.b
  focus: 再補兇格與負向機制

- batch: star.batch.c
  focus: 補全主星系統與文曜系統
