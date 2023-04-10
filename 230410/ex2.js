var func = (
    function () {
        var num = 0

        function increase () {
            return ++num
        }

        function decrease () {
            return --num
        }

        return {
            increase: increase,
            decrease: decrease,
        }
    } ()
)

console.log( func.num );
console.log( func.increase() );
console.log( func.decrease() );
console.log( func.decrease() );
console.log( func.decrease() );