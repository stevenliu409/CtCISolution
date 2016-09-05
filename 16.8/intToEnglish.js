function convertHelper(arr, suffix)
{
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
        2:'twenty',
        3:'thirty',
        4:'forty',
        5:'fifty',
        6:'sixty',
        7:'seventy',
        8:'eighty',
        9:'ninety'};


    while(arr.length > 0){
        switch(arr.length) {
            case 3:
                var temp = arr.pop();
                if(temp > 0) {
                    result += digitDict[temp] + " hundred ";
                }
                break;
            case 2:
                var temp = arr.pop();
                if(temp == 1) {
                    result += teenDict[arr.pop()];
                } else if(temp > 1){
                    result += tensDict[temp] + " ";
                }
                break;
            case 1:
                result += digitDict[arr.pop()];
                break;
        }
    }

    return (result == "") ? result : result.trim() + " " + suffix + " ";
}

function intToString(x)
{
    if(x == 0 || x == null) return "zero";

    var result = "";
    var sigFig = ["","thousand","million","billion","trillion","quadrillion"];
    var arr = intToArray(x, sigFig.length * 3);

    var i = 1;
    for(var k = sigFig.length * 3; k >= 0; k-=3) {
        if(arr.length > k) {
            result += convertHelper(arr.splice(arr.length-3,3),sigFig[sigFig.length-i]);
            i++;
        }
    }

    return result;
}

function intToArray(x,MAX_DIGITS)
{
    var arr = [];
    while(x != 0) {
        arr.push(x%10);
        x = parseInt(x/10);
    }
    while(arr.length < MAX_DIGITS) {
        arr.push(0);
    }
    return arr;
}

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

