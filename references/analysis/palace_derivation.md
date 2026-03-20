# 宮位派生分析

## metadata
- topic: 宮位派生關係
- layer: analysis
- status: provisional
- purpose: 將十二宮的派生邏輯獨立成可分析結構

## basis
- [core.json](/Users/arsenelee/github/ziwei-astrology/ziwei-doushu/references/core.json)
- [palaces_detail.md](/Users/arsenelee/github/ziwei-astrology/ziwei-doushu/references/raw_corpus/quan_shu/vol2/palaces_detail.md)
- [core_theories.md](/Users/arsenelee/github/ziwei-astrology/ziwei-doushu/references/raw_corpus/quan_shu/vol1/core_theories.md)

## mappings
- palace: 命宮
  aliases: [樞紐, 先天, 我]
  role: 主體核心
  linked_axes: [身宮, 財帛宮, 官祿宮, 遷移宮]
  status: supported

- palace: 兄弟宮
  aliases: [合夥, 財之田, 成就]
  role: 關係協作與家內資源結構
  linked_axes: [田宅宮]
  supported_by:
    - 兄弟宮為田宅之財帛
  status: supported

- palace: 夫妻宮
  aliases: [配偶, 事業推手, 感情]
  role: 親密關係與事業牽引
  linked_axes: [官祿宮]
  supported_by:
    - 夫宮與事業宮相對：主事業受家庭影響大
  status: supported

- palace: 子女宮
  aliases: [晚輩, 合夥, 性, 創意]
  role: 後代、延續、創造性輸出
  linked_axes: [對宮, 三方四正]
  supported_by:
    - 凡看子女先看本宮星宿主有幾子
    - 次看對宮有沖刑否
    - 又看三方四正得南斗星多主生男，北斗星多主生女
  status: supported

- palace: 財帛宮
  aliases: [現金流, 賺錢觀, 求財]
  role: 資源流與變現能力
  linked_axes: [命宮, 官祿宮, 田宅宮]
  supported_by:
    - 財帛宮與命宮、官祿宮三方會照：為財源之根本
  status: supported

- palace: 疾厄宮
  aliases: [深層意識, 隱憂, 病竈]
  role: 疾病與隱性風險
  linked_axes: [命宮]
  supported_by:
    - 先看命宮星曜落陷加羊陀火鈴空劫化忌守照如何
    - 又看疾厄宮星曜善惡廟旺落陷如何斷之
  status: supported

- palace: 遷移宮
  aliases: [外緣, 社會形象, 出外]
  role: 外部世界與流動場域
  linked_axes: [命宮, 財帛宮, 官祿宮]
  supported_by:
    - 身宮入遷移宮：主一生驛馬重，出外多機會
  status: supported

- palace: 交友宮
  aliases: [流量, 羣眾, 部屬]
  role: 羣體網絡與部屬系統
  linked_axes: [奴僕宮]
  supported_by:
    - 卷二原文以奴僕宮論交友/部屬系統
  status: supported

- palace: 官祿宮
  aliases: [行為表現, 社會地位, 學業]
  role: 功名、職業、外顯成就
  linked_axes: [命宮, 財帛宮, 夫妻宮]
  supported_by:
    - 男命先觀官祿，官祿好，財帛好，則男命顯
  status: supported

- palace: 田宅宮
  aliases: [財庫, 家族, 實體產業]
  role: 資產、家宅、祖業
  linked_axes: [兄弟宮, 財帛宮]
  supported_by:
    - 天府職掌財帛田宅衣祿
    - 兄弟宮為田宅之財帛
  status: supported

- palace: 福德宮
  aliases: [精神享受, 因果, 抗壓]
  role: 內在福分與承壓結構
  linked_axes: [身宮]
  supported_by:
    - 身宮入福德宮：主重視精神享受，生活品質
    - 福德宮可作內在福分與抗壓結構觀察
  status: supported

- palace: 父母宮
  aliases: [上司, 文書, 法律, 官非]
  role: 上位者、制度與文書系統
  linked_axes: [命宮]
  supported_by:
    - 看父母刑剋需參照本宮星與羊陀火鈴空劫
    - 父母宮可延伸到上司、文書、制度壓力
  status: supported

## event_mappings
- palace: 子女宮
  derived_events: [生育多寡, 性別傾向, 刑剋, 招祀子]
  basis:
    - 先看本宮星宿主有幾子
    - 次看對宮沖刑
    - 南斗多主男，北斗多主女

- palace: 疾厄宮
  derived_events: [災少災多, 勞傷, 暗疾, 瘋疾, 心氣疾]
  basis:
    - 先看命宮陷落與煞忌守照
    - 再看疾厄宮星曜廟陷

- palace: 遷移宮
  derived_events: [出外貴人, 在外生財, 不安靜, 流蕩天涯]
  basis:
    - 紫微天府在遷移主通達
    - 加羊陀火鈴空劫在外不安

- palace: 交友宮
  derived_events: [得力部屬, 背主逃走, 奴僕成行, 欠力]
  basis:
    - 卷二以奴僕宮論交友/部屬
    - 加空劫與煞曜多背主逃走

- palace: 官祿宮
  derived_events: [封侯, 貴顯, 名利兩全, 平常]
  basis:
    - 紫微左右昌曲魁鉞主軒勝封侯
    - 太陽入廟主文武為良

- palace: 田宅宮
  derived_events: [祖業, 財庫, 富足, 退祖]
  basis:
    - 天府職掌田宅衣祿
    - 田宅為家產與祖業核心場域

- palace: 福德宮
  derived_events: [精神享受, 生活品質, 抗壓, 內在福分]
  basis:
    - 身宮入福德宮重精神享受

- palace: 父母宮
  derived_events: [刑剋, 庇蔭, 上司壓力, 文書制度]
  basis:
    - 父母宮可延伸上司與制度
    - 煞曜空劫多主刑傷與不周全

## hypotheses
- hypothesis_id: palace.derivation.001
  claim: 宮位派生不是附帶說法，而是紫微鬥數做跨宮推理的底層骨架
  basis:
    - 兄弟宮為田宅之財帛
    - 夫妻宮與事業宮相對
    - 財帛宮與命宮官祿宮三方會照
  status: inferred

- hypothesis_id: palace.derivation.002
  claim: 三方四正與宮位派生合起來，構成比單星更穩定的推理單元
  basis:
    - 看命首重三方四正
    - 財源之根本需看命財官
  status: inferred

## next_steps
- 對已補八宮繼續拆細條目
- 對每一宮建立 `派生關係 -> 對應事件` 映射
- 把派生關係接入格局與案例分析
