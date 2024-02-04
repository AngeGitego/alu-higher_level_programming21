#!/usr/bin/node

const Args = process.argv.slice(2);
// prettier-ignore
function add (a, b) {
  const result = parseInt(a) + parseInt(b);
  console.log(result);
}

add(Args[0], Args[1]);
