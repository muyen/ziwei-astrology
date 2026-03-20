# 紫微鬥數全書 卷四 古今富貴貧賤夭壽命圖

## metadata
- topic: 卷四案例庫
- layer: raw
- source_canon: 紫微鬥數全書
- source_section: 卷四
- edition_alias: 識典古籍對應陸卷
- format: raw_records_plus_ingest_targets

## ingest_targets
- id: target.quanshu.vol4.fugui
  target_type: ingest_target
  canon: 紫微鬥數全書
  section: 卷四
  topic: 富貴命圖
  source_status: partial
  priority: high
  notes: 已找到可直讀正文並收錄首批人物案例，後續仍需擴寫

- id: target.quanshu.vol4.pinjian
  target_type: ingest_target
  canon: 紫微鬥數全書
  section: 卷四
  topic: 貧賤命圖
  source_status: partial
  priority: high
  notes: 已可逐頁翻讀命圖，待補非儒門人物與更明確的貧賤案例

- id: target.quanshu.vol4.yaoshou
  target_type: ingest_target
  canon: 紫微鬥數全書
  section: 卷四
  topic: 夭壽命圖
  source_status: partial
  priority: high
  notes: 首批案例已可提取壽夭與兇限應驗條件

## case_record_template

```yaml
- id: example.case.quanshu.v4.001
  layer: raw
  source:
    canon: 紫微鬥數全書
    section: 卷四
    chapter: 古今富貴貧賤夭壽命圖
    locator: 案例序號或頁碼
  type: case_record
  subject: 案主
  chart_signature: [命宮主星, 身宮, 四化, 關鍵格局]
  life_stage: 本命
  conditions: [命盤條件]
  claim: 最小案例結論
  quote: 原始案例文字
  outcome: 實際應驗結果
  notes: 身分不明可填 unknown
  tags: [案例]
  conflict_group: null
  confidence: primary
```

## records
- id: case.quanshu.v4.001
  layer: raw
  source:
    canon: 紫微鬥數全書
    section: 卷四
    chapter: 古今富貴貧賤夭壽命圖
    locator: 識典古籍 陸卷 命圖 / 孔仲尼命
  type: case_record
  subject: 孔仲尼
  chart_signature: [活祿逢迎, 文童冠世]
  life_stage: 本命, 62歲, 73歲
  conditions: [太歲有劫空, 小限逢天傷, 小限在天羅, 太歲入地網, 戌生人有忌]
  claim: 活祿逢迎，文名極盛，但晚年遇重兇歲限
  quote: 活祿逢迎，夫子文童冠世。辛亥年六十二歲，在陳絶糧。蓋因太歲有刼空，小限逢天傷，七十三歲，小限在天羅，太歲入地網，戌生人有忌，故死。
  outcome: 62歲有在陳絕糧之厄，73歲終死
  notes: 識典古籍頁面標題為「命圖」，工作卷標仍沿用卷四
  tags: [案例, 富貴, 夭壽, 文名, 太歲, 劫空, 天傷, 天羅地網]
  conflict_group: null
  confidence: primary

- id: case.quanshu.v4.002
  layer: raw
  source:
    canon: 紫微鬥數全書
    section: 卷四
    chapter: 古今富貴貧賤夭壽命圖
    locator: 識典古籍 陸卷 / 子路之命
  type: case_record
  subject: 子路
  chart_signature: [府相朝垣格, 紫微諸吉星拱合]
  life_stage: 本命
  conditions: [命坐廉貞將軍, 對垣遇貪狼忌星拱命]
  claim: 本屬賢士之格，但勇猛剛決且有兇亡因子
  quote: 此爲府相朝垣格，且紫微諸吉星拱合，所以爲賢士。但命坐廉貞將軍，故主勇猛。更對垣遇貪狼忌星拱命，故主兇亡，果宛孔悝之難。
  outcome: 應於宛孔悝之難而兇亡
  notes: 直接把格局、性格與死亡機制寫在同一案內
  tags: [案例, 府相朝垣, 賢士, 廉貞, 貪狼忌, 兇亡]
  conflict_group: null
  confidence: primary

- id: case.quanshu.v4.003
  layer: raw
  source:
    canon: 紫微鬥數全書
    section: 卷四
    chapter: 古今富貴貧賤夭壽命圖
    locator: 識典古籍 陸卷 / 顔亞聖命
  type: case_record
  subject: 顔亞聖
  chart_signature: [命坐魁鉞, 身逢權祿, 昌曲]
  life_stage: 本命, 大限, 壬辰年
  conditions: [昌曲陷於天傷, 大限七殺重逢, 太歲流羊流陀迭併]
  claim: 原有文貴之資，但因天傷與重兇限而不能發達
  quote: 命坐魁鉞，身逢權祿，昌曲，陷於天傷，不能發逹，大限七殺重逢。壬辰年太歲流羊、流陀迭併，故死。
  outcome: 壬辰年因七殺重逢與羊陀迭併而死
  notes: 直接驗證卷三的七殺重逢與羊陀迭併條目
  tags: [案例, 魁鉞, 權祿, 昌曲, 天傷, 七殺重逢, 羊陀迭併]
  conflict_group: null
  confidence: primary

- id: case.quanshu.v4.004
  layer: raw
  source:
    canon: 紫微鬥數全書
    section: 卷四
    chapter: 古今富貴貧賤夭壽命圖
    locator: 識典古籍 陸卷 / 孟軻之命
  type: case_record
  subject: 孟軻
  chart_signature: [雙祿拱照, 昌曲重逢, 戌有機梁, 文曲單坐身命]
  life_stage: 本命, 大限, 小限
  conditions: [大限地網逢鈴, 小限天羅, 太歲在絕地]
  claim: 文章冠世，但晚限受天羅地網與鈴星牽動而兇
  quote: 雙祿拱照，昌曲重逢，戌有機梁，文章冠世。文曲單坐身命，主人口能舌辨。大限地網逢鈴，小限天羅，太歲又在絶地，故兇。
  outcome: 逢兇限而兇
  notes: 案例同時展現文格與限運反轉
  tags: [案例, 雙祿拱照, 昌曲, 機梁, 天羅地網, 鈴星]
  conflict_group: null
  confidence: primary

- id: case.quanshu.v4.005
  layer: raw
  source:
    canon: 紫微鬥數全書
    section: 卷四
    chapter: 古今富貴貧賤夭壽命圖
    locator: 識典古籍 陸卷 / 端木賜命
  type: case_record
  subject: 端木賜
  chart_signature: [祿存坐命未宮, 暗祿會合]
  life_stage: 本命, 35歲, 41歲
  conditions: [卯生人, 防巳亥限, 大限入亥, 小限入巳, 兔埋蛇地, 太歲相沖, 喪門忌會]
  claim: 本具富貴之勢，但巳亥限與太歲沖忌構成死亡條件
  quote: 祿存坐命未宮，暗祿會合，爲富貴之論。卯生人防於巳亥限，三十五歲，大限入亥，四十一歲，小限入巳，兔埋蛇地，更爲兇，太歲相沖，喪門忌會，是以兇也，故死。
  outcome: 41歲因巳亥限與太歲沖忌而死
  notes: 可用於驗證限運相沖與喪門忌會
  tags: [案例, 祿存, 暗祿, 巳亥限, 太歲相沖, 喪門, 化忌]
  conflict_group: null
  confidence: primary

- id: case.quanshu.v4.006
  layer: raw
  source:
    canon: 紫微鬥數全書
    section: 卷四
    chapter: 古今富貴貧賤夭壽命圖
    locator: 識典古籍 陸卷 / 子羔之命
  type: case_record
  subject: 子羔
  chart_signature: [府相朝垣格]
  life_stage: 本命, 44歲, 45歲
  conditions: [子生人有忌, 44歲大限在申宮, 申限天傷天刑夾地, 45歲小限逢天哭天虛, 沐浴敗地]
  claim: 府相朝垣、食祿千鍾，本命富貴雙全，但兇限集中時仍可亡命
  quote: 此爲府相朝垣格，食祿千鍾，富貴雙全，一生順美。四十四歲入大限在申宮，子生人有忌。申限天傷、天刑夾地，小限四十五歲，逢天哭、天虛，沐浴敗地，故命亡。
  outcome: 45歲因天傷天刑夾地與天哭天虛而亡
  notes: 富貴格與兇限夾擊並存的典型案例
  tags: [案例, 府相朝垣, 天傷, 天刑, 天哭, 天虛, 沐浴敗地]
  conflict_group: null
  confidence: primary

- id: case.quanshu.v4.007
  layer: raw
  source:
    canon: 紫微鬥數全書
    section: 卷四
    chapter: 古今富貴貧賤夭壽命圖
    locator: 識典古籍 陸卷 / 冉求之命
  type: case_record
  subject: 冉求
  chart_signature: [祿存守垣, 紫府加會]
  life_stage: 本命, 大限, 小限
  conditions: [大限天傷, 小限到巳, 卯生人忌之, 喪門天虛沖命, 劫空合拱, 太歲白虎天哭在命]
  claim: 原局福厚，但大限、小限與多重兇曜疊加時難逃兇應
  quote: 祿存守垣，紫府加會，終身福厚。大限天傷，小限到巳，卯生人忌之，喪門、天虛沖命，刼空，合拱太歲、白虎、天哭在命，故此難逃也。
  outcome: 因天傷、喪門、天虛、劫空與太歲白虎天哭重疊而兇
  notes: 可用於負向機制的多曜收斂驗證
  tags: [案例, 祿存, 紫府, 天傷, 喪門, 天虛, 劫空, 白虎, 天哭]
  conflict_group: null
  confidence: primary

- id: case.quanshu.v4.008
  layer: raw
  source:
    canon: 紫微鬥數全書
    section: 卷四
    chapter: 古今富貴貧賤夭壽命圖
    locator: 識典古籍 陸卷 / 子産之命 / https://www.shidianguji.com/zh/book/SDZJ0170/chapter/1jvzop88fjl0l
  type: case_record
  subject: 子産
  chart_signature: [陰男金四局, 紫府朝垣, 左輔文昌加會]
  life_stage: 本命, 大限, 64歲
  conditions: [一生富貴名揚, 大限沉馬, 64歲小限入地網逢忌]
  claim: 紫府朝垣與輔昌加會主富貴名揚，但晚限遇沉馬、地網與化忌時仍主凶死
  quote: 紫府朝垣，左輔文昌加曾，一生富貴，君名題揚。大限沉馬，小限六十四入地網逢忌，故兇而死。
  outcome: 晚年因沉馬、地網逢忌而凶死
  notes: 可用於驗證紫府朝垣吉格在晚限受阻時的反轉條件
  tags: [案例, 子産, 紫府朝垣, 左輔, 文昌, 沉馬, 地網, 化忌]
  conflict_group: null
  confidence: primary

- id: case.quanshu.v4.009
  layer: raw
  source:
    canon: 紫微鬥數全書
    section: 卷四
    chapter: 古今富貴貧賤夭壽命圖
    locator: 識典古籍 陸卷 / 蘇丞相命 / https://www.shidianguji.com/zh/book/SDZJ0170/chapter/1jvzop88fjxnp
  type: case_record
  subject: 蘇丞相
  chart_signature: [陰男土五局, 日月權祿, 左右加會]
  life_stage: 本命, 34歲, 大限, 小限
  conditions: [醜未宮, 方伯公格, 劫空沖守, 三十四歲而亡, 大限入地網, 小限又入地網, 太歲在天羅]
  claim: 日月權祿與左右加會可成顯貴，但劫空沖守加上地網、天羅重疊時福不全美而早亡
  quote: 雖曰日月權祿，醜未宮，定是方伯公，左右加會，名譽聲揚，只嫌刼空衝守，福不全美，故主三十四歲而亡。大限入地網，小限又入地網，太歲在天羅，故兇。
  outcome: 三十四歲因劫空沖守與地網天羅疊加而亡
  notes: 直接支持「吉格不敵重疊兇限」的案例方向
  tags: [案例, 蘇丞相, 日月權祿, 左右, 劫空, 地網, 天羅]
  conflict_group: null
  confidence: primary

- id: case.quanshu.v4.010
  layer: raw
  source:
    canon: 紫微鬥數全書
    section: 卷四
    chapter: 古今富貴貧賤夭壽命圖
    locator: 識典古籍 陸卷 / 晏平仲命 / https://www.shidianguji.com/zh/book/SDZJ0170/chapter/1jvzop88fkaat
  type: case_record
  subject: 晏平仲
  chart_signature: [陽男金四局, 丹墀貴格, 太陽守命垣, 日月爭耀, 科權祿會合]
  life_stage: 本命, 43歲
  conditions: [秋月生者真格, 四十三歲, 太歲行寅, 申生人有忌, 小限喪門病符天哭沖照]
  claim: 丹墀貴格與日月爭耀本主文武雙全，但太歲、小限與喪門病符天哭沖照時仍有死亡應期
  quote: 此爲丹墀貴格，秋月生者是真格。且太陽守命垣，日月爭耀，科權祿會合，文武雙全。四十三歲，太歲行寅，大星申生人有忌，小限喪門、病符、天哭衝照，故命亡。
  outcome: 四十三歲因太歲、小限兇曜沖照而亡
  notes: 可用於驗證丹墀貴格遇限運兇曜時的失效條件
  tags: [案例, 晏平仲, 丹墀貴格, 太陽, 日月爭耀, 科權祿, 喪門, 病符, 天哭]
  conflict_group: null
  confidence: primary

- id: case.quanshu.v4.011
  layer: raw
  source:
    canon: 紫微鬥數全書
    section: 卷四
    chapter: 古今富貴貧賤夭壽命圖
    locator: 識典古籍 陸卷 / 孫臏之命 / https://www.shidianguji.com/zh/book/SDZJ0170/chapter/1jvzop8d7olyq
  type: case_record
  subject: 孫臏
  chart_signature: [紫府朝垣格, 左右拱照, 科權祿三方會合, 文昌武曲守命]
  life_stage: 本命, 75歲
  conditions: [兼資文武, 終身富貴, 七十五歲, 大限入天羅]
  claim: 紫府朝垣與左右科權祿會合為文武雙全富貴格，但晚限入天羅仍可致兇
  quote: 此爲紫府朝垣格，左右拱照科權祿三方會合，文昌、武曲守命，兼資文武終身富貴之論。七十五歲，大限入天羅。
  outcome: 晚年大限入天羅而兇
  notes: 由頁面 description 抽取，待後續與正文逐字校對
  tags: [案例, 孫臏, 紫府朝垣, 左右, 科權祿, 文昌, 武曲, 天羅]
  conflict_group: null
  confidence: primary

- id: case.quanshu.v4.012
  layer: raw
  source:
    canon: 紫微鬥數全書
    section: 卷四
    chapter: 古今富貴貧賤夭壽命圖
    locator: 識典古籍 陸卷 / 龐涓之命 / https://www.shidianguji.com/zh/book/SDZJ0170/chapter/1jvzop8d7oylu
  type: case_record
  subject: 龐涓
  chart_signature: [紫府科權祿昌曲魁鉞坐守身命, 左右夾垣]
  life_stage: 本命, 庚辰年
  conditions: [廉貞七殺, 積富, 命犯陀羅, 庚辰太歲入天羅]
  claim: 富貴格成局，但命犯陀羅且太歲入天羅，屬吉中藏險
  quote: 紫府科權祿昌曲魁鉞坐守身命，左右夾垣，爲富貴之論。廉貞七殺，又爲積富之人，命犯陀羅。庚辰太歲入天羅。
  outcome: 太歲入天羅時有兇險應期
  notes: 由頁面 description 抽取，待後續與正文逐字校對
  tags: [案例, 龐涓, 紫府, 科權祿, 昌曲, 魁鉞, 廉貞, 七殺, 陀羅, 天羅]
  conflict_group: null
  confidence: primary

- id: case.quanshu.v4.013
  layer: raw
  source:
    canon: 紫微鬥數全書
    section: 卷四
    chapter: 古今富貴貧賤夭壽命圖
    locator: 識典古籍 陸卷 / 伍明輔命 / https://www.shidianguji.com/zh/book/SDZJ0170/chapter/1jvzop8d7pb8y
  type: case_record
  subject: 伍明輔
  chart_signature: [權祿生逢, 左右昌曲加會, 七殺守命]
  life_stage: 本命, 36歲後, 62歲
  conditions: [壯年崢嶸, 犯擎羊, 天空, 三十六後方遂志]
  claim: 早年有羊與天空阻滯，三十六後方遂志，屬先抑後揚型案例
  quote: 權祿生逢左右昌曲加會，七殺守命，壯年崢嶸，爲戰國明輔。生五歲，有犯擎羊、天空，直在卅六後方遂志。六十二。
  outcome: 三十六後始遂志，六十二歲見終局
  notes: 由頁面 description 抽取，個別數字與字詞待正文校對
  tags: [案例, 伍明輔, 權祿, 左右, 昌曲, 七殺, 擎羊, 天空, 先抑後揚]
  conflict_group: null
  confidence: primary

- id: case.quanshu.v4.014
  layer: raw
  source:
    canon: 紫微鬥數全書
    section: 卷四
    chapter: 古今富貴貧賤夭壽命圖
    locator: 識典古籍 陸卷 / 蕭何之命 / https://www.shidianguji.com/zh/book/SDZJ0170/chapter/1jvzop8d7pnw2
  type: case_record
  subject: 蕭何
  chart_signature: [府相朝垣格, 紫府左右, 權祿嘉會, 昌曲祿合]
  life_stage: 本命, 大限, 小限
  conditions: [坐貴向貴, 入相之命, 限到擎羊, 酉人忌之, 小限流羊與命垣相沖]
  claim: 富貴雙全入相之格，但擎羊與流羊沖命時屬明顯失效條件
  quote: 府相朝垣格，紫府左右，權祿嘉會，又兼昌曲祿合，乃坐貴向貴，富貴雙全，入相之命。限到擎羊，酉人忌之，小限流羊與命垣相沖。
  outcome: 限到擎羊與流羊沖命時有兇應
  notes: 由頁面 description 抽取，待後續與正文逐字校對
  tags: [案例, 蕭何, 府相朝垣, 紫府, 權祿, 昌曲, 擎羊, 流羊]
  conflict_group: null
  confidence: primary

- id: case.quanshu.v4.015
  layer: raw
  source:
    canon: 紫微鬥數全書
    section: 卷四
    chapter: 古今富貴貧賤夭壽命圖
    locator: 識典古籍 陸卷 / 陳平之命 / https://www.shidianguji.com/zh/book/SDZJ0170/chapter/1jvzop8d7q0j6
  type: case_record
  subject: 陳平
  chart_signature: [權祿生逢天府, 武曲守命垣, 左右昌曲加會]
  life_stage: 本命, 73歲, 大限, 小限
  conditions: [忻然入相之命, 大限七十三入申, 身臨絕地, 小限到天空, 天使夾地]
  claim: 入相之格成立，但晚限遇絕地、天空與天使夾地時轉兇
  quote: 權祿生逢天府，武曲守命垣，左右昌曲加會，忻然入相之命。大限七十三入申，身臨絶地，小限到天空，天使夾地。
  outcome: 七十三歲見強兇限
  notes: 由頁面 description 抽取，待後續與正文逐字校對
  tags: [案例, 陳平, 權祿, 天府, 武曲, 左右, 昌曲, 絕地, 天空, 天使]
  conflict_group: null
  confidence: primary

- id: case.quanshu.v4.016
  layer: raw
  source:
    canon: 紫微鬥數全書
    section: 卷四
    chapter: 古今富貴貧賤夭壽命圖
    locator: 識典古籍 陸卷 / 耿弇之命 / https://www.shidianguji.com/zh/book/SDZJ0170/chapter/1jvzop8d7qd6a
  type: case_record
  subject: 耿弇
  chart_signature: [破軍在子午宮, 左右昌曲加會, 文武雙全]
  life_stage: 本命, 大限, 太歲
  conditions: [官資清貴至三公, 大限到天傷, 有嫌巨門, 太歲到午]
  claim: 高官富貴格可成，但天傷、巨門嫌忌與太歲應期仍可形成風險
  quote: 破軍若在子午宮，官資清題至三公，又兼左右昌曲加會，文武雙全，富貴之命。大限到於天傷，有嫌巨門。太歲到午。
  outcome: 大限到天傷與太歲到午時構成兇險應期
  notes: 由頁面 description 抽取，待後續與正文逐字校對
  tags: [案例, 耿弇, 破軍, 左右, 昌曲, 天傷, 巨門, 太歲]
  conflict_group: null
  confidence: primary

- id: case.quanshu.v4.017
  layer: raw
  source:
    canon: 紫微鬥數全書
    section: 卷四
    chapter: 古今富貴貧賤夭壽命圖
    locator: 識典古籍 陸卷 / 蒯文通命 / https://www.shidianguji.com/zh/book/SDZJ0170/chapter/1jvzop8d7qpte
  type: case_record
  subject: 蒯文通
  chart_signature: [雙祿朝垣, 對宮相會, 日月左右未宮加會]
  life_stage: 本命, 25歲
  conditions: [無巨機, 最善談兵, 命垣火宿, 為人膽大, 乙巳年二十五歲]
  claim: 雙祿朝垣與日月左右相會，主談兵與富貴，但火宿也構成性格與事件風險
  quote: 雙祿朝垣，又無巨機，對宮相會，最善談兵。日月左右，未宮加會，最爲奇也。但命垣火宿，爲人膽大。乙巳年二十五歲。
  outcome: 二十五歲有明顯應期提示
  notes: 由頁面 description 抽取，待後續與正文逐字校對
  tags: [案例, 蒯文通, 雙祿朝垣, 日月, 左右, 火宿, 談兵]
  conflict_group: null
  confidence: primary

- id: case.quanshu.v4.018
  layer: raw
  source:
    canon: 紫微鬥數全書
    section: 卷四
    chapter: 古今富貴貧賤夭壽命圖
    locator: 識典古籍 陸卷 / 項羽之命 / https://www.shidianguji.com/zh/book/SDZJ0170/chapter/1jvzop8d7r2gi
  type: case_record
  subject: 項羽
  chart_signature: [權祿加會, 祿存守命垣]
  life_stage: 本命, 32歲, 大限, 小限
  conditions: [對宮忌星沖破, 吉處藏兇, 三十二歲, 大限到寅, 地劫相合, 小限到申]
  claim: 權祿與祿存雖主極富貴，但忌星沖破與地劫相合使吉處藏兇
  quote: 權祿加會，當至極富貴，祿存守命垣，被對宮忌星衝破，爲吉處藏兇。三十二歲，大限到寅，地刼相合，小限到申。
  outcome: 三十二歲見大限與小限並發的兇應
  notes: 由頁面 description 抽取，待後續與正文逐字校對
  tags: [案例, 項羽, 權祿, 祿存, 忌星沖破, 地劫, 吉處藏兇]
  conflict_group: null
  confidence: primary

- id: case.quanshu.v4.019
  layer: raw
  source:
    canon: 紫微鬥數全書
    section: 卷四
    chapter: 古今富貴貧賤夭壽命圖
    locator: 識典古籍 陸卷 / 張子房命 / https://www.shidianguji.com/zh/book/SDZJ0170/chapter/1jvzop8d7rf3m
  type: case_record
  subject: 張子房
  chart_signature: [雙祿朝守, 左右昌曲加會, 紫府同宮]
  life_stage: 本命, 76歲, 大小二限
  conditions: [極富貴之命, 限落夾地, 七十六, 大小二限在天傷天空天使]
  claim: 雙祿紫府的極富貴格成立，但大小二限同見天傷、天空、天使時仍可命亡
  quote: 此是雙祿朝守，左右昌曲加會，又兼紫府同宮，作極富貴之命，直須限落夾地，故以命亡。七十六，大小二限在天傷、天空、天使。
  outcome: 七十六歲因大小二限夾地與傷使天空而亡
  notes: 由頁面 description 抽取，待後續與正文逐字校對
  tags: [案例, 張子房, 雙祿朝守, 左右, 昌曲, 紫府, 天傷, 天空, 天使]
  conflict_group: null
  confidence: primary

- id: case.quanshu.v4.020
  layer: raw
  source:
    canon: 紫微鬥數全書
    section: 卷四
    chapter: 古今富貴貧賤夭壽命圖
    locator: 識典古籍 陸卷 / 韓信之命 / https://www.shidianguji.com/zh/book/SDZJ0170/chapter/1jvzop8d7rrqq
  type: case_record
  subject: 韓信
  chart_signature: [紫府拱照, 左右加舍, 祿合科權, 出將入相]
  life_stage: 本命, 32歲, 小限, 大限
  conditions: [三十二歲, 小限在亥, 值傷忌, 太歲空劫, 任巳沖之, 大限羊陀沖照]
  claim: 出將入相之格成立，但傷忌、空劫與羊陀沖照重疊時仍屬強兇
  quote: 紫府拱照，左右加舍，祿合科權，出將入相之命。三十二歲，小限在亥，值傷忌，太歲空刼，任巳衝之，又大限羊陀衝照。
  outcome: 三十二歲見小限、太歲與大限重兇疊加
  notes: 由頁面 description 抽取，待後續與正文逐字校對
  tags: [案例, 韓信, 紫府, 左右, 科權祿, 傷忌, 空劫, 羊陀]
  conflict_group: null
  confidence: primary

- id: case.quanshu.v4.021
  layer: raw
  source:
    canon: 紫微鬥數全書
    section: 卷四
    chapter: 古今富貴貧賤夭壽命圖
    locator: 識典古籍 陸卷 / 趙高之命 / https://www.shidianguji.com/zh/book/SDZJ0170/chapter/1jvzop8d7s4du
  type: case_record
  subject: 趙高
  chart_signature: [祿合, 左右相會]
  life_stage: 本命, 大限
  conditions: [一生爵祿甚盛, 富貴雙全, 紫破辰戌不忠, 大限夾地遇陀羅]
  claim: 祿合與左右相會可主富貴，但紫破辰戌的不忠結構與夾地陀羅形成明顯兇險
  quote: 此爲祿合，左右相會，一生爵祿甚曹盈，富貴雙全應有分。紫破辰戌不忠，故有指鹿爲馬之事。大限夾地遇陀羅。
  outcome: 富貴可成，但大限夾地遇陀羅時見兇
  notes: 由頁面 description 抽取，待後續與正文逐字校對
  tags: [案例, 趙高, 祿合, 左右, 紫破辰戌, 夾地, 陀羅]
  conflict_group: null
  confidence: primary

- id: case.quanshu.v4.022
  layer: raw
  source:
    canon: 紫微鬥數全書
    section: 卷四
    chapter: 古今富貴貧賤夭壽命圖
    locator: 識典古籍 陸卷 / 李斯之命 / https://www.shidianguji.com/zh/book/SDZJ0170/chapter/1jvzop8d7sh0y
  type: case_record
  subject: 李斯
  chart_signature: [左右同宮, 日巳月酉並明, 權祿加會]
  life_stage: 本命, 太歲
  conditions: [富貴之命, 太歲喪門白虎沖命限]
  claim: 日月並明與權祿加會可主富貴，但喪門白虎沖命限時即轉兇
  quote: 左右同宮，日已月酉並明，權祿加會，爲富貴之命。太歲喪門、白虎衝命限，是以見兇。
  outcome: 太歲喪門白虎沖命限時見兇
  notes: 由頁面 description 抽取，待後續與正文逐字校對
  tags: [案例, 李斯, 左右同宮, 日月並明, 權祿, 喪門, 白虎, 太歲]
  conflict_group: null
  confidence: primary

- id: case.quanshu.v4.023
  layer: raw
  source:
    canon: 紫微鬥數全書
    section: 卷四
    chapter: 古今富貴貧賤夭壽命圖
    locator: 識典古籍 陸卷 / 曹參之命 / https://www.shidianguji.com/zh/book/SDZJ0170/chapter/1jvzop8d7sto2
  type: case_record
  subject: 曹參
  chart_signature: [紫微居午, 左右權祿, 子寅二宮加會]
  life_stage: 本命, 63歲, 太歲, 流年
  conditions: [無殺湊, 官資清貴至三公, 六十三歲, 太歲到天傷夾地, 流年羊刃照命, 酉人忌之]
  claim: 紫微午位與左右權祿可至三公，但天傷夾地與羊刃照命構成晚年重兇
  quote: 紫微居午，無殺湊左右權祿，子寅二宮加曾官資，清題至三公。六十三歲，太歲到天傷夾地，又流年羊刃照命，酉人忌之。
  outcome: 六十三歲見太歲與流年重兇疊加
  notes: 由頁面 description 抽取，待後續與正文逐字校對
  tags: [案例, 曹參, 紫微居午, 左右, 權祿, 天傷, 夾地, 羊刃, 太歲]
  conflict_group: null
  confidence: primary

- id: case.quanshu.v4.024
  layer: raw
  source:
    canon: 紫微鬥數全書
    section: 卷四
    chapter: 古今富貴貧賤夭壽命圖
    locator: 識典古籍 陸卷 / 酈生之命 / https://www.shidianguji.com/zh/book/SDZJ0170/chapter/1jvzop8d7t6b6
  type: case_record
  subject: 酈生
  chart_signature: [科權夾貴格]
  life_stage: 本命, 36歲, 太歲
  conditions: [美命, 空劫夾垣, 文昌不宜, 與貪狼廉貞同立, 奔波勞碌, 三十六, 太歲天傷]
  claim: 科權夾貴本為美命，但空劫夾垣與貪狼廉貞同立會把格局拉向奔波勞碌
  quote: 科權夾貴之格，本爲美命，只嫌空刼工夾垣，且文昌不宜，與貪狼、廉貞同立，生奔波勞碌。三十六，太歲天傷。
  outcome: 三十六歲逢太歲天傷，格局失色
  notes: 由頁面 description 抽取，待後續與正文逐字校對
  tags: [案例, 酈生, 科權夾貴, 空劫, 文昌, 貪狼, 廉貞, 天傷]
  conflict_group: null
  confidence: primary

- id: case.quanshu.v4.025
  layer: raw
  source:
    canon: 紫微鬥數全書
    section: 卷四
    chapter: 古今富貴貧賤夭壽命圖
    locator: 識典古籍 陸卷 / 慶忌之命 / https://www.shidianguji.com/zh/book/SDZJ0170/chapter/1jvzop8d7tiya
  type: case_record
  subject: 慶忌
  chart_signature: [馬頭帶箭]
  life_stage: 本命, 23歲, 大限, 小限
  conditions: [非夭折而刑傷, 早年限行吉地, 作事崢嶸, 手能捉飛鳥, 二十三歲, 大限到申值天空, 小限到寅遇地劫]
  claim: 馬頭帶箭型不是單純夭折，而是刑傷風險；早年可顯能，但到天空與地劫應期時見兇
  quote: 馬頭帶箭，非夭折而刑傷。早年限行吉地，作事崢嶸，手能捉飛鳥。二十三歲，大限到申，值天空，小限到寅，遇地刼。
  outcome: 二十三歲見天空與地劫兇應
  notes: 由頁面 description 抽取，待後續與正文逐字校對
  tags: [案例, 慶忌, 馬頭帶箭, 刑傷, 天空, 地劫]
  conflict_group: null
  confidence: primary

- id: case.quanshu.v4.026
  layer: raw
  source:
    canon: 紫微鬥數全書
    section: 卷四
    chapter: 古今富貴貧賤夭壽命圖
    locator: 識典古籍 陸卷 / 百里奚命 / https://www.shidianguji.com/zh/book/SDZJ0170/chapter/1jvzop8d7tvle
  type: case_record
  subject: 百里奚
  chart_signature: [巨日同宮, 祿合守照, 左右昌曲加會]
  life_stage: 本命, 35歲後, 大限
  conditions: [少年不順, 限步行羊鈴地劫虛絕之地, 三十五後方遂志, 大限入酉]
  claim: 祿合與巨日守照可成格，但少年先受羊鈴地劫與虛絕之地壓制，屬典型 delayed-success
  quote: 巨日同宮，祿合守照，左右昌曲加會，少年不順，因限步行羊、鈴、地刼、虛絶之地，卅五後方得遂志。大限入酉。
  outcome: 三十五後方遂志
  notes: 由頁面 description 抽取，待後續與正文逐字校對
  tags: [案例, 百里奚, 巨日同宮, 祿合, 左右, 昌曲, 羊鈴, 地劫, 虛絕, delayed_success]
  conflict_group: null
  confidence: primary

- id: case.quanshu.v4.027
  layer: raw
  source:
    canon: 紫微鬥數全書
    section: 卷四
    chapter: 古今富貴貧賤夭壽命圖
    locator: 識典古籍 陸卷 / 廉頗之命 / https://www.shidianguji.com/zh/book/SDZJ0170/chapter/1jvzop8d7u88i
  type: case_record
  subject: 廉頗
  chart_signature: [七殺朝鬥, 祿合權會, 文武材能]
  life_stage: 本命, 73歲, 大限, 太歲, 小限
  conditions: [富貴榮華, 七十三歲, 大限在天傷之地, 太歲伏牛, 在天空天使之地, 小限相沖]
  claim: 七殺朝鬥可主文武富貴，但到天傷、天空天使與小限相沖時屬強兇
  quote: 七殺朝鬥，富貴榮華，祿合權會，文武材能。七十三歲，大限在天傷之地，太歲伏牛，又在天空天使之地，小限相沖。
  outcome: 七十三歲見多層兇限疊加
  notes: 由頁面 description 抽取，待後續與正文逐字校對
  tags: [案例, 廉頗, 七殺朝鬥, 祿合權會, 天傷, 天空, 天使, 小限相沖]
  conflict_group: null
  confidence: primary

- id: case.quanshu.v4.028
  layer: raw
  source:
    canon: 紫微鬥數全書
    section: 卷四
    chapter: 古今富貴貧賤夭壽命圖
    locator: 識典古籍 陸卷 / 藺相如命 / https://www.shidianguji.com/zh/book/SDZJ0170/chapter/1jvzop8d7ukvm
  type: case_record
  subject: 藺相如
  chart_signature: [左右加會, 科祿紫府]
  life_stage: 本命, 大限, 69歲
  conditions: [終為吉, 一生名利得安康, 大限申宮, 子生人不宜寅申限, 六十九歲]
  claim: 左右加會與科祿紫府可主終身名利，但特定生人對寅申限仍有忌
  quote: 左右加會，終爲吉，科祿紫府最爲良。且兼限行美地，一生名利得安康。大限申宮，子生人不宜寅申限，六十九歲。
  outcome: 整體吉順，但寅申限對子生人有忌
  notes: 由頁面 description 抽取，待後續與正文逐字校對
  tags: [案例, 藺相如, 左右, 科祿, 紫府, 寅申限]
  conflict_group: null
  confidence: primary

- id: case.quanshu.v4.029
  layer: raw
  source:
    canon: 紫微鬥數全書
    section: 卷四
    chapter: 古今富貴貧賤夭壽命圖
    locator: 識典古籍 陸卷 / 劉伶之命 / https://www.shidianguji.com/zh/book/SDZJ0170/chapter/1jvzop8d7uxiq
  type: case_record
  subject: 劉伶
  chart_signature: [左右同垣, 坐貴向貴之局]
  life_stage: 本命, 32歲, 大限, 小限
  conditions: [生處帶空, 如半天折翅, 身宮怯劫, 並無正曜, 三十二歲, 大限行巳宮, 小限亦到巳]
  claim: 表面有坐貴向貴之局，但生處帶空與身宮怯劫、無正曜使其結構先天不足
  quote: 雖有左右同垣，坐貴向貴之局，生處帶空，猶如半天折趐。且身宮怯刼，並無正曜。卅二歲，大限行巳宮，小限亦到巳。
  outcome: 三十二歲見大限小限重疊應期
  notes: 由頁面 description 抽取，待後續與正文逐字校對
  tags: [案例, 劉伶, 左右同垣, 帶空, 怯劫, 無正曜, 結構缺失]
  conflict_group: null
  confidence: primary

- id: case.quanshu.v4.030
  layer: raw
  source:
    canon: 紫微鬥數全書
    section: 卷四
    chapter: 古今富貴貧賤夭壽命圖
    locator: 識典古籍 陸卷 / 韓通之命 / https://www.shidianguji.com/zh/book/SDZJ0170/chapter/1jvzop8d7va5u
  type: case_record
  subject: 韓通
  chart_signature: [七殺朝鬥, 紫府朝垣, 左右昌曲加會]
  life_stage: 本命, 八限, 太歲
  conditions: [富貴榮垂, 終身福厚, 尊居八佐, 八限到午謂之沉馬, 太歲地網戊年, 卯羊在午]
  claim: 七殺朝鬥與紫府朝垣可成富貴，但沉馬、地網與卯羊在午會形成明確的時限風險
  quote: 七殺朝鬥，富貴榮垂，紫府朝垣，終身福厚。左右昌曲加會，尊居八佐，八限到午，謂之沉馬。太歲地網戊年，卯羊在午。
  outcome: 八限到午與太歲地網時見兇險
  notes: 由頁面 description 抽取，待後續與正文逐字校對
  tags: [案例, 韓通, 七殺朝鬥, 紫府朝垣, 左右, 昌曲, 沉馬, 地網, 卯羊]
  conflict_group: null
  confidence: primary
