// @ts-check

/**
 * @param {import("./some-module").SomeType} myValue
 */
function doSomething(myValue) {
  console.log(myValue);
}

const result1 = doSomething({ foo: "hello", bar: 1 });
// const result2 = doSomething({ foo: 'hello', bar: 'asd' });
