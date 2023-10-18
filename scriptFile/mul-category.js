 function createList(arr){
var ul =  document.createElement("ul"),
categoryLen = arr.length,
i = 0;
if(categoryLen<=0){
    return;
}
if(categoryLen>12){
    categoryLen = 12;
}
for( i=0;i < categoryLen;i++){
    var li = document.createElement("li"),
    a = document.createElement("a")
    a.innerText = arr[i]
    a.href = "#"
    a.id = "button"+i
    a.className = "mechine-category-button"
    li.className = "mechine-category-button"
    li.appendChild(a)
    ul.appendChild(li)
    
}
document.getElementById("mechine-category").appendChild(ul)
 }

 var l = [12,2,3]
 createList(l)