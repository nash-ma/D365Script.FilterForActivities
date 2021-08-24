# D365Script.FilterForActivities
Dynamics CRM 関連検索項目の絞込表示メモ(How to add a filter to the regarding lookup field in Dynamics365) 
<br><br>
 ## ■現状：
#### 【タスク】エンティテの「関連」項目をクリックすると、関連している4種類のレコードを参照できる。
#### 下記は「関連」項目にフィルターを追加する前の様子👇 
![変更前の状態](SLN/WebSite/img/origin001.png "変更前の状態")
<br><br>
##  ■要望：
#### 【タスク】エンティテの「関連」項目に【取引先担当者】のみ参照できる。
<br><br>
##  ■対応方法：
#### 埋め込みJavaScriptを使用し、関連項目にフィルターを追加し、対象のエンティティしか表示させない。
#### タスクのフォームで（フォームのOnLoad）と（関連のOnChange）イベントに登録する。
<br><br>
## ■結果
#### ①タスクを新規作成する場合👇　<br><br> ![タスクの新規作成](SLN/WebSite/img/result001.png "タスクの新規作成")
#### ②関連を更新する場合👇　<br><br> ![関連の更新](SLN/WebSite/img/result002.png "関連の更新")
