# 案例來源追蹤

## metadata
- topic: 卷四/陸卷案例來源追蹤
- layer: analysis
- status: active
- purpose: 持續收集《古今富貴貧賤夭壽命圖》可用來源與版本對應

## edition_mapping
- source_name: 現倉庫工作說法
  case_section_label: 卷四
  status: working_label
  notes: 目前倉庫沿用此標記作為資料夾命名

- source_name: 現代校訂本/通行目錄
  case_section_label: 卷四
  status: observed
  notes: 現代通行版與多個書店目錄均將古今富貴貧賤夭壽命圖列為卷四
  url: https://www.eslite.com/product/10072302132682749835006

- source_name: 識典古籍《新鋟希夷陳先生紫微鬥數全書》
  case_section_label: 陸卷
  status: observed
  notes: 目錄明確將古今富貴貧賤夭壽命圖列在陸卷
  url: https://www.shidianguji.com/zh/book/SDZJ0170/chapter/1l8c31cc86psj

## acquisition_status
- id: case.source.001
  source_name: 識典古籍
  access_type: full_text_confirmed
  content_depth: 已確認卷五正文可直讀，陸卷案例正文也已定位並可逐頁翻讀
  usefulness: high
  blocker: 尚未完整抓取全卷案例序列與總數
  next_action: 持續逐頁收錄 case_record，並補非儒門人物與富貴/貧賤/夭壽不同類型

- id: case.source.002
  source_name: 現代校訂本目錄
  access_type: catalog_visible
  content_depth: 已確認卷四標記
  usefulness: medium_high
  blocker: 僅能確認目錄，未提供免費正文
  next_action: 作為卷次對照與案例總數追蹤參考

- id: case.source.003
  source_name: 維基文庫
  access_type: partial
  content_depth: 已可用於卷三與部分全覽檢索，可作為卷五內容校對
  usefulness: medium
  blocker: 尚未找到案例卷正文
  next_action: 持續作為卷三與格局口訣的交叉校對來源

- id: case.source.004
  source_name: 識典古籍命圖首頁
  access_type: full_text_confirmed
  content_depth: 已定位「命圖 / 孔仲尼命」並可逐頁進入下一案例
  usefulness: very_high
  blocker: 需要人工持續翻頁與結構化寫入
  next_action: 沿著下一篇鏈持續收錄案例
  url: https://www.shidianguji.com/zh/book/SDZJ0170/chapter/1jvzop88fgrvp

## ingestion_readiness
- task: 建立案例來源對照表
  status: done

- task: 確認卷次差異
  status: done

- task: 確認現代通行卷次
  status: done

- task: 找到可讀正文
  status: done

- task: 開始逐案寫入 case_record
  status: in_progress

## confirmed_accessible_text
- source_name: 識典古籍
  confirmed_scope: 已確認卷五與陸卷案例正文可在線閱讀，且命圖可逐頁翻讀
  implication: 案例庫不再是 acquisition 問題，而是持續 ingest 與校對問題

- source_name: 識典古籍 / 命圖
  confirmed_scope: 已收錄命圖前 30 案，包含孔仲尼至韓通
  implication: 已可啟動 case_validation，回驗兇限、羊陀迭併、七殺重逢與天羅地網模型

## direct_case_urls
- case_name: 孔仲尼命
  url: https://www.shidianguji.com/zh/book/SDZJ0170/chapter/1jvzop88fh4it
  status: ingested

- case_name: 子路之命
  url: https://www.shidianguji.com/zh/book/SDZJ0170/chapter/1jvzop88fhh5x
  status: ingested

- case_name: 顔亞聖命
  url: https://www.shidianguji.com/zh/book/SDZJ0170/chapter/1jvzop88fhtt1
  status: ingested

- case_name: 孟軻之命
  url: https://www.shidianguji.com/zh/book/SDZJ0170/chapter/1jvzop88fi6g5
  status: ingested

- case_name: 端木賜命
  url: https://www.shidianguji.com/zh/book/SDZJ0170/chapter/1jvzop88fij39
  status: ingested

- case_name: 子羔之命
  url: https://www.shidianguji.com/zh/book/SDZJ0170/chapter/1jvzop88fivqd
  status: ingested

- case_name: 冉求之命
  url: https://www.shidianguji.com/zh/book/SDZJ0170/chapter/1jvzop88fj8dh
  status: ingested

- case_name: 子産之命
  url: https://www.shidianguji.com/zh/book/SDZJ0170/chapter/1jvzop88fjl0l
  status: ingested

- case_name: 蘇丞相命
  url: https://www.shidianguji.com/zh/book/SDZJ0170/chapter/1jvzop88fjxnp
  status: ingested

- case_name: 晏平仲命
  url: https://www.shidianguji.com/zh/book/SDZJ0170/chapter/1jvzop88fkaat
  status: ingested

- case_name: 孫臏之命
  url: https://www.shidianguji.com/zh/book/SDZJ0170/chapter/1jvzop8d7olyq
  status: ingested

- case_name: 龐涓之命
  url: https://www.shidianguji.com/zh/book/SDZJ0170/chapter/1jvzop8d7oylu
  status: ingested

- case_name: 伍明輔命
  url: https://www.shidianguji.com/zh/book/SDZJ0170/chapter/1jvzop8d7pb8y
  status: ingested

- case_name: 蕭何之命
  url: https://www.shidianguji.com/zh/book/SDZJ0170/chapter/1jvzop8d7pnw2
  status: ingested

- case_name: 陳平之命
  url: https://www.shidianguji.com/zh/book/SDZJ0170/chapter/1jvzop8d7q0j6
  status: ingested

- case_name: 耿弇之命
  url: https://www.shidianguji.com/zh/book/SDZJ0170/chapter/1jvzop8d7qd6a
  status: ingested

- case_name: 蒯文通命
  url: https://www.shidianguji.com/zh/book/SDZJ0170/chapter/1jvzop8d7qpte
  status: ingested

- case_name: 項羽之命
  url: https://www.shidianguji.com/zh/book/SDZJ0170/chapter/1jvzop8d7r2gi
  status: ingested

- case_name: 張子房命
  url: https://www.shidianguji.com/zh/book/SDZJ0170/chapter/1jvzop8d7rf3m
  status: ingested

- case_name: 韓信之命
  url: https://www.shidianguji.com/zh/book/SDZJ0170/chapter/1jvzop8d7rrqq
  status: ingested

## continued_case_urls
- case_name: 趙高之命
  url: https://www.shidianguji.com/zh/book/SDZJ0170/chapter/1jvzop8d7s4du
  status: ingested

- case_name: 李斯之命
  url: https://www.shidianguji.com/zh/book/SDZJ0170/chapter/1jvzop8d7sh0y
  status: ingested

- case_name: 曹參之命
  url: https://www.shidianguji.com/zh/book/SDZJ0170/chapter/1jvzop8d7sto2
  status: ingested

- case_name: 酈生之命
  url: https://www.shidianguji.com/zh/book/SDZJ0170/chapter/1jvzop8d7t6b6
  status: ingested

- case_name: 慶忌之命
  url: https://www.shidianguji.com/zh/book/SDZJ0170/chapter/1jvzop8d7tiya
  status: ingested

- case_name: 百里奚命
  url: https://www.shidianguji.com/zh/book/SDZJ0170/chapter/1jvzop8d7tvle
  status: ingested

- case_name: 廉頗之命
  url: https://www.shidianguji.com/zh/book/SDZJ0170/chapter/1jvzop8d7u88i
  status: ingested

- case_name: 藺相如命
  url: https://www.shidianguji.com/zh/book/SDZJ0170/chapter/1jvzop8d7ukvm
  status: ingested

- case_name: 劉伶之命
  url: https://www.shidianguji.com/zh/book/SDZJ0170/chapter/1jvzop8d7uxiq
  status: ingested

- case_name: 韓通之命
  url: https://www.shidianguji.com/zh/book/SDZJ0170/chapter/1jvzop8d7va5u
  status: ingested

## next_known_case_urls
- case_name: 宋璟之命
  url: https://www.shidianguji.com/zh/book/SDZJ0170/chapter/1jvzop8fn322b
  status: queued

- case_name: 賈誼之命
  url: https://www.shidianguji.com/zh/book/SDZJ0170/chapter/1jvzop8fn3epf
  status: queued

- case_name: 馬周之命
  url: https://www.shidianguji.com/zh/book/SDZJ0170/chapter/1jvzop8fn3rcj
  status: queued

- case_name: 傳毅之命
  url: https://www.shidianguji.com/zh/book/SDZJ0170/chapter/1jvzop8fn43zn
  status: queued

- case_name: 魏豹之命
  url: https://www.shidianguji.com/zh/book/SDZJ0170/chapter/1jvzop8fn4gmr
  status: queued

- case_name: 劉都衙命
  url: https://www.shidianguji.com/zh/book/SDZJ0170/chapter/1jvzop8fn4t9v
  status: queued

- case_name: 姜恆之命
  url: https://www.shidianguji.com/zh/book/SDZJ0170/chapter/1jvzop8fn55wz
  status: queued

- case_name: 周勃之命
  url: https://www.shidianguji.com/zh/book/SDZJ0170/chapter/1jvzop8fn5ik3
  status: queued

- case_name: 樂穀之命
  url: https://www.shidianguji.com/zh/book/SDZJ0170/chapter/1jvzop8fn5v77
  status: queued

- case_name: 趙奢之命
  url: https://www.shidianguji.com/zh/book/SDZJ0170/chapter/1jvzop8fn67ub
  status: queued
