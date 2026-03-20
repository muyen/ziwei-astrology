# 格局量化評分

## metadata
- topic: 格局量化評分
- layer: analysis
- status: provisional
- method: symbolic_scoring

## formula

```text
FormationScore(F) =
  w_raw   * RawSupport(F) +
  w_cross * CrossTextEcho(F) +
  w_struct* StructuralClosure(F) +
  w_star  * StarDutyFit(F) +
  w_pos   * PositionalPrivilege(F) +
  w_mem   * MnemonicCompression(F) -
  w_hyp   * HyperboleRisk(F)
```

## scoring_weights
- w_raw: 0.25
- w_cross: 0.15
- w_struct: 0.20
- w_star: 0.20
- w_pos: 0.10
- w_mem: 0.05
- w_hyp: 0.05

## score_definitions
- metric: RawSupport
  scale:
    - score: 1.00
      condition: 有 formation raw 且有平行賦文呼應
    - score: 0.70
      condition: 只有 formation raw
    - score: 0.40
      condition: 只有賦文呼應或片段支持
    - score: 0.00
      condition: 無資料

- metric: CrossTextEcho
  scale:
    - score: 1.00
      condition: formation 與 lyric 雙重出現且語義一致
    - score: 0.60
      condition: 有部分平行文本回聲
    - score: 0.20
      condition: 僅單一路徑可見
    - score: 0.00
      condition: 無回聲

- metric: StructuralClosure
  scale:
    - score: 1.00
      condition: 明確同宮、三方四正、星羣會齊或收斂完成
    - score: 0.60
      condition: 有部分結構條件，但不完整
    - score: 0.20
      condition: 幾乎是單句描述
    - score: 0.00
      condition: 無法辨識結構

- metric: StarDutyFit
  scale:
    - score: 1.00
      condition: 結果與星曜職司高度一致
    - score: 0.60
      condition: 部分一致，但缺部分星性資料
    - score: 0.20
      condition: 支撐薄弱
    - score: 0.00
      condition: 無法解釋

- metric: PositionalPrivilege
  scale:
    - score: 1.00
      condition: 明確依賴特定強位、得地、坐命
    - score: 0.50
      condition: 有位置條件，但理據未充分展開
    - score: 0.00
      condition: 與位點無關

- metric: MnemonicCompression
  scale:
    - score: 1.00
      condition: 格名與條件高度壓縮對應，明顯具口訣性
    - score: 0.50
      condition: 有部分口訣特徵
    - score: 0.00
      condition: 無明顯壓縮特徵

- metric: HyperboleRisk
  scale:
    - score: 1.00
      condition: 高度依賴誇飾語，降低可解釋性
    - score: 0.50
      condition: 有誇飾但仍可抽取核心命題
    - score: 0.00
      condition: 幾乎無誇飾風險

## family_space

```text
Family(F) ∈ {
  富貴權位,
  功名公職,
  財福穩定,
  破敗奔波,
  是非刑險,
  結構缺失
}
```

## reverse_engineering_hypothesis

```text
Formation ≈
  f(
    主星職司,
    輔曜或煞曜收斂,
    三方四正結構完整度,
    特定位點得地,
    吉凶轉化規則,
    口訣記憶性
  )
```

## notes
- 現階段不直接用黑箱模型。
- 等卷四案例庫進來後，再提高案例權重。
- 缺少太陰、天府、文昌、祿存、火星、擎羊、鈴星、陀羅、天馬等原始星性時，`StarDutyFit` 需保守評分。
