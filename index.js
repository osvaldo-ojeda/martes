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
  return fetch("https://jsonplaceholder.typicode.com/todos/1");
}

async function cinco() {
  try {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const dataJson = await data.json();
    console.log(`🚀 ~ cinco ~ data:`, dataJson);
    return dataJson;
  } catch (error) {
    console.log(`🚀 ~ cinco ~ error:`, error);
  }
}

uno();

dos(2)
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

// setTimeout(() => {
//   console.log(`🚀 ~ setTimeout ~ setTimeout 1`);
// }, 2000);
// setTimeout(() => {
//   console.log(`🚀 ~ setTimeout ~ setTimeout 2`);
// });

// cuatro()
//   .then((data) => data.json())
//   .then((data) => console.log({ data }))
//   .catch((error) => console.log({ error }))
//   .finally(() => console.log("final de la promesa"));

tres();

cinco();
