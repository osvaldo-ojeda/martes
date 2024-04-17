function uno() {
  console.log(`🚀 ~ uno ~ uno:`);
}

function dos(param) {
  return new Promise((resolve, reject) => {
    if (param == 2) {
      resolve("promesa dos fullfile");
    } else {
      reject("promesa dos negativa");
    }
  });
}

function tres() {
  console.log(`🚀 ~ tres ~ tres:`);
}
function cuatro() {
  return fetch("https://jsonplacehold.typicode.com/todos/1");
}

uno();

dos(2)
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

setTimeout(() => {
  console.log(`🚀 ~ setTimeout ~ setTimeout 1`);
}, 2000);
setTimeout(() => {
  console.log(`🚀 ~ setTimeout ~ setTimeout 2`);
});

cuatro()
  .then((data) => data.json())
  .then((data) => console.log({data}))
  .catch((error) => console.log({error}));

tres();
