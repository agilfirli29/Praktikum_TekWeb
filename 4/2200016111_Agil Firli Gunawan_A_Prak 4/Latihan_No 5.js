var arr = new Array("zero","one","two");  
arr["orange"] = "fruit";  
arr["carrot"] = "vegetable";  
var s = "";  
for (var key in arr) {  
    s += key + ": " + arr[key];  
    s += "\n";  
}
console.log(s);