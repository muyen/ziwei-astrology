# 外部來源線索

## metadata
- topic: 外部來源線索
- layer: analysis
- status: active
- purpose: 記錄尚未進 raw corpus 的外部線索，避免與原始文獻混淆

## leads
- lead_id: lead.jiekong.001
  target: 截路 / 截空
  source_type: modern_secondary
  source_name: 紫微社
  url: https://www.junzitai.com/zt/jiekongxing
  claim: 截空星全名可稱截路空亡星，語義偏阻截、落空、障礙
  status: unverified_for_raw
  use: 幫助搜尋與比對；現已知古籍確有「截路空亡」raw，但兩者是否完全同義仍待裁決

- lead_id: lead.jiekong.002
  target: 截路 / 截空
  source_type: modern_secondary
  source_name: 辰龍書齋
  url: https://edu.zwchenlong.com/course/star-algorithm
  claim: 現代教學材料中存在安截空條目
  status: unverified_for_raw
  use: 可作為尋找截空安星法與術語對應的入口；不可替代已補入的古籍 raw

- lead_id: lead.kongwang.001
  target: 空亡系統
  source_type: tertiary
  source_name: 維基百科
  url: https://zh.wikipedia.org/wiki/%E7%A9%BA%E4%BA%A1
  claim: 紫微鬥數常見空亡相關星包含地空、地劫、天空、旬空、截空
  status: terminology_hint_only
  use: 僅用於術語比對，不可當 raw

- lead_id: lead.quanshu.edition.001
  target: 全書卷次對應
  source_type: catalog
  source_name: 識典古籍
  url: https://www.shidianguji.com/zh/book/SDZJ0170/chapter/1l8c31cc86psj
  claim: 該版本將我們目前稱為卷二的宮位訣列在肆卷，將談星要論等列在伍卷，將古今富貴貧賤夭壽命圖列在陸卷
  status: useful_for_edition_mapping
  use: 用於校對不同版本卷次；不可直接替代 raw 引文
