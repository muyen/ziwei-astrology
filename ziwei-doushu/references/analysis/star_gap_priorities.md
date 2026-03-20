# 缺失星曜優先級分析

## metadata
- topic: 缺失星曜優先級分析
- layer: analysis
- status: provisional
- basis: current_corpus_only

## current_coverage
- covered_main_stars: [紫微, 天機, 太陽, 武曲, 天同, 廉貞, 巨門, 天梁]
- missing_main_stars: [天府, 太陰, 貪狼, 天相, 七殺, 破軍]
- missing_supporting_stars: [左輔, 右弼, 文昌, 文曲, 祿存, 天馬]
- missing_malefics: [火星, 鈴星, 擎羊, 陀羅, 空劫]

## priority_batches
- batch_id: star.batch.a
  priority: highest
  stars: [太陰, 天府, 左輔, 右弼, 文昌, 祿存]
  reason: 直接卡住四化裁決與核心格局解釋
  affected_lines: [四化, 格局, 宮位, 案例]
  notes:
    - 太陰直接影響庚幹四化與月朗天門
    - 天府直接影響庚壬四化爭議與紫府同宮
    - 左輔右弼直接影響戊壬四化與紫府同宮的輔弼邏輯
    - 文昌直接影響陽梁昌祿與鈴昌陀武
    - 祿存直接影響陽梁昌祿與祿倒馬倒

- batch_id: star.batch.b
  priority: high
  stars: [火星, 擎羊, 鈴星, 陀羅, 天馬, 空劫]
  reason: 直接卡住兇格與破敗機制分析
  affected_lines: [格局, 宮位, 案例]
  notes:
    - 火星與擎羊直接影響巨火羊
    - 鈴星與陀羅直接影響鈴昌陀武
    - 天馬與空劫直接影響祿倒馬倒

- batch_id: star.batch.c
  priority: high
  stars: [貪狼, 破軍, 天相, 七殺, 文曲]
  reason: 直接補強四化、星曜職司與後續宮位分析
  affected_lines: [四化, 宮位, 案例]
  notes:
    - 貪狼與破軍在四化口訣中頻繁出現
    - 七殺與天相是主星系統缺口
    - 文曲是四化與文曜系統缺口

## records
- star: 太陰
  priority: highest
  primary_impacts: [四化, 格局, 宮位, 案例]
  affected_items:
    - sihua.geng
    - formation.yuelangtianmen
    - formation.jiyuetongliang
  gap_reason: 庚幹目前採太陰科，但缺完整原始星性支撐

- star: 天府
  priority: highest
  primary_impacts: [四化, 格局, 宮位, 案例]
  affected_items:
    - sihua.geng
    - sihua.ren
    - formation.zifutonggong
  gap_reason: 天府科版本是否合理，取決於天府原始職司與語義

- star: 左輔
  priority: highest
  primary_impacts: [四化, 格局, 案例]
  affected_items:
    - sihua.ren
    - sihua.wu
    - formation.zifutonggong
  gap_reason: 左輔科是否合理目前只能靠輔弼類推

- star: 右弼
  priority: highest
  primary_impacts: [四化, 格局, 案例]
  affected_items:
    - sihua.wu
    - sihua.ren
    - formation.zifutonggong
  gap_reason: 戊右弼科需原始星性支撐

- star: 文昌
  priority: highest
  primary_impacts: [格局, 四化, 案例]
  affected_items:
    - formation.yangliangchanglu
    - formation.lingchangtuowu
  gap_reason: 功名文氣與負向文曜破格都需要文昌原始星性

- star: 祿存
  priority: highest
  primary_impacts: [格局, 宮位, 案例]
  affected_items:
    - formation.yangliangchanglu
    - formation.ludaomadao
  gap_reason: 祿的穩定資源語義是多個格局的關鍵

- star: 火星
  priority: high
  primary_impacts: [格局, 案例]
  affected_items:
    - formation.juhuoyang
  gap_reason: 巨火羊的負向機制缺一半星性資料

- star: 擎羊
  priority: high
  primary_impacts: [格局, 案例]
  affected_items:
    - formation.juhuoyang
  gap_reason: 巨火羊的煞曜收斂尚未可完整解釋

- star: 鈴星
  priority: high
  primary_impacts: [格局, 案例]
  affected_items:
    - formation.lingchangtuowu
  gap_reason: 鈴昌陀武缺鈴星原始定義

- star: 陀羅
  priority: high
  primary_impacts: [格局, 案例]
  affected_items:
    - formation.lingchangtuowu
  gap_reason: 鈴昌陀武缺陀羅原始定義

- star: 天馬
  priority: high
  primary_impacts: [格局, 案例]
  affected_items:
    - formation.ludaomadao
  gap_reason: 奔波與流動性的核心星曜尚未補錄

- star: 空劫
  priority: high
  primary_impacts: [格局, 宮位, 案例]
  affected_items:
    - formation.ludaomadao
    - quanshu.v2.fuqi.004
  gap_reason: 破敗、早喪、半路夫妻等負向條件需原始語義

- star: 貪狼
  priority: high
  primary_impacts: [四化, 宮位, 案例]
  affected_items:
    - lyric.sihua.002
    - sihua.wu
  gap_reason: 戊幹化祿主星之一，且現有星表缺失

- star: 破軍
  priority: high
  primary_impacts: [四化, 宮位, 案例]
  affected_items:
    - lyric.sihua.001
    - quanshu.v2.caibo.003
  gap_reason: 破軍在四化與財帛宮已有語義需求，但主星原始問答未補

- star: 天相
  priority: high
  primary_impacts: [宮位, 案例]
  affected_items: []
  gap_reason: 十四主星尚未補齊，會限制後續完整命盤分析

- star: 七殺
  priority: high
  primary_impacts: [宮位, 格局, 案例]
  affected_items:
    - lyric.gusui.001
  gap_reason: 七殺在賦文已出現，但主星原始問答尚缺

- star: 文曲
  priority: high
  primary_impacts: [四化, 宮位, 案例]
  affected_items:
    - lyric.sihua.006
  gap_reason: 文曜系統尚不完整，後續會限制四化與文名分析

## immediate_recommendation
- step: 先收 batch.a
  reason: 可同時提高四化分析與格局分析的可解釋性

- step: 再收 batch.b
  reason: 可補齊負向格局與案例的機制層

- step: 最後收 batch.c
  reason: 補完主星與文曜系統，為完整 skill 做準備
