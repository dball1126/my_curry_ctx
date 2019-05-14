function myCurry(ctx, bindArgs){
    let obj = ctx;
    let allArgs = [];

    return function _myCurry(ele){
        allArgs.push(ele);
        if (allArgs.length < bindArgs){
            return _myCurry;
        } else{
            return obj(...allArgs);
        }
    }
}