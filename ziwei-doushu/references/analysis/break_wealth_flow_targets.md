# 祿馬斷流定向補料目標

## metadata
- topic: `neg.break_wealth_flow` 定向補料
- layer: analysis
- status: in_progress
- purpose: 只整理能直接補強 `祿馬受阻` 機制的 raw 與 case 線索，避免再廣泛收案例

## current_direct_evidence
- source_id: star.tianma.002
  type: primary_raw
  claim: 與祿存同宮為祿馬交馳；逢空亡為死馬亡馬；遇陀羅為折足馬
  usefulness: very_high
  why: 這是目前最直接的天馬組合定義

- source_id: quanshu.v3.tanxing.001
  type: primary_raw
  claim: 祿馬最忌落空亡、天空、截空；旬空次之
  usefulness: very_high
  why: 直接把祿馬與阻斷條件連起來

- source_id: formation.ludaomadao.001
  type: formation_raw
  claim: 祿倒馬倒，忌陷空亡；財源被劫，奔波無成
  usefulness: very_high
  why: 這是機制層最直接的 formation 語句

- source_id: formation.lumajiaochi.001
  type: primary_raw
  claim: 祿馬最喜交馳
  usefulness: high
  why: 補上祿馬交馳的正向基準，方便跟負向阻斷句對照

- source_id: formation.lumajiaochi.002
  type: primary_raw
  claim: 祿馬交馳若見殺羊火截路空亡，多主勞苦
  usefulness: very_high
  why: 直接補上截路/空亡如何把祿馬從吉轉勞苦

- source_id: formation.maluokongwang.001
  type: primary_raw
  claim: 馬落空亡，雖祿沖會無用，主奔波
  usefulness: very_high
  why: 這是目前最純的馬落空亡 raw 之一

## current_indirect_cases
- case_id: case.quanshu.v4.005
  reason: 有祿存，但缺明示天馬
  limitation: 更像限運相沖，不是純祿馬斷流

- case_id: case.quanshu.v4.018
  reason: 有祿存與吉處藏兇
  limitation: 仍偏高格翻盤，不夠純

- case_id: case.quanshu.v4.025
  reason: 有馬頭帶箭、天空、地劫
  limitation: 偏 mobility risk，不等於祿馬交馳被斷

- case_id: case.quanshu.v4.030
  reason: 有沉馬
  limitation: 偏 `limit_collision`，不是完整祿馬鏈

## unresolved_targets
- target_id: bwf.target.001
  search_terms: [祿馬交馳, 死馬, 亡馬, 折足馬]
  priority: highest
  reason: 這是最直接能把機制從 theory-backed 推到 case-backed 的關鍵詞

- target_id: bwf.target.002
  search_terms: [祿存, 天馬, 空亡]
  priority: high
  reason: 若命圖案例裡有三者同時出現，價值極高

- target_id: bwf.target.003
  search_terms: [祿存, 天馬, 陀羅]
  priority: high
  reason: 可直接補 `折足馬`

- target_id: bwf.target.004
  search_terms: [沉馬, 祿馬]
  priority: medium
  reason: 可能補 mobility_breakers 與 break_wealth_flow 的交界

## not_worth_chasing
- item: 只有高格 + 地網/天羅/天傷的案例
  reason: 這些主要補 `neg.limit_collision`，對祿馬斷流邊際收益低

- item: 只有祿存但沒有天馬或 mobility 詞群的案例
  reason: 只能補財源，不足以支撐完整祿馬鏈

## next_step
- step: 後續只用 `bwf.target.001 ~ .004` 這四組詞做定向搜索
  reason: 把搜索從人物導向改成機制導向

- step: 目前 direct raw 已明顯增強，後續重點從「找更多相似句」轉向「找更純 case」
  reason: 原文鏈已足夠支撐 break_wealth_flow 的基本結構，真正缺的是案例層乾淨樣本
