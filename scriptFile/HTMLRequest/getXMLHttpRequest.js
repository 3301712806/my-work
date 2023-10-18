function createHttpRequest(){
    //用这个函数创建http请求是为了让新老浏览器都能用
var xhttp;
if(window.XMLHttpRequest){
    xhttp = new XMLHttpRequest();
}else{
    xhttp= new ActiveXObject("Microsoft.XMLHTTP")
}
return xhttp;
}