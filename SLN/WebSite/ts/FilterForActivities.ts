/// <reference path="../lib\@types\xrm\index.d.ts" />


namespace D365Script {
    /**
     * ”関連”の参照先を「取引先」に限定する
     * @param executionContext 実行コンテキスト
     */
    export function FilterForActivities(executionContext) {
        // フォームコンテキストの取得

        // ”関連”のコントロールの取得

        // プレーサーチメソッドの追加

        // ドロップダウンリストのアイテムタイプが複数かをチェック

        /*
        ※実際の業務内容により、エンティティタイプを入替
        */
        // 例：複数ある場合は参照先のエンティティタイプを「取引先担当者」に限定する

    }

    /**
     * プレーサーチメソッド(サーチボタンが押下される直前に起動)
     * @param executionContext 実行コンテキスト
     */
    export function FilterContact(executionContext) {

        // フォームコンテキストの取得

        // ”関連”の取得

        // ”関連”フィールドの値の取得

        // ”関連”の参照先GUIDの取得

        // フィルターの設定

        // ”関連”に「取引先担当者」参照のみフィルターを追加する

    }
}