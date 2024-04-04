var arr = new Array("zero", "one", "two");
arr["orange"] = "fruit";
arr["carrot"] = "vegetable";
var s = "";
var keys = Object.keys(arr);
var i = 0;
while (i < keys.length) {
    var key = keys[i];
    s += key + ": " + arr[key];
    s += "\n";
    i++;
}
console.log(s);
