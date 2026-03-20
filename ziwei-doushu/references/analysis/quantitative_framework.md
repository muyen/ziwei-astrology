# 紫微鬥數量化分析框架

## metadata
- topic: 量化與逆向分析框架
- layer: analysis
- status: active
- purpose: 將古籍規則轉成可比較、可評分、可蒸餾的結構

## 目標

我們不把紫微鬥數當成純玄學黑箱，而是拆成可分析的三層：

1. `文本層`: 書上到底寫了什麼。
2. `結構層`: 規則之間如何組成系統。
3. `生成層`: 為什麼這些規則會這樣分配。

## 最佳做法

最佳做法不是直接做複雜機器學習，而是先做 `symbolic + scoring`。

原因：

- 目前 raw corpus 還小，不適合直接做統計建模。
- 古籍規則高度符號化，先做結構評分比黑箱模型更可靠。
- 後續等案例庫變多，再疊加統計權重。

## 基本數學表示

把一條規則表示為：

```text
R = (S, P, T, C, O)
```

其中：

- `S`: 星曜集合
- `P`: 宮位集合
- `T`: 四化或動態變換
- `C`: 條件集合
- `O`: 結果語義

例：

```text
陽梁昌祿 = (
  S = {太陽, 天梁, 文昌},
  P = {命, 財, 官, 遷} 或三方四正,
  T = {祿},
  C = {會齊},
  O = {功名, 顯達}
)
```

## 衝突版本表示

對同一衝突羣組：

```text
G = {V1, V2, V3, ...}
```

每個版本 `Vi` 再評分：

```text
Score(Vi) =
  w_raw * RawEvidence(Vi) +
  w_logic * LogicFit(Vi) +
  w_sym * SymmetryFit(Vi) +
  w_cross * CrossTextSupport(Vi) +
  w_case * CaseSupport(Vi) -
  w_risk * ScribalRisk(Vi)
```

## 推薦權重

在 raw corpus 仍不完整時，先用這組：

```text
w_raw   = 0.40
w_logic = 0.20
w_sym   = 0.10
w_cross = 0.15
w_case  = 0.10
w_risk  = 0.05
```

原因：

- 現階段最重要的是 primary raw。
- 邏輯與跨書支撐次之。
- 案例庫還不夠，因此 `w_case` 暫時不能太高。

## 各分數定義

### `RawEvidence(V)`

```text
1.00 = 有直接 primary raw 記錄
0.70 = 有同書 compare 記錄但未見 raw
0.50 = 有他書 compare 支撐
0.20 = 只有後設流派摘要
0.00 = 無資料
```

### `LogicFit(V)`

```text
LogicFit(V) = average(FiveElementFit, StarDutyFit, PalaceDerivationFit, TransformationFit)
```

每項範圍 `0.0 - 1.0`

- `FiveElementFit`: 是否符合五行生剋與性質流向
- `StarDutyFit`: 是否符合星曜職司
- `PalaceDerivationFit`: 是否符合宮位派生邏輯
- `TransformationFit`: 是否符合祿權科忌功能語義

### `SymmetryFit(V)`

```text
1.00 = 與其他幹或成對星形成明顯對稱
0.50 = 無明顯對稱也無明顯破壞
0.00 = 明顯破壞整體分配模式
```

### `CrossTextSupport(V)`

```text
1.00 = 多本原始書一致
0.70 = 多本 compare 一致
0.40 = 僅單一路徑支持
0.00 = 無其他來源支持
```

### `CaseSupport(V)`

```text
1.00 = 案例庫明確支持
0.50 = 案例間接支持
0.00 = 尚無案例
```

### `ScribalRisk(V)`

```text
1.00 = 高度可能為傳抄或對偶誤置
0.50 = 有一定抄傳風險
0.00 = 不像傳抄問題
```

## 語義向量化

每顆星、每宮、每四化都可以表成語義向量。

例：

```text
太陽 = [外顯, 官祿, 散發, 陽, 火]
武曲 = [財帛, 剛決, 執行, 陰, 金]
科   = [名聲, 貴人, 條理, 文]
忌   = [阻滯, 執著, 債, 反噬]
```

之後可做：

```text
Fit(星, 四化) = cosine_similarity(Vector(星), Vector(四化目標語義))
```

這不是最終真理，但能讓「為何太陽祿比太陰忌更順」這類判斷更可量化。

## 逆向工程的核心假說

我們嘗試反推古人的生成規則：

```text
BookRule ≈ f(星曜職司, 五行, 宮位派生, 口訣記憶性, 案例修正)
```

也就是說，書上的句子不是隨機發明，而是某個生成函數的輸出。

我們要做的是逼近這個 `f`。

## 近期最適合量化的題目

1. 十干四化衝突
2. 格局成格條件
3. 三方四正的結果映射
4. 星曜與吉凶語義的共現統計

## 暫不建議的做法

- 太早做深度學習黑箱分類
- 在 raw corpus 很少時就做高信心概率結論
- 沒有 case data 就宣稱「這套一定有效」

## 輸出規範

每次分析至少輸出：

```yaml
- target: 分析對象
  method: symbolic_scoring
  formula: 使用的公式
  evidence: [引用記錄]
  provisional_score: 0.00-1.00
  confidence: low | medium | medium_high | high
  explanation: 為何得分如此
  open_questions: [尚未解決]
```
