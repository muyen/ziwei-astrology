---
name: ziwei-doushu
description: 紫微斗數研究與解盤技能。適用於原始古籍整理、四化衝突比對、格局蒸餾、繁體中文語料抽取，以及基於 iztro 命盤資料的結構化分析。觸發詞：紫微斗數、紫微、斗數、四化、命盤、格局、全書、全集、宣微、十八飛星、ziwei。
---

# 紫微斗數技能

本技能優先服務兩類任務：

1. 原始資料工程：收集古籍原文、整理衝突、蒸餾規則。
2. 命盤分析：呼叫 `scripts/calculate.js` 取得 iztro 結果，再套用已蒸餾規則。

## 工作模式

### A. 原始資料工程

先讀 [ai_corpus_schema.md](references/ai_corpus_schema.md)。

處理順序固定如下：

1. 原文收錄：只保留繁體中文原文，不先做現代詮釋。
2. 結構抽取：把每條內容改寫成固定欄位記錄。
3. 跨書比對：同主題彙整到同一組，標出一致、衝突、缺漏。
4. 蒸餾輸出：只在有足夠原始依據時，寫入精簡 mapping 或裁決結論。
5. 蒸餾驗證：若修改 `references/distilled/*.json`，必跑 `node scripts/validate_distilled.js`。

蒸餾檢索順序：

1. 先查 `references/distilled/mapping.json`
2. 再查 `references/distilled/term_normalization_map.json`
3. 再查 `references/distilled/traceability_index.json`
4. 若蒸餾層無法定論，再回到 `raw_corpus/` 與 `classical_texts/`

原則：

- `raw_corpus/` 只放原始文獻結構化記錄，不混入現代結論。
- `classical_texts/` 放跨來源主題匯總，例如四化、格局、星曜問答。
- 每筆記錄都要有 `id`、`source`、`type`、`subject`、`quote`。
- `quote` 保留原文；`claim` 只做最小必要抽取，不加修辭。
- 有流派差異時，不提前合併；先顯式標 `conflict_group`。

### B. 命盤分析

需要出生資料時，詢問：

- 陽曆生日：`YYYY-MM-DD`
- 時辰索引：`0-12`
- 性別：`男` 或 `女`

時辰映射：

- `0=早子`
- `1=丑`
- `2=寅`
- `3=卯`
- `4=辰`
- `5=巳`
- `6=午`
- `7=未`
- `8=申`
- `9=酉`
- `10=戌`
- `11=亥`
- `12=晚子`

執行：

```bash
node scripts/calculate.js 1990-01-01 6 男
```

分析順序：

1. 先看命宮、身宮、三方四正。
2. 再看官祿、財帛、田宅、福德等目標宮位。
3. 四化以已裁決資料優先；若仍有流派衝突，需明講採用版本。
4. 引用古籍時，優先使用 `raw_corpus/` 與 `classical_texts/` 的結構化記錄。

命盤分析的 runtime 規則：

- 宮位語義先查 `references/distilled/palace_mapping.json`
- 四化先查 `references/distilled/sihua_policy_candidates.json`
- 格局 family 與負向機制先查 `references/distilled/formation_policy_candidates.json` 與 `references/distilled/mapping.json`
- 術語遇到 `空亡/天空/截空/截路/天羅/地網/羊陀` 等變體時，先用 `references/distilled/term_normalization_map.json` 正規化
- 若要輸出 source ids，先查 `references/distilled/traceability_index.json`
- 若 `mapping.json` 標示 unresolved 或 confidence 不足，必須退回 raw 層，不可假裝已裁決
- 若修改 distilled 層，最後必跑：

```bash
node scripts/validate_distilled.js
```

## 檔案導引

- Schema 與欄位規則： [ai_corpus_schema.md](references/ai_corpus_schema.md)
- 研究總索引： [corpus_index.md](references/corpus_index.md)
- 古籍彙整： [classical_texts](references/classical_texts)
- 原始文獻： [raw_corpus](references/raw_corpus)
- 蒸餾總映射： [mapping.json](references/distilled/mapping.json)
- 術語正規化： [term_normalization_map.json](references/distilled/term_normalization_map.json)
- 可回溯索引： [traceability_index.json](references/distilled/traceability_index.json)
- 計算器： [calculate.js](scripts/calculate.js)

## 輸出規則

- 預設繁體中文。
- 區分三層內容：`原文`、`抽取`、`推論`。
- 若結論來自推論而非原文明載，需明示「推論」。
- 若資料不足或流派未裁決，不假裝確定。
