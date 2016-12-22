ajax的核心技术xmlhttprequest对象
* 设置请求头 `setRequestHeader("Content-Type","text/html;charset=utf-8")  //用于设置头信息`
* 获取响应头 `getResponseHeader()/getAllResopnseHeader()`
* 获取响应状态  `status/statusText`
* 获取响应主体 `responseText/responseXML`
* 请求状态 `readyState`
   *  0,//UNSENT 请求未打开
    * 1,//OPENED 打开一个请求
    * 2,//HEADERS_RECEIVED 收到请求头信息
    * 3,//LOADING 接受主体信息
    * 4//DONE 响应完成
* 终止请求 `abort`
* 请求状态改变回调方法 onreadystatechange
* 修改响应头类型 overrideMimeType
* 发送主体信息 send(主体类型)
    * ArrayBuffer data
    * Blob data
    * String data
    * FormData data
