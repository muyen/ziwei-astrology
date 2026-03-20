# 經典格局原始記錄

## metadata
- topic: 經典格局
- layer: raw
- format: record_list

## records
- id: formation.zifutonggong.001
  layer: raw
  source:
    canon: 紫微鬥數全書
    section: 格局論
    chapter: 富貴格局
    locator: 紫府同宮格
  type: formation_rule
  subject: 紫府同宮
  object: 富貴
  conditions: [安命在寅申宮, 紫微天府同宮]
  claim: 終身福厚，一生富貴
  quote: 紫府同宮，終身福厚。為人忠厚，一生富貴。
  notes: null
  tags: [紫府同宮, 富貴格]
  conflict_group: formation.zifutonggong
  confidence: primary

- id: formation.jixiangliming.001
  layer: raw
  source:
    canon: 紫微鬥數全書
    section: 格局論
    chapter: 富貴格局
    locator: 極向離明格
  type: formation_rule
  subject: 極向離明
  object: 富貴
  conditions: [紫微在午宮坐命, 無煞湊]
  claim: 位極人臣
  quote: 紫微居午，位極人臣。君臨天下，名震寰宇。
  notes: 第二句誇飾較強
  tags: [極向離明, 富貴格]
  conflict_group: formation.jixiangliming
  confidence: primary

- id: formation.yangliangchanglu.001
  layer: raw
  source:
    canon: 紫微鬥數全書
    section: 格局論
    chapter: 富貴格局
    locator: 陽梁昌祿格
  type: formation_rule
  subject: 陽梁昌祿
  object: 功名
  conditions: [太陽, 天梁, 文昌, 祿存或化祿, 三方四正會齊]
  claim: 名顯，官居高位
  quote: 陽梁昌祿，名震全球。傳臚第一，官居極品。
  notes: 原文含修辭
  tags: [陽梁昌祿, 富貴格]
  conflict_group: formation.yangliangchanglu
  confidence: primary

- id: formation.jiyuetongliang.001
  layer: raw
  source:
    canon: 紫微鬥數全書
    section: 格局論
    chapter: 富貴格局
    locator: 機月同梁格
  type: formation_rule
  subject: 機月同梁
  object: 職業傾向
  conditions: [命宮在寅申, 三方見天機太陰天同天梁]
  claim: 謹慎，適合行政公職
  quote: 機月同梁作吏人。為人謹慎，適合行政公職。
  notes: null
  tags: [機月同梁, 富貴格]
  conflict_group: formation.jiyuetongliang
  confidence: primary

- id: formation.yuelangtianmen.001
  layer: raw
  source:
    canon: 紫微鬥數全書
    section: 格局論
    chapter: 富貴格局
    locator: 月朗天門格
  type: formation_rule
  subject: 月朗天門
  object: 富貴
  conditions: [太陰在亥宮坐命]
  claim: 大富貴
  quote: 月朗天門，進爵封侯。主大富貴。
  notes: null
  tags: [月朗天門, 富貴格]
  conflict_group: formation.yuelangtianmen
  confidence: primary

- id: formation.rizhaoleimen.001
  layer: raw
  source:
    canon: 紫微鬥數全書
    section: 格局論
    chapter: 富貴格局
    locator: 日照雷門格
  type: formation_rule
  subject: 日照雷門
  object: 富貴
  conditions: [太陽在卯宮坐命]
  claim: 富貴名揚
  quote: 日照雷門，富貴名揚。
  notes: null
  tags: [日照雷門, 富貴格]
  conflict_group: formation.rizhaoleimen
  confidence: primary

- id: formation.ludaomadao.001
  layer: raw
  source:
    canon: 紫微鬥數全書
    section: 格局論
    chapter: 貧賤與兇險格局
    locator: 祿倒馬倒格
  type: formation_rule
  subject: 祿倒馬倒
  object: 兇險
  conditions: [祿存, 天馬, 逢空劫, 截路]
  claim: 財源受劫，奔波無成
  quote: 祿倒馬倒，忌陷空亡。財源被劫，奔波無成。
  notes: null
  tags: [祿倒馬倒, 兇格]
  conflict_group: formation.ludaomadao
  confidence: primary

- id: formation.lumajiaochi.001
  layer: raw
  source:
    canon: 紫微鬥數全書
    section: 全覽檢索
    chapter: 祿馬雜訣
    locator: 祿馬最喜交馳
  type: formation_rule
  subject: 祿馬交馳
  object: 吉
  conditions: [祿馬交馳, 不見殺羊火截路空亡]
  claim: 為吉
  quote: 祿馬最喜交馳。
  notes: 與天馬問答中的祿馬交馳互證
  tags: [祿馬交馳, 天馬, 祿存]
  conflict_group: formation.lumajiaochi
  confidence: primary

- id: formation.lumajiaochi.002
  layer: raw
  source:
    canon: 紫微鬥數全書
    section: 全覽檢索
    chapter: 祿馬雜訣
    locator: 忌見殺羊火截路空亡
  type: formation_rule
  subject: 祿馬交馳
  object: 勞苦
  conditions: [祿馬交馳, 見殺羊火截路空亡]
  claim: 多主勞苦
  quote: 忌見殺羊火截路空亡，多主勞苦。
  notes: 直接補強 break_wealth_flow 的阻斷條件
  tags: [祿馬交馳, 截路, 空亡, 勞苦]
  conflict_group: formation.lumajiaochi
  confidence: primary

- id: formation.maluokongwang.001
  layer: raw
  source:
    canon: 紫微鬥數全書
    section: 全覽檢索
    chapter: 祿馬雜訣
    locator: 馬落空亡
  type: formation_rule
  subject: 馬落空亡
  object: 奔波
  conditions: [天馬, 空亡, 雖有祿沖會]
  claim: 仍無用，主奔波
  quote: 馬落空亡，馬既落亡雖祿沖會無用主奔波。
  notes: 這是目前最純的馬落空亡 raw 之一
  tags: [馬落空亡, 天馬, 空亡, 奔波]
  conflict_group: formation.maluokongwang
  confidence: primary

- id: formation.juhuoyang.001
  layer: raw
  source:
    canon: 紫微鬥數全書
    section: 格局論
    chapter: 貧賤與兇險格局
    locator: 巨火羊格
  type: formation_rule
  subject: 巨火羊
  object: 兇險
  conditions: [巨門, 火星, 擎羊, 同宮或會照]
  claim: 多是非官非與意外
  quote: 巨火羊，終身自縊。多是非、官非、意外。
  notes: 原文兇象極重
  tags: [巨火羊, 兇格]
  conflict_group: formation.juhuoyang
  confidence: primary

- id: formation.lingchangtuowu.001
  layer: raw
  source:
    canon: 紫微鬥數全書
    section: 格局論
    chapter: 貧賤與兇險格局
    locator: 鈴昌陀武格
  type: formation_rule
  subject: 鈴昌陀武
  object: 兇險
  conditions: [鈴星, 文昌, 陀羅, 武曲, 三方四正交會]
  claim: 主重大意外或金錢崩潰
  quote: 鈴昌陀武，限至投河。主重大意外、金錢崩潰。
  notes: null
  tags: [鈴昌陀武, 兇格]
  conflict_group: formation.lingchangtuowu
  confidence: primary

- id: formation.mingwuzhengyao.001
  layer: raw
  source:
    canon: 紫微鬥數全書
    section: 格局論
    chapter: 貧賤與兇險格局
    locator: 命無正曜格
  type: formation_rule
  subject: 命無正曜
  object: 命勢
  conditions: [命宮無十四主星]
  claim: 離祖過房，多飄蕩
  quote: 命無正曜，離祖過房。二姓延生，多飄蕩。
  notes: null
  tags: [命無正曜, 兇格]
  conflict_group: formation.mingwuzhengyao
  confidence: primary
