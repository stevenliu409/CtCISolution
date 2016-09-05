function intToString(x) {

    if(x == 0) return "zero";

    var result = "";
    var digitDict = {
        0:'',
        1:'one',
        2:'two',
        3:'three',
        4:'four',
        5:'five',
        6:'six',
        7:'seven',
        8:'eight',
        9:'nine'};

    var teenDict = {
        0:'ten',
        1:'eleven',
        2:'twelve',
        3:'thirteen',
        4:'fourteen',
        5:'fifteen',
        6:'sixteen',
        7:'seventeen',
        8:'eighteen',
        9:'nineteen'};

    var tensDict = {
        0:'',
        1:'',
        2:'twenty',
        3:'thirty',
        4:'forty',
        5:'fifty',
        6:'sixty',
        7:'seventy',
        8:'eighty',
        9:'ninety'};

    var sigFigDict = {
        0:'',
        1:'',
        2:'hundred',
        3:'thousand',
        4:'thousand',
        5:'hundred',
        6:'million',
        7:'million',
        8:'hundred',
        9:'billion',
        10:'billion',
        11:'hundred'
    };


    var arr = convertIntToArray(x);

    while(arr.length != 0) {

        if(arr.length == 2) {
            var temp = arr.pop();
            if(temp == 1) {
                result += teenDict[arr.pop()];
                return result;
            } else if(temp != 0) {
                result += tensDict[temp] + " ";
            }
        }

        if(arr.length == 5 || arr.length == 8) {
            var temp = arr.pop();
            if(temp == 0) {
              result += sigFigDict[arr.length] + " ";
            }
            else if(temp == 1) {
                result += teenDict[arr.pop()] + " " +
                          sigFigDict[arr.length] + " ";
            }
            else {
                result += tensDict[temp] + " ";
                if(arr[arr.length-1] == 0) {
                  result += sigFigDict[arr.length] + " ";
                }
            }
        }

        var temp = arr.pop();
        if(temp != 0) {
            result += digitDict[temp] + " " +
                sigFigDict[arr.length] + " ";
        }
    }

    return result.trim();
}


function convertIntToArray(x) {
    var arr = [];
    while (x != 0) {
        arr.push(x%10);
        x = parseInt(x/10);
    }

    return arr;
}

// TestCases
writeln(intToString(1010));
writeln(intToString(1000));
writeln(intToString(5100));
writeln(intToString(51));
writeln(intToString(5300));
writeln(intToString(0));
writeln(intToString(1001));
writeln(intToString(5319));
writeln(intToString(5321));
writeln(intToString(5330));
writeln(intToString(5310));
writeln(intToString(15310));

writeln(intToString(20000));
writeln(intToString(20001));
writeln(intToString(20011));
writeln(intToString(20111));

writeln(intToString(10000));
writeln(intToString(12000));

writeln(intToString(00000));

writeln(intToString(21111));
writeln(intToString(21110));
writeln(intToString(21101));
writeln(intToString(21100));

writeln(intToString(21011));
writeln(intToString(21010));
writeln(intToString(21000));

writeln(intToString(99999));

writeln(intToString(100000));
writeln(intToString(100009));
writeln(intToString(100099));
writeln(intToString(100999));
writeln(intToString(109999));
writeln(intToString(199999));
writeln(intToString(200000));

writeln(intToString(2999999));
