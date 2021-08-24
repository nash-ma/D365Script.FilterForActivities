/// <reference path="../lib\@types\xrm\index.d.ts" />
var D365Script;
(function (D365Script) {
    // 定数：「関連」項目のロジック名
    var ACCOUNT_COL_KANREN = "regardingobjectid";
    // 定数：「取引先担当者」テーブルのロジック名
    var TBL_CONTACT_STR = "contact";
    var TBL_CONTACT_CHAR = 'contact';
    /**
     * ”関連”の参照先を「取引先」に限定する
     * @param executionContext 実行コンテキスト
     */
    function FilterForActivities(executionContext) {
        // フォームコンテキストの取得
        var formContext = executionContext.getFormContext();
        // ”関連”のコントロールの取得
        var regardingObjectControl = formContext.getControl(ACCOUNT_COL_KANREN);
        // プレーサーチメソッドの追加
        regardingObjectControl.addPreSearch(FilterContact);
        // ドロップダウンリストのアイテムタイプが複数かをチェック
        if (regardingObjectControl.getEntityTypes().length >= 1) {
            /*
            ※実際の業務内容により、エンティティタイプを入替
            */
            // 例：複数ある場合は参照先のエンティティタイプを「取引先担当者」に限定する
            regardingObjectControl.setEntityTypes([TBL_CONTACT_CHAR]);
        }
    }
    D365Script.FilterForActivities = FilterForActivities;
    /**
     * プレーサーチメソッド(サーチボタンが押下される直前に起動)
     * @param executionContext 実行コンテキスト
     */
    function FilterContact(executionContext) {
        // フォームコンテキストの取得
        var formContext = executionContext.getFormContext();
        // ”関連”の取得
        var regardingObjectValue = formContext.getAttribute(ACCOUNT_COL_KANREN).getValue();
        // ”関連”フィールドの値の取得
        if (regardingObjectValue != null) {
            // ”関連”の参照先GUIDの取得
            var regardingID = regardingObjectValue[0].id;
            // フィルターの設定
            var filterCondition = "<filter type='and'>" + "<condition attribute='parentcustomerid' operator='eq' value='" + regardingID + "' />" + "</filter>";
            // ”関連”に「取引先担当者」参照のみフィルターを追加する
            formContext.getControl(ACCOUNT_COL_KANREN).addCustomFilter(filterCondition, TBL_CONTACT_STR);
        }
    }
    D365Script.FilterContact = FilterContact;
})(D365Script || (D365Script = {}));
//# sourceMappingURL=FilterForActivities.js.map