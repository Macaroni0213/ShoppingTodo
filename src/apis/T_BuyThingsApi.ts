import firebase from "../db/firebase";
import { Type_T_BuyThings, T_BuyThings  } from "../models/T_BuyThings";

const COLLECTION_NAME = "T_BuyThings";

/**
 * コレクション「T_BuyThings」へのCRUD処理を担うクラス
 */
export class T_BuyThingsApi {
    /**
     * 定数
     */
    COLLECTION_NAME = "T_BuyThings";

    /**
     * データ登録
     * @param insertData 
     */
    insert = (insertData : Type_T_BuyThings) => {
      console.log("データ登録開始");
      // インスタンス生成
      const db = firebase.firestore();

      // データ登録
      db.collection(this.COLLECTION_NAME).add(insertData)
      .then((doc) =>{
        // データ登録成功時
        console.log("データ登録完了");
      })
      .catch(error => {
        // データ登録失敗時
        console.log("データ登録異常終了");
        console.error(error);
      });
    }
}
  /**
   * 全データ取得
   */
export async function getAll() {
    console.log("データ取得開始");
    // インスタンス生成
    const db = firebase.firestore();

    // データ取得成功時
    let resultArray: Type_T_BuyThings[] = [];

    // データ取得
    await db.collection(COLLECTION_NAME).get()
    .then((query) => {
      query.forEach((doc) => {
        const data = doc.data();
        console.log("data");
        console.log(data);
        // jsで処理し易い形にデータを置換して格納
        resultArray.push(T_BuyThings(data));
      });
      console.log("返される値");
      console.log(resultArray);
      console.log("データ取得終了");
    })
    .catch(error => {
      // データ取得失敗時
      console.log("データ取得異常終了");
      console.error(error);
    });
    return resultArray;
  }
