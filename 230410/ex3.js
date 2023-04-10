let increase = ( function () {
    let count = 0

    return function () {
        return ++count
    }
} () )


console.log( increase() );
console.log( increase() );
console.log( increase() );
console.log( increase() );
console.log( increase() );
console.log( increase.count );