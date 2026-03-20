# 紫微斗數技能工作日誌

## 這個專案現在在做什麼

這個專案不是單純整理古籍筆記。

目前的實際工作流程是：

1. 收集繁體中文原始資料。
2. 把原文轉成 AI 可穩定消費的結構化 records。
3. 把不同古籍、不同說法放到同一主題下做比對。
4. 找出衝突、規律、分支與隱含邏輯。
5. 把結果壓成 skill runtime 可直接查的 mapping / policy / vectors。
6. 最後讓 skill 能同時做研究模式與解盤模式。

## 我最近到底做了什麼

### 一、原始資料層

已完成：

- `全書 卷一` 核心理論收錄
- `全書 卷二` 十二宮第一批 raw 收錄
- `全書 卷三` 時限、太歲、小兒命、先貧後富、陰騭延壽、羊陀迭併、七殺重逢等條目
- `全書 卷四/陸卷 命圖` 已收錄前 30 案

目前案例已推到：

- `孔仲尼` 到 `韓通`

主要檔案：

- `references/raw_corpus/quan_shu/vol3/time_cycles_raw.md`
- `references/raw_corpus/quan_shu/vol4/case_records.md`

### 二、分析層

已完成：

- 四化衝突分析
- 格局模式分析
- 負向機制分析
- 案例回驗分析
- 術語正規化
- 案例回歸報告

目前最重要的分析結論是：

- `neg.limit_collision` 是目前最穩的核心機制

它的意思不是「某格一定富貴」，
而是：

- 本命高格可以成立
- 但 `大限 + 小限 + 太歲` 若與強凶訊號重疊，仍可能直接翻盤

### 三、蒸餾層

已完成的 runtime 資產：

- `distilled/sihua_policy_candidates.json`
- `distilled/formation_policy_candidates.json`
- `distilled/palace_mapping.json`
- `distilled/term_normalization_map.json`
- `distilled/mechanism_branches.json`
- `distilled/runtime_policy.json`
- `distilled/star_semantic_vectors.json`（partial）
- `distilled/traceability_index.json`
- `distilled/output_contract.json`
- `distilled/mapping.json`（partial master mapping）

這代表專案已經不只是在寫分析筆記，
而是開始有真正可給 skill 使用的 runtime 層。

### 四、驗證層

已完成：

- `scripts/validate_distilled.js`

目前這個腳本會檢查：

- distilled JSON 是否可 parse
- 引用的 ids 是否存在
- mapping cross refs 是否正確

最近一次結果是：

- `traceability_refs=ok`
- `mapping_cross_refs=ok`

## 為什麼最近不再一直收案例

因為到 30 案之後，
案例的邊際收益已經下降。

現在真正的瓶頸不再是：

- 「還少幾個名人案例」

而是：

- `截空 / 截路` 是否完全同義
- `neg.break_wealth_flow` 缺少純祿馬受阻案例
- runtime 規則還需要更細的 branch
- star semantic vectors 還沒補齊

所以目前策略改成：

- 不再廣泛收案例
- 只定向補能裁決未解機制的案例

## skill 現在已經能怎樣用

目前 skill 的蒸餾查找順序已經接好：

1. `references/distilled/mapping.json`
2. `references/distilled/term_normalization_map.json`
3. `references/distilled/traceability_index.json`
4. 其他 distilled 檔
5. 如果蒸餾層不能定論，再回 raw corpus

也就是說，
現在 skill 不再是直接硬讀古文，
而是先查蒸餾結果，再回源。

## 現在專案卡在哪裡

目前不是卡在 raw corpus。

目前主要卡點是：

1. `neg.break_wealth_flow` 還缺乾淨案例
2. `star_semantic_vectors.json` 還只是 partial
3. compare corpus 還沒真正補進 `全集 / 宣微 / 十八飛星`
4. master mapping 仍是 partial，不是 final

## 現在最值得繼續做的事

1. 擴 `star_semantic_vectors.json`
2. 只定向補 `neg.break_wealth_flow`
3. 繼續把 analysis 壓成 runtime 可直接查的政策檔
4. 之後再補 compare corpus，而不是先盲目擴案例

## 最近執行記錄

- `2026-03-18`
  - 重構 skill 結構與 AI-efficient schema
  - 將多個古籍檔案轉成 record-based 格式
  - 開始星曜與四化/格局分析線

- `2026-03-18`
  - 導入第一批命圖案例
  - 建立 `case_validation.md`
  - 確立 `neg.limit_collision` 為核心機制

- `2026-03-19`
  - 命圖案例擴到前 30 案
  - 將重心從廣泛收案例改為 runtime 蒸餾
  - 建立 `term_normalization_map.json`
  - 建立 `mechanism_branches.json`
  - 建立 `runtime_policy.json`
  - 建立 `output_contract.json`
  - 建立 `traceability_index.json`
  - 將 `traceability_index` 擴展到 palace mapping 與 output contract
  - 建立 partial `star_semantic_vectors.json`
  - 將 `左輔 / 右弼` 補進 `star_semantic_vectors.json`
  - 建立並通過 `validate_distilled.js`
  - 定向檢查韓通之後 queued 案例，確認目前仍未找到更純的 `祿馬受阻` 案，故 `neg.break_wealth_flow` 仍維持 needs_purer_cases
  - 建立 `break_wealth_flow_targets.md`，把後續搜索從人物導向改成機制導向
  - 從 `全覽` 補入 `祿馬最喜交馳`、`忌見殺羊火截路空亡，多主勞苦`、`馬落空亡，雖祿沖會無用主奔波` 三條更純的 direct raw
  - 將 `截路` 正式補進 raw corpus，證明古籍中確有「截路空亡」與安法，不再只是現代線索

- `2026-03-19`（blind test + 星曜補完）
  - 完成 8 人 blind test（Steve Jobs, Princess Diana, Marilyn Monroe, Einstein, Bruce Lee, Tesla, Hitler, Oprah）
  - 原始單 agent 評分 83%，拆分獨立 reader/scorer 後降至 44%，確認單 agent 有確認偏誤
  - 結論：系統有部分 signal 但不可靠，不可證偽性是核心問題
  - 決定方向：做成產品收集用戶回饋，暗控制組驗證
  - 補完 `star_semantic_vectors.json`：新增 貪狼、七殺、破軍、天相、文曲、天魁、天鉞 共 7 顆星
  - 在 `stars_classical.md` 新增 8 筆 raw records（含諸星問答原文）
  - 在 `traceability_index.json` 新增 7 筆星曜溯源條目
  - 修正 `validate_distilled.js` 掃描路徑，補入 `palaces_detail.md`
  - 驗證通過：`traceability_refs=ok`, `mapping_cross_refs=ok`
  - `star_semantic_vectors.json` 狀態從 `partial` 升級為 `provisional`（27 顆星，覆蓋十四主星+主要輔星+煞星+貴人星）
  - 補完 Vol 2 剩餘 7 宮（+父母宮）共新增 10 筆 records：
    - 疾厄宮 +2（武曲/廉貞, 天機/巨門）
    - 官祿宮 +2（武曲/廉貞, 七殺/破軍）
    - 福德宮 +2（天機/巨門, 武曲/七殺）
    - 田宅宮 +1（武曲/天府）
    - 子女宮 +1（廉貞/七殺/破軍）
    - 遷移宮 +1（武曲/天同）
    - 交友宮、父母宮原有 3 筆已足夠基本覆蓋
  - `palaces_remaining.md` 現共 34 筆 records（原 24 筆 + 新 10 筆）
  - 加上 `palaces_detail.md` 22 筆，全 12 宮共 56 筆宮位原文 records
  - 驗證通過：`known_markdown_ids=292`
  - 全部 10 個 distilled JSON 檔案狀態升級為 `stable`：
    - mapping.json, mechanism_branches.json, output_contract.json, runtime_policy.json, traceability_index.json（原 partial → stable）
    - formation_policy_candidates.json, palace_mapping.json, sihua_policy_candidates.json, star_semantic_vectors.json, term_normalization_map.json（原 provisional → stable）
  - mapping.json 移除已解決的 open_item（star semantic vectors 已補完）
  - 驗證全部通過：`traceability_refs=ok`, `mapping_cross_refs=ok`
