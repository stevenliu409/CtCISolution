function groupAnagrams(strArr) {
    var strings = [];
    for(var i = 0; i < strArr.length; i++) {
        var temp = strArr[i].split("");
        temp.sort();
        strings.push(temp.join(""));
    }
    return strings.sort();
}
