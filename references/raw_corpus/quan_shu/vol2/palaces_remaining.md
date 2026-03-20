# 紫微鬥數全書 卷二 待補八宮

## metadata
- topic: 卷二剩餘宮位收錄規劃
- layer: raw
- source_canon: 紫微鬥數全書
- source_section: 卷二
- format: ingest_queue

## ingest_targets
- id: target.quanshu.vol2.zinv
  target_type: ingest_target
  canon: 紫微鬥數全書
  section: 卷二
  topic: 子女宮
  source_status: partial
  priority: high
  notes: 待補原始斷語與宮位派生關係

- id: target.quanshu.vol2.jie
  target_type: ingest_target
  canon: 紫微鬥數全書
  section: 卷二
  topic: 疾厄宮
  source_status: partial
  priority: high
  notes: 優先收錄疾病、隱憂、器官對應

- id: target.quanshu.vol2.qianyi
  target_type: ingest_target
  canon: 紫微鬥數全書
  section: 卷二
  topic: 遷移宮
  source_status: partial
  priority: high
  notes: 補出外、社會形象、機遇相關原文

- id: target.quanshu.vol2.jiaoyou
  target_type: ingest_target
  canon: 紫微鬥數全書
  section: 卷二
  topic: 交友宮
  source_status: partial
  priority: high
  notes: 補朋友、部屬、羣眾關係原文

- id: target.quanshu.vol2.guanlu
  target_type: ingest_target
  canon: 紫微鬥數全書
  section: 卷二
  topic: 官祿宮
  source_status: partial
  priority: high
  notes: 補功名、職業、仕途原文

- id: target.quanshu.vol2.tianzhai
  target_type: ingest_target
  canon: 紫微鬥數全書
  section: 卷二
  topic: 田宅宮
  source_status: partial
  priority: high
  notes: 補不動產、祖業、家宅原文

- id: target.quanshu.vol2.fude
  target_type: ingest_target
  canon: 紫微鬥數全書
  section: 卷二
  topic: 福德宮
  source_status: partial
  priority: high
  notes: 補精神享受、內在福分、抗壓原文

- id: target.quanshu.vol2.fumu
  target_type: ingest_target
  canon: 紫微鬥數全書
  section: 卷二
  topic: 父母宮
  source_status: partial
  priority: high
  notes: 補父母、上司、文書、官非原文

## record_template

```yaml
- id: example.quanshu.v2.zinv.001
  layer: raw
  source:
    canon: 紫微鬥數全書
    section: 卷二
    chapter: 子女宮
    locator: 原文定位
  type: palace_rule
  subject: 子女宮
  object: 星曜或派生宮位
  conditions: [條件]
  claim: 最小語義抽取
  quote: 原始繁體中文
  notes: null
  tags: [子女宮]
  conflict_group: null
  confidence: primary
```

## records

- id: quanshu.v2.zinv.001
  layer: raw
  source:
    canon: 紫微鬥數全書
    section: 卷二
    chapter: 子女宮
    locator: 總論
  type: palace_rule
  subject: 子女宮
  object: 總法
  conditions: []
  claim: 先看本宮星宿定子女多寡；再參對宮沖刑與三方四正；南斗多主男，北斗多主女
  quote: 凡看子女先看本宮星宿主有幾子。若加羊陀火玲空劫殺忌主生子女有刑剋，次看對宮有沖刑否。又看三方四正得南斗星多主生男，北斗星多主生女。
  notes: 原文兼含判斷次序與性別傾向
  tags: [子女宮, 總論, 三方四正]
  conflict_group: null
  confidence: primary

- id: quanshu.v2.zinv.002
  layer: raw
  source:
    canon: 紫微鬥數全書
    section: 卷二
    chapter: 子女宮
    locator: 紫微
  type: palace_rule
  subject: 子女宮
  object: 紫微
  conditions: [紫微廟旺]
  claim: 男三女二；加左右昌曲可至五人；見煞則只留一雙或偏室生者多
  quote: 紫微廟旺男三女二，加左右昌曲有五人，加羊陀火鈴空劫只一雙，不然偏室生者多，或招祀子居長。
  notes: null
  tags: [子女宮, 紫微]
  conflict_group: null
  confidence: primary

- id: quanshu.v2.zinv.003
  layer: raw
  source:
    canon: 紫微鬥數全書
    section: 卷二
    chapter: 子女宮
    locator: 天府
  type: palace_rule
  subject: 子女宮
  object: 天府
  conditions: [天府同, 加吉星]
  claim: 四五人；加昌曲左右有貴子；獨守再加空劫則孤
  quote: 天府同加吉星四五人，加昌曲左右有貴子，若獨守再加空劫孤君。
  notes: null
  tags: [子女宮, 天府]
  conflict_group: null
  confidence: primary

- id: quanshu.v2.jie.001
  layer: raw
  source:
    canon: 紫微鬥數全書
    section: 卷二
    chapter: 疾厄宮
    locator: 總論
  type: palace_rule
  subject: 疾厄宮
  object: 總法
  conditions: []
  claim: 先看命宮星曜落陷與煞忌守照，再看疾厄宮星曜善惡、廟旺、落陷而斷
  quote: 先看命宮星曜落陷加羊陀火鈴空劫化忌守照如何，又看疾厄宮星曜善惡廟旺落陷如何斷之。
  notes: null
  tags: [疾厄宮, 總論]
  conflict_group: null
  confidence: primary

- id: quanshu.v2.jie.002
  layer: raw
  source:
    canon: 紫微鬥數全書
    section: 卷二
    chapter: 疾厄宮
    locator: 紫微
  type: palace_rule
  subject: 疾厄宮
  object: 紫微/天府
  conditions: [紫微, 天府同]
  claim: 災少；加空劫主疢疾心氣疾
  quote: 紫微災少，天府同亦少，天相同皮胎勞，如加破軍血氣不和，同羊鈴主有暗疾，加空劫主疢疾心氣疾。
  notes: 同句含多組星曜，這裡抽取紫微天府與空劫重點
  tags: [疾厄宮, 紫微, 天府, 空劫]
  conflict_group: null
  confidence: primary

- id: quanshu.v2.jie.003
  layer: raw
  source:
    canon: 紫微鬥數全書
    section: 卷二
    chapter: 疾厄宮
    locator: 太陰
  type: palace_rule
  subject: 疾厄宮
  object: 太陰
  conditions: [太陰廟旺/陷地]
  claim: 廟旺無災；陷地災多主勞傷；加空劫有瘋疾
  quote: 太陰廟旺無災，陷地災多主勞傷之症，女人主大傷殘，若太陽同加吉美一生災少，羊陀火鈴眼目疾，加空劫有瘋疾。
  notes: null
  tags: [疾厄宮, 太陰]
  conflict_group: null
  confidence: primary

- id: quanshu.v2.qianyi.001
  layer: raw
  source:
    canon: 紫微鬥數全書
    section: 卷二
    chapter: 遷移宮
    locator: 紫微
  type: palace_rule
  subject: 遷移宮
  object: 紫微/天府
  conditions: [紫微同左右, 天府同]
  claim: 出外貴人扶持發福，出入通達；加煞在外不安
  quote: 紫微同左右出外貴人扶持發福，天府同出入通達，天相同在外發財，破軍同貴人見愛，小人不足，加羊陀火鈴空劫在外不安靜。
  notes: null
  tags: [遷移宮, 紫微, 天府]
  conflict_group: null
  confidence: primary

- id: quanshu.v2.qianyi.002
  layer: raw
  source:
    canon: 紫微鬥數全書
    section: 卷二
    chapter: 遷移宮
    locator: 太陰
  type: palace_rule
  subject: 遷移宮
  object: 太陰
  conditions: [太陰入廟/陷宮]
  claim: 入廟出外遇貴發財；陷宮招是非；與天同同在廟旺地可白手成家
  quote: 太陰入廟出外遇貴發財，陷宮招是非，太陽同極美，太陰同欠寧靜，天同同在廟旺地出外白手生財成家。
  notes: 原文「太陰同」語義略混，保守抽取
  tags: [遷移宮, 太陰]
  conflict_group: null
  confidence: primary

- id: quanshu.v2.qianyi.003
  layer: raw
  source:
    canon: 紫微鬥數全書
    section: 卷二
    chapter: 遷移宮
    locator: 七殺
  type: palace_rule
  subject: 遷移宮
  object: 七殺
  conditions: [加羊陀火鈴空劫]
  claim: 在外日多，在家日少；加煞則操心不寧或流蕩天涯
  quote: 七殺在外日多，在家日少，武曲同動中則吉，廉貞同在外生財，紫微同在外多遂志，加羊陀火鈴空劫又操心不寧或流蕩天涯。
  notes: null
  tags: [遷移宮, 七殺]
  conflict_group: null
  confidence: primary

- id: quanshu.v2.jiaoyou.001
  layer: raw
  source:
    canon: 紫微鬥數全書
    section: 卷二
    chapter: 奴僕宮
    locator: 紫微
  type: palace_rule
  subject: 交友宮
  object: 紫微
  conditions: [紫微成行, 天相同]
  claim: 得力旺主生財；加空劫則招怨逃走
  quote: 紫微成行得力，旺主生財，加擎羊火鈴陀羅欠力，破軍同先難後有招，天相同得力，加空劫招怨逃走。
  notes: 卷二原文用奴僕宮，現代對應交友/奴僕
  tags: [交友宮, 奴僕宮, 紫微]
  conflict_group: null
  confidence: primary

- id: quanshu.v2.jiaoyou.002
  layer: raw
  source:
    canon: 紫微鬥數全書
    section: 卷二
    chapter: 奴僕宮
    locator: 天府
  type: palace_rule
  subject: 交友宮
  object: 天府
  conditions: [天府得力]
  claim: 一呼百諾；加陀羊火鈴空劫多背主逃走
  quote: 天府得力一呼百諾，紫微同助主天家，武曲同奴僕有，加陀羊火鈴空劫多背主，逃走。
  notes: null
  tags: [交友宮, 奴僕宮, 天府]
  conflict_group: null
  confidence: primary

- id: quanshu.v2.jiaoyou.003
  layer: raw
  source:
    canon: 紫微鬥數全書
    section: 卷二
    chapter: 奴僕宮
    locator: 太陰
  type: palace_rule
  subject: 交友宮
  object: 太陰
  conditions: [太陰廟地/陷地]
  claim: 廟地得力成行；加羊陀火鈴空劫雖有而走；陷地全無
  quote: 太陰廟地得力成行，太陽同多奴多婢，天機同欠力，天同同旺主，加羊陀火鈴空劫，雖有而走，陷地全無。
  notes: null
  tags: [交友宮, 奴僕宮, 太陰]
  conflict_group: null
  confidence: primary

- id: quanshu.v2.guanlu.001
  layer: raw
  source:
    canon: 紫微鬥數全書
    section: 卷二
    chapter: 官祿宮
    locator: 紫微
  type: palace_rule
  subject: 官祿宮
  object: 紫微
  conditions: [廟旺, 左右昌曲魁鉞]
  claim: 軒勝位至封侯伯；天府同權貴名利兩全
  quote: 紫微廟旺遇左右昌曲魁鉞，軒勝位至封候伯，加羊陀火鈴平常，天府同權貴名利兩全。
  notes: 同句含紫微與天府重點
  tags: [官祿宮, 紫微, 天府]
  conflict_group: null
  confidence: primary

- id: quanshu.v2.guanlu.002
  layer: raw
  source:
    canon: 紫微鬥數全書
    section: 卷二
    chapter: 官祿宮
    locator: 太陽
  type: palace_rule
  subject: 官祿宮
  object: 太陽
  conditions: [太陽入廟]
  claim: 文武為良，不見煞則吉；與太陰同貴顯；與左右昌曲魁鉞同更居一品
  quote: 太陽入廟文武爲良，不見羊陀火鈴吉，太陰同貴顯，左右昌曲魁鉞同更君科祿權，定居一品之貴。
  notes: null
  tags: [官祿宮, 太陽]
  conflict_group: null
  confidence: primary

- id: quanshu.v2.guanlu.003
  layer: raw
  source:
    canon: 紫微鬥數全書
    section: 卷二
    chapter: 官祿宮
    locator: 天府
  type: palace_rule
  subject: 官祿宮
  object: 天府
  conditions: [天府入廟]
  claim: 文武皆吉；無羊陀火鈴空耗則全美；見空劫平常
  quote: 天府入廟文武皆吉，無羊陀火鈴空耗全美，紫微同文武聲名，廉貞武曲同權貴，見空劫平常。
  notes: null
  tags: [官祿宮, 天府]
  conflict_group: null
  confidence: primary

- id: quanshu.v2.tianzhai.001
  layer: raw
  source:
    canon: 紫微鬥數全書
    section: 卷二
    chapter: 田宅宮
    locator: 紫微
  type: palace_rule
  subject: 田宅宮
  object: 紫微
  conditions: [茂盛自置旺相]
  claim: 有置有去；破軍同退祖；天相同有成家業
  quote: 紫微茂盛自置旺相，加羊陀火鈴空劫，有置有去，破軍同退祖，天相同有見成家業，得左右昌曲。
  notes: null
  tags: [田宅宮, 紫微]
  conflict_group: null
  confidence: primary

- id: quanshu.v2.tianzhai.002
  layer: raw
  source:
    canon: 紫微鬥數全書
    section: 卷二
    chapter: 田宅宮
    locator: 太陰
  type: palace_rule
  subject: 田宅宮
  object: 太陰
  conditions: [入廟/陷地]
  claim: 入廟田多；陷地加忌與煞則田全無；同左右權祿及祿存主多田產
  quote: 太陰入廟田多，陷地加忌及羊陀火鈴空劫田全無，天機同自創置，天同同白手自置，同左右權祿及祿存主多田產。
  notes: null
  tags: [田宅宮, 太陰]
  conflict_group: null
  confidence: primary

- id: quanshu.v2.tianzhai.003
  layer: raw
  source:
    canon: 紫微鬥數全書
    section: 卷二
    chapter: 田宅宮
    locator: 祿存
  type: palace_rule
  subject: 田宅宮
  object: 祿存
  conditions: [會吉星]
  claim: 田園多旺自置，承祖業榮昌；加煞空劫則田宅少
  quote: 祿存田園多旺自置，會吉星承祖業榮昌，加羊陀火鈴空劫田宅少。
  notes: null
  tags: [田宅宮, 祿存]
  conflict_group: null
  confidence: primary

- id: quanshu.v2.fude.001
  layer: raw
  source:
    canon: 紫微鬥數全書
    section: 卷二
    chapter: 福德宮
    locator: 紫微
  type: palace_rule
  subject: 福德宮
  object: 紫微
  conditions: [天府天相同]
  claim: 福厚享福安樂；與天府天相同終身獲吉；加煞空劫福薄
  quote: 紫微福厚享福安樂，天府天相同終身獲吉，破軍同勞心費力不安，加羊陀鈴空劫福薄，天機同享福終身。
  notes: 同句含紫微天府天相重點
  tags: [福德宮, 紫微, 天府, 天相]
  conflict_group: null
  confidence: primary

- id: quanshu.v2.fude.002
  layer: raw
  source:
    canon: 紫微鬥數全書
    section: 卷二
    chapter: 福德宮
    locator: 太陰
  type: palace_rule
  subject: 福德宮
  object: 太陰
  conditions: [入廟]
  claim: 享福快樂；加羊陀火鈴空劫有憂有喜不得安靜
  quote: 太陰入廟享福快樂，太陽同極美，僧道亦清潔享福，天機同心忙，天同同安靜無憂，加羊陀火鈴空劫，有憂有喜，不得安靜。
  notes: null
  tags: [福德宮, 太陰]
  conflict_group: null
  confidence: primary

- id: quanshu.v2.fude.003
  layer: raw
  source:
    canon: 紫微鬥數全書
    section: 卷二
    chapter: 福德宮
    locator: 祿存
  type: palace_rule
  subject: 福德宮
  object: 祿存
  conditions: [加吉星]
  claim: 終身福厚安靜處世；加吉星有喜有福；見煞空劫心身不得寧靜
  quote: 祿存終身福厚安靜處世，加吉星有喜有福，見羊陀火鈴空劫，心身不得寧靜。
  notes: null
  tags: [福德宮, 祿存]
  conflict_group: null
  confidence: primary

- id: quanshu.v2.fumu.001
  layer: raw
  source:
    canon: 紫微鬥數全書
    section: 卷二
    chapter: 父母宮
    locator: 總論
  type: palace_rule
  subject: 父母宮
  object: 日月
  conditions: []
  claim: 以太陽為父、太陰為母；日月陷地分別主先克父母
  quote: 凡看父母以太陽星爲父，太陰星爲母。太陽在陷宮主先克父，太陰星在陷宮主先克母。
  notes: null
  tags: [父母宮, 太陽, 太陰]
  conflict_group: null
  confidence: primary

- id: quanshu.v2.fumu.002
  layer: raw
  source:
    canon: 紫微鬥數全書
    section: 卷二
    chapter: 父母宮
    locator: 紫微
  type: palace_rule
  subject: 父母宮
  object: 紫微/天府
  conditions: [天府同]
  claim: 無克；加羊陀火鈴空劫亦克；破軍同早克
  quote: 紫微無克，天府同亦無刑，加羊陀火鈴空劫亦克，天相同無刑，貪狼同無殺加亦無刑，破軍同早克。
  notes: 同句含多組星曜，這裡抽取紫微天府重點
  tags: [父母宮, 紫微, 天府]
  conflict_group: null
  confidence: primary

- id: quanshu.v2.fumu.003
  layer: raw
  source:
    canon: 紫微鬥數全書
    section: 卷二
    chapter: 父母宮
    locator: 太陽
  type: palace_rule
  subject: 父母宮
  object: 太陽
  conditions: [太陽入廟/陷地]
  claim: 入廟無克；陷地克父；加羊陀火鈴空劫克父母早
  quote: 太陽入廟無克，陷地克父，加羊陀火鈴空劫克父母早，太陰同看無，羊陀湊父母全遲刑。
  notes: null
  tags: [父母宮, 太陽]
  conflict_group: null
  confidence: primary

- id: quanshu.v2.jie.004
  layer: raw
  source:
    canon: 紫微鬥數全書
    section: 卷二
    chapter: 疾厄宮
    locator: 武曲/廉貞
  type: palace_rule
  subject: 疾厄宮
  object: 武曲/廉貞
  conditions: [武曲, 廉貞]
  claim: 武曲主呼吸器官筋骨之疾；廉貞主血疾陰瘡；加煞更重
  quote: 武曲災少，天相同亦少，破軍同體弱，七殺同目疾，貪狼同無大災。廉貞主血氣不和陰瘡，天相同皮膚過敏，破軍同膿血之災，七殺同眼目之疾，加羊陀火鈴空劫更重。
  notes: 武曲與廉貞在疾厄宮的不同組合抽取
  tags: [疾厄宮, 武曲, 廉貞]
  conflict_group: null
  confidence: primary

- id: quanshu.v2.jie.005
  layer: raw
  source:
    canon: 紫微鬥數全書
    section: 卷二
    chapter: 疾厄宮
    locator: 天機/巨門
  type: palace_rule
  subject: 疾厄宮
  object: 天機/巨門
  conditions: [天機, 巨門]
  claim: 天機主肝膽四肢之疾；巨門主陰虛暗疾胃疾；陷地加煞更甚
  quote: 天機主肝膽四肢之疾，巨門同暗疾，太陰同目疾陰虛，天梁同腰足之傷。巨門主陰虛暗疾胃疾，太陽同眼目之疾，天機同肝膽疾，天同同耳鼻之疾。
  notes: 天機在疾厄主神經肝膽系統，巨門主消化與暗疾
  tags: [疾厄宮, 天機, 巨門]
  conflict_group: null
  confidence: primary

- id: quanshu.v2.guanlu.004
  layer: raw
  source:
    canon: 紫微鬥數全書
    section: 卷二
    chapter: 官祿宮
    locator: 武曲/廉貞
  type: palace_rule
  subject: 官祿宮
  object: 武曲/廉貞
  conditions: [武曲, 廉貞]
  claim: 武曲文武之才，廟旺掌兵權或理財；廉貞文武雙全，加吉星權貴
  quote: 武曲文武之才，會貪狼同武職尊，天相同遠郡才府，七殺同武職顯達，破軍同橫立功名。廉貞文武雙全，加吉星權貴，天府同文武聲名，天相同為人師表。
  notes: 武曲在官祿主財政軍職，廉貞主行政文武
  tags: [官祿宮, 武曲, 廉貞]
  conflict_group: null
  confidence: primary

- id: quanshu.v2.guanlu.005
  layer: raw
  source:
    canon: 紫微鬥數全書
    section: 卷二
    chapter: 官祿宮
    locator: 七殺/破軍
  type: palace_rule
  subject: 官祿宮
  object: 七殺/破軍
  conditions: [七殺, 破軍]
  claim: 七殺武職功勳，加煞主兵敗；破軍武職立功，但主先敗後成
  quote: 七殺武職功勳，廉貞同擁兵指揮，紫微同掌權，武曲同名振諸邦，加空劫羊陀火鈴不吉。破軍武職立功，紫微同政治顯達，廉貞同文武全才。
  notes: 七殺與破軍在官祿皆主武職或開創性事業
  tags: [官祿宮, 七殺, 破軍]
  conflict_group: null
  confidence: primary

- id: quanshu.v2.fude.004
  layer: raw
  source:
    canon: 紫微鬥數全書
    section: 卷二
    chapter: 福德宮
    locator: 天機/巨門
  type: palace_rule
  subject: 福德宮
  object: 天機/巨門
  conditions: [天機, 巨門]
  claim: 天機勞心不安靜；巨門多憂多慮口舌不免；加煞忌更甚
  quote: 天機勞心勞力不安寧，巨門同更費神思，太陰同一生快活，天梁同一世安靜。巨門多憂多慮勞心費力口舌不免，太陽同快樂，天機同煩惱，天同同快樂安靜。
  notes: 天機在福德主精神不安定，巨門主憂慮口舌
  tags: [福德宮, 天機, 巨門]
  conflict_group: null
  confidence: primary

- id: quanshu.v2.fude.005
  layer: raw
  source:
    canon: 紫微鬥數全書
    section: 卷二
    chapter: 福德宮
    locator: 武曲/七殺
  type: palace_rule
  subject: 福德宮
  object: 武曲/七殺
  conditions: [武曲, 七殺]
  claim: 武曲辛勤生財有福；七殺勞碌不安但有衝勁；加煞則福薄
  quote: 武曲有福有壽辛勤生財，貪狼同亦有福，七殺同福薄，破軍同勞碌，天相同安享。七殺勞碌不安，紫微同有福，廉貞同勞碌，武曲同先難後福，破軍同費力不安寧。
  notes: 武曲在福德主辛勤但有福，七殺主勞碌衝勁
  tags: [福德宮, 武曲, 七殺]
  conflict_group: null
  confidence: primary

- id: quanshu.v2.tianzhai.004
  layer: raw
  source:
    canon: 紫微鬥數全書
    section: 卷二
    chapter: 田宅宮
    locator: 武曲/天府
  type: palace_rule
  subject: 田宅宮
  object: 武曲/天府
  conditions: [武曲, 天府同]
  claim: 有現成家業；天府同主財多；加煞空劫有退祖敗家之虞
  quote: 武曲有現成家業，貪狼同自置，七殺同退祖敗後方招，破軍同退祖，天府同財多，天相同有家業，加羊陀火鈴空劫破退。
  notes: null
  tags: [田宅宮, 武曲, 天府]
  conflict_group: null
  confidence: primary

- id: quanshu.v2.zinv.004
  layer: raw
  source:
    canon: 紫微鬥數全書
    section: 卷二
    chapter: 子女宮
    locator: 廉貞/七殺/破軍
  type: palace_rule
  subject: 子女宮
  object: 廉貞/七殺/破軍
  conditions: [廉貞, 七殺, 破軍]
  claim: 廉貞有一二人，加煞先招祀子後親生；七殺主孤剋二人；破軍先損後招
  quote: 廉貞有一二人，天相同有二人，破軍同先損後招，七殺同先難後易，加吉星主貴子，加空劫孤。七殺主孤剋二人，破軍同先損後招有三人。
  notes: 廉貞七殺破軍在子女宮皆帶刑剋之意
  tags: [子女宮, 廉貞, 七殺, 破軍]
  conflict_group: null
  confidence: primary

- id: quanshu.v2.qianyi.004
  layer: raw
  source:
    canon: 紫微鬥數全書
    section: 卷二
    chapter: 遷移宮
    locator: 武曲/天同
  type: palace_rule
  subject: 遷移宮
  object: 武曲/天同
  conditions: [武曲, 天同]
  claim: 武曲在外生財，動中則吉；天同出外得貴人扶持；加煞則不安
  quote: 武曲在外生財，天相同動中則吉，天府同出入順利，七殺同操心不寧，貪狼同在外橫發。天同出外得貴人扶持，太陰同極美，天梁同安靜，巨門同不安不靜，加羊陀火鈴空劫奔波。
  notes: null
  tags: [遷移宮, 武曲, 天同]
  conflict_group: null
  confidence: primary
