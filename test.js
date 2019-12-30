({a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40});
console.log(rest);

console.log(...rest(["c"]))