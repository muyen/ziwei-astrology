# 負向機制分析

## metadata
- topic: 負向機制模板
- layer: analysis
- status: provisional
- purpose: 把兇格拆成可重用的負向結構機制

## mechanisms
- mechanism_id: neg.break_wealth_flow
  name: 資源流動阻斷
  linked_formations: [formation.ludaomadao]
  evidence:
    raw: [formation.ludaomadao.001, formation.lumajiaochi.001, formation.lumajiaochi.002, formation.maluokongwang.001]
    lyric: [lyric.taiwei.004]
    stars: [star.lucun.001, star.lucun.003, star.tianma.001, star.tianma.002, star.kongjie.001]
    theory: [quanshu.v3.tanxing.001]
    cases: [case.quanshu.v4.005, case.quanshu.v4.008, case.quanshu.v4.009]
  structure:
    source: 祿存
    carrier: 天馬
    disruptors: [空亡, 天空, 截空, 空劫]
  claim: 原本能流動的祿與馬，被空亡或阻斷機制切斷後，轉為破財、奔波、失序
  confidence: high
  open_questions:
    - 截空已由卷三 raw 補到，但仍需確認它與現代所稱截路是否完全同義
    - 仍缺更純的 case support，目前 strengthening 主要來自新增 direct raw

- mechanism_id: neg.malefic_convergence
  name: 煞曜收斂
  linked_formations: [formation.juhuoyang, formation.lingchangtuowu]
  evidence:
    raw: [formation.juhuoyang.001, formation.lingchangtuowu.001]
    stars: [star.huoxing.002, star.qingyang.001, star.qingyang.002, star.lingxing.002, star.tuoluo.001]
  structure:
    source: 煞曜羣
    effect: [是非, 官非, 意外, 殘傷, 財崩]
  claim: 多顆煞曜或煞曜與財曜/文曜收斂時，會把負向風險從性格擴大到事件層
  confidence: medium_high
  open_questions:
    - 仍缺更多交會與入宮條目

- mechanism_id: neg.limit_collision
  name: 限運重疊撞擊
  linked_formations: []
  evidence:
    theory: [quanshu.v3.dayun.002, quanshu.v3.dayun.003, quanshu.v3.taisui.002, quanshu.v3.taisui.003, quanshu.v3.yangtuo.001, quanshu.v3.qisha.001]
    cases: [case.quanshu.v4.001, case.quanshu.v4.003, case.quanshu.v4.004, case.quanshu.v4.006, case.quanshu.v4.007, case.quanshu.v4.008, case.quanshu.v4.009, case.quanshu.v4.010, case.quanshu.v4.023, case.quanshu.v4.027, case.quanshu.v4.030]
  structure:
    base_state: [本命入格, 富貴格, 吉曜聚會]
    trigger_layers: [大限, 小限, 太歲]
    amplifiers: [天傷, 天使, 天羅, 地網, 喪門, 天哭, 白虎, 羊陀, 流羊, 流陀, 化忌]
    outcome: [早亡, 破敗, 官災, 名格失效]
    canonical_families:
      trigger_stack: [limit_layers]
      amplifier_families: [trap_spaces, injury_env, mourning_signals, blade_malefics, void_blockers]
    branches:
      - branch_id: neg.limit_collision.fatal
        branch_type: fatal
        profile: 多層限運重疊，且伴隨天傷/天使/天羅地網/喪門白虎等強兇放大器
        representative_cases: [case.quanshu.v4.001, case.quanshu.v4.009, case.quanshu.v4.019, case.quanshu.v4.020, case.quanshu.v4.023]
      - branch_id: neg.limit_collision.nonfatal
        branch_type: nonfatal
        profile: 有兇觸發，但目前只見受阻、刑傷、名格受損，未直接落到夭亡
        representative_cases: [case.quanshu.v4.025, case.quanshu.v4.028]
      - branch_id: neg.limit_collision.delayed_success
        branch_type: delayed_success
        profile: 早期受限步與兇曜壓制，後期才發達，屬先抑後揚
        representative_cases: [case.quanshu.v4.013, case.quanshu.v4.026]
      - branch_id: neg.limit_collision.structural_deficit
        branch_type: structural_deficit
        profile: 主體先天缺位，如無正曜、帶空、怯劫；不是高格翻盤，而是本底不足
        representative_cases: [case.quanshu.v4.029]
  claim: 古例顯示本命高格並不保證終局平順；當大限、小限、太歲與天羅地網或喪門哭虎等兇曜重疊時，會把原本的富貴格直接撞成死亡或破敗事件
  confidence: high
  open_questions:
    - 尚需更多非死亡案例，校對 fatal 與 nonfatal 的邊界
    - `structural_deficit` 是否應獨立出 `neg.limit_collision`，仍待更多 case 驗證
