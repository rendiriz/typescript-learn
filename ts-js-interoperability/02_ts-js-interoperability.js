/**
 * @param {import("./some-module").SomeType} myValue
 */
function doSomething(myValue) {
    console.log(myValue);
}

const result1 = doSomething('hello', 1);
const result2 = doSomething('hello', 'asd');