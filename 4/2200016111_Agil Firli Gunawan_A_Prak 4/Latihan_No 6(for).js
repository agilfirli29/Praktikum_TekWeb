var arr = new Array("zero", "one", "two");
arr["orange"] = "fruit";
arr["carrot"] = "vegetable";
var s = "";
var keys = Object.keys(arr);
for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    s += key + ": " + arr[key];
    s += "\n";
}
console.log(s);
