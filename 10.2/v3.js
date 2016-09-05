function sortString(a) {
    var charArr = a.split('');
    charArr.sort();
    return charArr.join('');
}

function groupAnagrams(strArr) {
    var dict = {};
    for (var i = 0; i < strArr.length; i++) {
        var key = sortString(strArr[i]);
        var arr = [];
        if(dict[key] != null) {
            arr = dict[key];
        }
        arr.push(strArr[i]);
        dict[key] = arr;
    };

    var keys = Object.keys(dict);
    var result = [];
    for (var i = 0; i < keys.length; i++) {
        result = result.concat(dict[keys[i]]);
    };
    return result;
}


//Leet code solution
function groupAnagrams(strArr) {
    var dict = {};
    for (var i = 0; i < strArr.length; i++) {
        var key = sortString(strArr[i]);
        var arr = [];
        if(dict[key] != null) {
            arr = dict[key];
        }
        arr.push(strArr[i]);
        dict[key] = arr;
    };

    var keys = Object.keys(dict);
    var result = [];
    for (var i = 0; i < keys.length; i++) {
        result.push(dict[keys[i]].sort());
    };
    return result;
}


