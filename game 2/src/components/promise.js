import React from "react";
let a;
function timer(time) {
  return new Promise((res, err) => {
    setTimeout(() => {
       a = Math.random();
      if (a > 0.1) {
        res("secss");
      } else {
        err("nut secss");
      }
    },time);
  });
}
let arr = [timer(1000), timer(2000), timer(5000)];

Promise.all(arr)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

function Promise1() {
  return <div></div>;
}

export default Promise1;
