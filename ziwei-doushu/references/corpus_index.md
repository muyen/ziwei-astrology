# Corpus Index

## metadata
- topic: 紫微鬥數語料總索引
- purpose: 原始文獻收錄與蒸餾規劃
- format: status_list

## status
- id: quan_shu.vol1
  canon: 紫微鬥數全書
  section: 卷一
  status: partial
  coverage: 已收錄鬥數準繩、星垣論、發微論
  next_action: 拆分成更細的 theory_rule records

- id: quan_shu.vol2
  canon: 紫微鬥數全書
  section: 卷二
  status: partial
  coverage: 已收錄命、身、兄、夫、財宮條目；剩餘八宮已補第一批 raw records
  next_action: 繼續拆細八宮條目並將新宮位資料接入派生分析

- id: quan_shu.vol3
  canon: 紫微鬥數全書
  section: 卷三
  status: partial
  coverage: 已補入談星要論、入格、格星高下、大限十年禍福、二限太歲、流年太歲、小兒命、先貧後富、陰騭延壽、羊陀迭併、七殺重逢等首批 raw
  next_action: 繼續補卷三後段條目與太歲小限逐年細表，並將新 raw 接入 analysis

- id: quan_shu.vol4
  canon: 紫微鬥數全書
  section: 卷四
  status: partial
  coverage: 已定位識典古籍陸卷命圖正文，並收錄命圖前30案，從孔仲尼推進到韓通
  next_action: 僅定向補能裁決未解機制的案例；主線轉向術語正規化、機制分級與 distilled mapping

- id: quan_ji
  canon: 紫微鬥數全集
  section: 全集
  status: missing
  coverage: 未收錄
  next_action: 收集安星法與全書異文

- id: xuan_wei
  canon: 紫微鬥數宣微
  section: 全書
  status: missing
  coverage: 未收錄
  next_action: 收集王裁珊邏輯化修正與疾厄判法

- id: fei_xing_18
  canon: 十八飛星
  section: 全書
  status: missing
  coverage: 未收錄
  next_action: 回溯最原始星曜定義

- id: sihua_conflict
  canon: 多來源
  section: 十干四化
  status: partial
  coverage: 已整理戊庚壬幹主要衝突
  next_action: 為每一版本建立獨立 compare records

- id: star_gap
  canon: 諸星問答論 / 多來源星曜資料
  section: 星曜原始定義
  status: partial
  coverage: 已建立缺失星曜優先級、ingest queue，並補入 batch.a 核心星、batch.b 煞曜/流動星、batch.c 空劫基礎 raw
  next_action: 繼續補截路 raw，並補完空劫與既有星曜的交會條目

- id: distilled.mapping
  canon: 本倉庫蒸餾資料
  section: mapping
  status: partial
  coverage: 已建立 sihua/formation candidate policy、palace mapping、term normalization map、partial master mapping、mechanism branches、runtime policy、partial star vectors、traceability index 與 validate_distilled.js 檢查流程
  next_action: 依 term normalization 與 mechanism branches 逐步生成 master mapping 並補可回溯驗證
