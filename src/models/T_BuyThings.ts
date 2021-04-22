import firebase from "../db/firebase";

export interface BuyThing {
    /** 買うものの名前 */
    nameBuyThing: string;
    /** 買う数 */
    countBuyThing: number;
}

interface GeoPoint {
    /** 緯度 */
    latitude: number;
    /** 経度 */
    longitude: number;
}

export interface Type_T_BuyThings {
    /** 買い物をする日付 */
    dateShopping: Date;
    /** 買い物する場所 */
    placeShopping?: string;
    /** 買い物する場所の緯度経度 */
    geoShopping?: GeoPoint;
    /** 買うものリスト */
    buyThings: Array<BuyThing>
}

/**
 * Firestoreから取得したデータをjsで扱いやすい形に置換
 * @param org 
 * @returns 
 */
export const T_BuyThings = (org: firebase.firestore.DocumentData) : Type_T_BuyThings => {
    const returnData: Type_T_BuyThings = {
        dateShopping: org.dateShopping.toDate(),
        buyThings: org.buyThings
    };
    if (org.placeShopping !== null
        && org.placeShopping !== undefined) {
        returnData.placeShopping = org.placeShopping;
    }
    if (org.geoShopping !== null
        && org.geoShopping !== undefined) {
        returnData.geoShopping = org.geoShopping;
    }
    return returnData;
}