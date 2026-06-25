function outer() {
    let count = 0;


    function inner() {

        counter++

        return count;
    }

    return inner;
}

const counter1 = outer();
const counter2 = outer();

console.log(counter1());
console.log(counter1())

