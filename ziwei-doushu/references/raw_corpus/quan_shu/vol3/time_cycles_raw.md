# 紫微鬥數全書 卷三 時限與流年

## metadata
- topic: 卷三原始收錄規劃
- layer: raw
- source_canon: 紫微鬥數全書
- source_section: 卷三
- format: raw_records_plus_ingest_targets

## ingest_targets
- id: target.quanshu.vol3.dayun
  target_type: ingest_target
  canon: 紫微鬥數全書
  section: 卷三
  topic: 大限
  source_status: partial
  priority: high
  notes: 補十年大限起法、判法、吉凶條件

- id: target.quanshu.vol3.liunian
  target_type: ingest_target
  canon: 紫微鬥數全書
  section: 卷三
  topic: 流年
  source_status: partial
  priority: high
  notes: 補流年宮位疊應與四化影響

- id: target.quanshu.vol3.changsheng
  target_type: ingest_target
  canon: 紫微鬥數全書
  section: 卷三
  topic: 長生十二神
  source_status: missing
  priority: medium
  notes: 補每一神的判義與輔助權重

- id: target.quanshu.vol3.xiaoer
  target_type: ingest_target
  canon: 紫微鬥數全書
  section: 卷三
  topic: 小兒命
  source_status: partial
  priority: medium
  notes: 補幼年夭折、養育、關煞相關原文

## record_template

```yaml
- id: example.quanshu.v3.dayun.001
  layer: raw
  source:
    canon: 紫微鬥數全書
    section: 卷三
    chapter: 大限
    locator: 原文定位
  type: theory_rule
  subject: 大限
  object: 判法主題
  conditions: [條件]
  claim: 最小語義抽取
  quote: 原始繁體中文
  notes: null
  tags: [大限, 流年, 時限]
  conflict_group: null
  confidence: primary
```

## records
- id: quanshu.v3.tanxing.001
  layer: raw
  source:
    canon: 紫微鬥數全書
    section: 卷三
    chapter: 談星要論
    locator: 開篇
  type: theory_rule
  subject: 身命祿馬
  object: 空亡/天空/截空
  conditions: [看身安命, 祿馬]
  claim: 祿馬最忌落空亡、天空、截空；旬空次之
  quote: 看身安命祿馬不落空亡天空截空最緊，旬空次之。
  notes: 直接補強祿倒馬倒與截空阻斷機制
  tags: [卷三, 祿馬, 空亡, 天空, 截空, 旬空]
  conflict_group: null
  confidence: primary

- id: quanshu.v3.tanxing.002
  layer: raw
  source:
    canon: 紫微鬥數全書
    section: 卷三
    chapter: 談星要論
    locator: 看命次序
  type: theory_rule
  subject: 看命次序
  object: 命宮/身主/三方
  conditions: []
  claim: 先看命宮吉凶廟旺化吉化忌生克，再看身主，再看遷移財帛官祿三方
  quote: 第一看命宮吉凶廟旺化吉化忌生克。次看身主吉凶生克。三看遷移財帛官祿三方星辰刑衝剋破。
  notes: 補強卷三的判盤順序
  tags: [卷三, 看命次序, 三方]
  conflict_group: null
  confidence: primary

- id: quanshu.v3.tanxing.003
  layer: raw
  source:
    canon: 紫微鬥數全書
    section: 卷三
    chapter: 談星要論
    locator: 八座
  type: theory_rule
  subject: 八座
  object: 身命遷移財官福德
  conditions: [俱在成照, 聚吉化吉]
  claim: 六宮成照聚吉化吉則富貴高壽；俱陷聚兇化忌則孤寡夭壽
  quote: 身命遷移財官福德六宮名曰八座，俱在成照聚吉化吉，富貴高壽。六宮俱陷，聚兇化忌，孤寡夭壽。
  notes: 原文稱六宮為八座，保留原稱
  tags: [卷三, 八座, 富貴高壽, 孤寡夭壽]
  conflict_group: null
  confidence: primary

- id: quanshu.v3.tanxing.004
  layer: raw
  source:
    canon: 紫微鬥數全書
    section: 卷三
    chapter: 談星要論
    locator: 父母妻子三宮
  type: theory_rule
  subject: 父母妻子三宮
  object: 劫空殺忌
  conditions: [俱有劫空殺忌]
  claim: 可作僧道之命，否則孤獨貧窮
  quote: 又看父母妻子三宮，俱有劫空殺忌，僧道之命，否則孤獨貧窮。
  notes: null
  tags: [卷三, 劫空, 殺忌, 僧道, 孤獨貧窮]
  conflict_group: null
  confidence: primary

- id: quanshu.v3.tanxing.005
  layer: raw
  source:
    canon: 紫微鬥數全書
    section: 卷三
    chapter: 談星要論
    locator: 命宮無正曜
  type: theory_rule
  subject: 命宮無正曜
  object: 財官二宮
  conditions: [財官二宮有吉星拱照]
  claim: 可富貴全美；若三方有惡星則二姓延生或離祖
  quote: 若命宮無正曜者，財官二宮有吉星拱照，富貴全美，或偏房庶母所生。三方有惡星沖照，或二姓可延生，離祖可保成家。
  notes: 與命無正曜格形成跨章互證
  tags: [卷三, 命宮無正曜, 財官, 離祖]
  conflict_group: null
  confidence: primary

- id: quanshu.v3.renge.001
  layer: raw
  source:
    canon: 紫微鬥數全書
    section: 卷三
    chapter: 論人命入格
    locator: 上上之命
  type: theory_rule
  subject: 入格
  object: 上上之命
  conditions: [廟旺聚吉, 科權祿守]
  claim: 為上上之命
  quote: 如命入格，廟旺聚吉，科權祿守，上上之命。
  notes: null
  tags: [卷三, 入格, 科權祿]
  conflict_group: null
  confidence: primary

- id: quanshu.v3.renge.002
  layer: raw
  source:
    canon: 紫微鬥數全書
    section: 卷三
    chapter: 論人命入格
    locator: 下格之命
  type: theory_rule
  subject: 入格
  object: 下格之命
  conditions: [居陷地, 加殺化忌]
  claim: 為下格之命，不以入格而論
  quote: 若居陷地又加殺化忌，為下格之命，不以入格而論也。
  notes: null
  tags: [卷三, 入格, 下格, 化忌]
  conflict_group: null
  confidence: primary

- id: quanshu.v3.gegao.001
  layer: raw
  source:
    canon: 紫微鬥數全書
    section: 卷三
    chapter: 論格星數高下
    locator: 上中下格
  type: theory_rule
  subject: 格星數高下
  object: 上中下格
  conditions: []
  claim: 三方四正皆吉為上格，吉兇相伴為中格，兇星惡殺為下格
  quote: 又三方四正皆吉星為上格。吉兇相伴守照為中格。兇星惡殺為下格兇徒論。
  notes: 可直接用於格局量化基準
  tags: [卷三, 上格, 中格, 下格, 三方四正]
  conflict_group: null
  confidence: primary

- id: quanshu.v3.dayun.001
  layer: raw
  source:
    canon: 紫微鬥數全書
    section: 卷三
    chapter: 論大限十年禍福何如
    locator: 十年安靜
  type: theory_rule
  subject: 大限十年禍福
  object: 吉限
  conditions: [宮分星纏全吉, 廟旺得地, 無羊陀火鈴空劫]
  claim: 十年安靜，人財全美
  quote: 如宮分星纏全吉廟旺得地，無擎羊陀羅火鈴空劫者，主十年安靜，人財全美。
  notes: null
  tags: [卷三, 大限, 吉限]
  conflict_group: null
  confidence: primary

- id: quanshu.v3.dayun.002
  layer: raw
  source:
    canon: 紫微鬥數全書
    section: 卷三
    chapter: 論大限十年禍福何如
    locator: 兇限
  type: theory_rule
  subject: 大限十年禍福
  object: 兇限
  conditions: [陷地, 值羊陀火鈴空劫忌, 加流年惡殺湊合]
  claim: 可見官災死亡
  quote: 如宮分星纏陷地，值擎羊陀羅火鈴空劫忌，又加流年惡殺湊合，及小限巡逢兇殺，則官災死亡立見。
  notes: null
  tags: [卷三, 大限, 兇限, 官災死亡]
  conflict_group: null
  confidence: primary

- id: quanshu.v3.dayun.003
  layer: raw
  source:
    canon: 紫微鬥數全書
    section: 卷三
    chapter: 論大限十年禍福何如
    locator: 歲限忌星
  type: theory_rule
  subject: 歲限
  object: 忌星
  conditions: [行至天空地劫, 羊陀, 傷使夾限]
  claim: 屬危險歲限配置
  quote: 凡大小二限及太歲，怕行天傷天使夾地，怕行天空地劫之地，怕行擎羊陀羅之地，及羊陀沖照，怕脫兇限，怕逢兇限，又怕傷使劫空羊陀並夾歲限。
  notes: 補強歲限風險模型
  tags: [卷三, 太歲, 大小限, 天空地劫, 羊陀]
  conflict_group: null
  confidence: primary

- id: quanshu.v3.dayun.004
  layer: raw
  source:
    canon: 紫微鬥數全書
    section: 卷三
    chapter: 論大限十年禍福何如
    locator: 行至吉曜旺宮/惡殺陷宮
  type: theory_rule
  subject: 大限十年禍福
  object: 行限宮位
  conditions: [行至寅申巳亥子午宮逢吉曜, 行至辰戌醜未卯酉逢惡殺]
  claim: 行吉曜旺宮則人財興旺添丁進口；行惡殺陷宮則酒色荒迷貧乏死生
  quote: 凡行至寅申巳亥子午宮，遇紫微天府天同太陽太陰昌曲祿存祿主吉星，主人財興旺，添丁進口之慶。行至辰戍醜未卯酉，遇惡殺廉貞天使羊陀火鈴空劫忌星，主人酒色荒迷，貧乏死生。
  notes: 可直接作為行限吉凶的結構化對照基準
  tags: [卷三, 大限, 行限, 吉曜, 惡殺]
  conflict_group: null
  confidence: primary

- id: quanshu.v3.children.001
  layer: raw
  source:
    canon: 紫微鬥數全書
    section: 卷三
    chapter: 論小兒命
    locator: 小兒形氣與壽夭總法
  type: theory_rule
  subject: 小兒命
  object: 形氣/關殺
  conditions: []
  claim: 小兒命須合看形氣、惡曜、時祿衰敗與關殺，才能斷壽夭窮通
  quote: 小兒博士力士上短下長，青龍將軍腮小頭圓。大耗鼻仰脣縮，死符病符聲高性雄。官府奏書逢惡曜落地無聲，白虎太歲遇七殺幼弱遭傷。須分生剋制化之垣，更看時祿衰敗之地，後觀關殺方知壽夭窮通。
  notes: 兼含小兒形氣觀與判斷流程
  tags: [卷三, 小兒命, 關殺, 壽夭]
  conflict_group: null
  confidence: primary

- id: quanshu.v3.children.002
  layer: raw
  source:
    canon: 紫微鬥數全書
    section: 卷三
    chapter: 論小兒命
    locator: 易養
  type: theory_rule
  subject: 小兒初生
  object: 易養
  conditions: [星辰廟旺, 大小二限未行]
  claim: 星辰廟旺則災少易養，父母無克
  quote: 小兒初生，命中星辰廟旺，大小二限未行，斷其災少，易養，父母無克。
  notes: null
  tags: [卷三, 小兒命, 易養]
  conflict_group: null
  confidence: primary

- id: quanshu.v3.children.003
  layer: raw
  source:
    canon: 紫微鬥數全書
    section: 卷三
    chapter: 論小兒命
    locator: 難養
  type: theory_rule
  subject: 小兒初生
  object: 難養
  conditions: [命坐惡殺, 纏陷地, 大小二限未行]
  claim: 命坐惡殺並纏陷地則災多難養，且刑剋父母
  quote: 若命坐惡殺及纏陷弱之地，大小二限未行，斷其災多，難養，刑剋父母。
  notes: null
  tags: [卷三, 小兒命, 難養, 刑剋父母]
  conflict_group: null
  confidence: primary

- id: quanshu.v3.taisui.001
  layer: raw
  source:
    canon: 紫微鬥數全書
    section: 卷三
    chapter: 論流年太歲吉凶星殺
    locator: 太歲在命宮
  type: theory_rule
  subject: 流年太歲
  object: 三方對照
  conditions: [太歲在命宮行]
  claim: 禍福尤緊，需看三方對照星辰吉凶
  quote: 凡太歲看三方對照星辰吉凶何如以定禍福，太歲在命宮行者禍福尤緊。
  notes: null
  tags: [卷三, 流年太歲, 三方對照]
  conflict_group: null
  confidence: primary

- id: quanshu.v3.taisui.002
  layer: raw
  source:
    canon: 紫微鬥數全書
    section: 卷三
    chapter: 論二限太歲吉凶
    locator: 二限太歲總法
  type: theory_rule
  subject: 二限太歲
  object: 吉凶交會
  conditions: []
  claim: 先分看大限、小限、太歲各自吉凶，再看兩兩相逢與太歲沖羊陀七殺
  quote: 須詳大限獨守吉凶何如，小限獨守吉凶何如，太歲獨守吉凶何如。如歲限俱兇則兇。又看大限與小限相逢吉凶何如，大限逢太歲吉凶何如，小限逢太歲吉凶何如，禍福所定。又看太歲沖大限小限，太歲沖羊陀七殺，然後可斷吉凶。
  notes: 直接補上二限太歲的判斷次序
  tags: [卷三, 二限, 太歲, 羊陀, 七殺]
  conflict_group: null
  confidence: primary

- id: quanshu.v3.nanbei.001
  layer: raw
  source:
    canon: 紫微鬥數全書
    section: 卷三
    chapter: 論行限分南北斗
    locator: 南北斗應期
  type: theory_rule
  subject: 行限
  object: 南北斗應期
  conditions: [陽男陰女, 陰男陽女]
  claim: 陽男陰女以南斗為福，應在下五年與下半年；陰男陽女以北斗為福，應在上五年與上半年
  quote: 陽男陰女南斗為福。陰男陽女北斗為福。北斗諸星吉凶，大限斷上五年應，小限斷上半年應。南斗諸星吉凶，大限斷下五年應，小限斷下半年應。
  notes: 補上限運應期分配邏輯
  tags: [卷三, 行限, 南北斗, 應期]
  conflict_group: null
  confidence: primary

- id: quanshu.v3.taisui.003
  layer: raw
  source:
    canon: 紫微鬥數全書
    section: 卷三
    chapter: 論流年太歲吉凶星殺
    locator: 命在子宮例
  type: theory_rule
  subject: 流年太歲
  object: 命宮重疊
  conditions: [命在子宮, 太歲到子, 癸生人]
  claim: 太歲與命宮重疊時，逢吉則吉，逢兇則兇
  quote: 如命在子宮太歲到子，又癸生人逢吉則吉逢兇則兇。
  notes: 補足太歲在命宮的具體例句
  tags: [卷三, 流年太歲, 命宮]
  conflict_group: null
  confidence: primary

- id: quanshu.v3.yinde.001
  layer: raw
  source:
    canon: 紫微鬥數全書
    section: 卷三
    chapter: 論陰騭延壽
    locator: 倒限延壽
  type: theory_rule
  subject: 陰騭延壽
  object: 倒限
  conditions: [大小二限及太歲到兇陷地, 利物濟人, 反身修德]
  claim: 平日修德行善者，雖逢倒限凶地，亦可能延過壽限而不死
  quote: 陰騰延壽生百福，雖然倒限不遭傷。假如有人大小二限及太歲到兇陷地，有延過壽去不死者，乃是其人曾行陰騰，平日利物濟人，反身修德，以作善降福，雖兇不害。
  notes: 為限運模型加入德行修正項
  tags: [卷三, 陰騭, 延壽, 倒限]
  conflict_group: null
  confidence: primary

- id: quanshu.v3.birthtime.001
  layer: raw
  source:
    canon: 紫微鬥數全書
    section: 卷三
    chapter: 論人生時安命吉凶
    locator: 六陽六陰時
  type: theory_rule
  subject: 生時安命
  object: 陰陽時位
  conditions: [寅午戌申子辰六陽時, 巳酉醜亥卯未六陰時]
  claim: 六陽時命安六陽宮為吉，六陰時命安六陰宮為吉；反之較差
  quote: 凡男女生在寅午戍、申子辰六陽時，安命在此六宮者吉；生在已酉醜、亥卯未六陰時，安命在此六陰宮者吉。反此則少逐。
  notes: 可支撐命宮與時辰陰陽配對規則
  tags: [卷三, 生時安命, 陰陽時位]
  conflict_group: null
  confidence: primary

- id: quanshu.v3.mingfu.001
  layer: raw
  source:
    canon: 紫微鬥數全書
    section: 卷三
    chapter: 論命先貧後富
    locator: 先成後敗/先貧後富
  type: theory_rule
  subject: 先貧後富
  object: 限步扶抑
  conditions: [大小二限及太歲相沖照, 又加兇殺守臨, 或限步相扶遇吉曜廟旺]
  claim: 人生起伏不只看本命，還要看限步；可先成後敗，也可先貧後富
  quote: 如人生於富貴之家，一生快樂享福，財官題逹，妻榮子貴，奴僕成行，聲名昭著。其間有半途遭傷，人離財散，官非火盜。身喪家亡，此等之命，非命也，卻是限步逢兇，大小二限及太歲相沖照，又加兇殺守臨，故此破敗不貧，即損壽也，所謂先成後敗，先大後小也。又有人命出身微賤，營活生理，百工巧藝，九流醫術，又爲初歷艱辛度日，卻乃中末平地，升騰發財，驚駭鄉邦，因生在中庸之局，後因限步相扶，星辰逢吉曜廟旺，以此突然發達進祿，所謂先貧後富，先小後大是也。
  notes: 直接補強本命與限運的雙層模型
  tags: [卷三, 先貧後富, 先成後敗, 大小限, 太歲]
  conflict_group: null
  confidence: primary


- id: quanshu.v3.yangtuo.001
  layer: raw
  source:
    canon: 紫微鬥數全書
    section: 卷三
    chapter: 論羊陀迭併
    locator: 命遷與流羊流陀
  type: theory_rule
  subject: 羊陀迭併
  object: 流年重疊
  conditions: [命三方原有羊陀, 流年又遇流羊流陀]
  claim: 原局已有羊陀沖合，再遇流羊流陀，為羊陀迭併，屬重兇
  quote: 如庚生人，命在卯宮，遷移在酉宮，如遇羊陀流年，亦庚祿居申，流羊在酉，流陀在未，是命在卯宮，原有酉宮擎羊衝合流年，又遇流羊流陀，謂之羊陀迭併。
  notes: 可直接接入重兇疊併模型
  tags: [卷三, 羊陀迭併, 流年, 重兇]
  conflict_group: null
  confidence: primary

- id: quanshu.v3.qisha.001
  layer: raw
  source:
    canon: 紫微鬥數全書
    section: 卷三
    chapter: 論七殺重逢
    locator: 十生九死
  type: theory_rule
  subject: 七殺重逢
  object: 十生九死
  conditions: [命三合原有七殺守照, 流年又遇流羊流陀沖照]
  claim: 七殺重逢與羊陀迭併同屬最毒之禍，但若逢紫微天相祿存等吉曜仍可解
  quote: 如命中三合原有七殺守照，而流年又遇流羊、流陀衝照，謂之七殺重逢，二者爲禍最毒，入廟災晦減輕。如陷地逢忌，及卯酉遇擎羊，爲閑宮，午生人不利也。然七殺逢吉曜，衆亦轉兇化吉，不可一槩論兇。擎羊、陀羅、七殺，逢紫微天相、祿存三合拱照，可觧。詩：羊陀迭併命難逃，七殺重逢禍必遭。曰：太歲二限臨此地，十生九死不堅牢。
  notes: 同時補入可解條件，避免過度決斷
  tags: [卷三, 七殺重逢, 羊陀迭併, 十生九死]
  conflict_group: null
  confidence: primary
