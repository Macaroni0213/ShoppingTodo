// TODO これはまだ未実装です。使わないでください。

export class GetAddressApi {
    constructor(){
        // do nothing
    }

    getAddress = () => {
        // 東京駅の緯度経度
        var requestAjax=function(endpoint, callback){
            var xhr=new XMLHttpRequest();
            xhr.onreadystatechange=function(){
                if(this.readyState==4&&this.status==200){
                    callback(this.response);
                }
            };
            xhr.responseType='json';
            xhr.open('GET',endpoint,true);
            xhr.send();
        };
    
        // 東京駅の緯度経度
        var latitude='35.6811673';
        var longitude='139.7648629';
        // ※APIキーは取り扱い注意!!
        var apiKey='';
        var requestURL='https://maps.googleapis.com/maps/api/geocode/json?language=ja&sensor=false';
        requestURL+='&latlng=' + latitude + ',' + longitude;
        requestURL+='&key=' + apiKey;
        console.log("★★★★★★★★★");
        console.log("URL");
        console.log(requestURL);
        requestAjax(requestURL,function(response){
            if(response.error_message){
                console.log(response.error_message);
            }
            else{
                var formattedAddress=response.results[0]['formatted_address'];
                var data=formattedAddress.split(' ');
                console.log('data');
                console.log(data);
                if(data[1]){
                    // // id=addressに住所を設定する
                    // document.getElementById('address').innerHTML=data[1];
                }
            }
        });
    }
}
