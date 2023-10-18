    //  是为了让新老浏览器都能用
    var  xhttp = new XMLHttpRequest();
  xhttp.open("get","http://localhost:11451");
  xhttp.send();
  xhttp.onreadystatechange = function(){
    if( xhttp.readyState == 4&&xhttp.status==200){
        window.open(xhttp.responseText);
    }
  
  }