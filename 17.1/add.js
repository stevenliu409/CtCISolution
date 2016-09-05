function addOne(a)
{
    var index = 1;

    while((a & index) == index) {
       a = a & (~index);
       index = index << 1;
    }
    return (a | index);
}


function add(x,y) {
    if (y == 0)
        return x;
    else
        return add( x ^ y, (x & y) << 1);
}

