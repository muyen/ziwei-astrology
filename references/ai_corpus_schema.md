# AI Corpus Schema

本倉庫所有給 AI 消費的文檔，都應盡量使用「固定欄位、低修辭、單筆獨立」格式。

## 目標

- 讓模型能直接抽取，不先做段落理解。
- 讓不同古籍可以用同一欄位交叉比對。
- 讓後續蒸餾成 JSON mapping 時，不需要再次清洗。

## 通用規則

1. 一筆記錄只表達一個最小命題。
2. 優先使用繁體中文。
3. 不混用原文、摘要、評論在同一欄。
4. `quote` 保留原文。
5. `claim` 用最短語句抽取語義。
6. 不確定時，用 `null` 或 `unknown`，不要腦補。
7. 若存在流派差異，必填 `conflict_group`。

## 推薦欄位

```yaml
- id: 唯一識別碼
  layer: raw | compare | distilled
  source:
    canon: 書名
    section: 卷或篇
    chapter: 章名
    locator: 原文定位資訊
  type: lyric_rule | palace_rule | star_rule | formation_rule | sihua_rule | theory_rule | case_record
  subject: 主體，例如 命宮 / 紫微 / 戊幹 / 陽梁昌祿
  object: 客體，可為星曜、宮位、四化、格局要素
  conditions: [成條件清單]
  claim: 最小語義抽取
  quote: 原始繁體中文
  notes: 最小必要註記
  tags: [標籤]
  conflict_group: 衝突羣組代號或 null
  confidence: primary | secondary | inferred
```

## 各層用途

### `layer: raw`

- 只收原始文獻。
- 不下裁決。
- 可以有最小抽取，但不能把現代派別結論混入 `quote`。

### `layer: compare`

- 同主題跨書整理。
- 顯式標明來源差異。
- 適合四化衝突、安星法差異、同格局異說。

### `layer: distilled`

- 僅在已有足夠 raw/compare 基礎後產生。
- 用於 skill 執行時快速檢索。
- 必須能回溯到對應 `raw` 或 `compare` 記錄。

## 特殊記錄類型

### `type: case_record`

用於卷四真實批命案例或後續案例庫。建議額外欄位：

```yaml
- id: case.quanshu.v4.001
  layer: raw
  source:
    canon: 紫微鬥數全書
    section: 卷四
    chapter: 古今富貴貧賤夭壽命圖
    locator: 案例序號或頁碼
  type: case_record
  subject: 案主
  chart_signature: [命宮主星, 身宮, 四化, 關鍵格局]
  life_stage: 本命 | 大限 | 流年
  conditions: [可見的命盤條件]
  claim: 最小案例結論
  quote: 原始案例文字
  outcome: 實際應驗結果
  notes: 校勘或不明處
  tags: [富貴, 貧賤, 夭壽, 案例]
  conflict_group: null
  confidence: primary
```

### `type: ingest_target`

這不是原始規則，只是待收錄清單。只可出現在規劃檔，不可混入正式 `records`。

建議欄位：

```yaml
- id: target.quanshu.vol2.zinv
  target_type: ingest_target
  canon: 紫微鬥數全書
  section: 卷二
  topic: 子女宮
  source_status: missing
  priority: high
  notes: 待補原始斷語
```

## 檔案寫法

推薦使用下列格式：

```yaml
# 檔案主題

## metadata
- topic: 主題
- layer: raw
- source_canon: 紫微鬥數全書
- source_section: 卷二
- format: record_list

## records
- id: example.001
  layer: raw
  source:
    canon: 紫微鬥數全書
    section: 卷二
    chapter: 十二宮分論
    locator: 命宮
  type: palace_rule
  subject: 命宮
  object: 太陽
  conditions: [子宮, 入廟]
  claim: 為人公正
  quote: 命宮在子，太陽入廟，主為人公正。
  notes: null
  tags: [命宮, 太陽, 入廟]
  conflict_group: null
  confidence: primary
```

## 禁止格式

- 大段自然語言摘要後才附原文。
- 同一段落混入中英雙語解釋。
- 以 `……` 省略大量內容卻不標出缺漏範圍。
- 把研究者評論寫進原文欄。
