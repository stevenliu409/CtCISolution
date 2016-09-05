// runtime O(n)
function isAnagram(a,b) {
    var dict = {};

    if(a.length != b.length) return false;
    if(a==b) return true;

    for (var i = 0; i < a.length; i++) {
        if(dict[a[i]] != null) {
            var count = dict[a[i]];
            count++;
            dict[a[i]] = count;
        }
        else {
            dict[a[i]] = 1;
        }
    }

    for (var j = 0; j < b.length; j++) {
        if(dict[b[j]] == null) {
            return false;
        }
        else {
            var count = dict[b[j]];
            count--;
            dict[b[j]] = count;
        }
    }

    for (var k = 0; k < a.length; k++) {
        if(dict[a[k]] != 0) {
            return false;
        }
    }

    return true;
}
// runtime O(n^3)
function groupAnagram(strArr) {
    var result = [];
    while(strArr.length > 0) { //O(n)
        var str = strArr.shift();
        result.push(str);
        for (var i = 0; i < strArr.length; i++) { //O(n)
            if(isAnagram(str,strArr[i])){ //O(n)
                result.push(strArr[i]);
                strArr.splice(i,1);
            }
        }
    }
    return result;
}
//testcase
groupAnagram(["race","god","ape", "dog","acre","act","cat","pea","care"]);


// Leet code solution
// https://leetcode.com/problems/anagrams/
// run time O(n^3)
function groupAnagrams(strArr) {
    var result = [];
    while(strArr.length > 0) {//O(n)
        var str = strArr.shift();
        var arr = [];
        arr.push(str);
        for (var i = 0; i < strArr.length; i++) { //O(n)
            if(isAnagram(str,strArr[i])){ //O(n)
                arr.push(strArr[i]);
            }
        }

        for(var j = 0; j < arr.length; j++){ //O(n)
            var idx = strArr.indexOf(arr[j]); //O(n)
            if(idx != -1){
                strArr.splice(idx,1);
            }
        }

        arr.sort(); //O(nlogn)
        result.push(arr);
    }
    return result;
}
