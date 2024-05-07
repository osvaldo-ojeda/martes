import { ifError } from "node:assert";
import { error } from "node:console";
import fs, { readFileSync, writeFileSync, readdir } from "node:fs";
import { appendFile } from "node:fs/promises";
// console.log(`🚀 ~ fs:`, fs)
// console.log(`🚀 ~ readFileSync:`, readFileSync)

const read = () => {
  try {
    const data = readFileSync("package.json", "utf-8");
    console.log(`🚀 ~ read ~ data:`, JSON.parse(data));
  } catch (error) {
    console.log(`🚀 ~ error:`, error);
  }
};

const write = () => {
  try {
    const data = writeFileSync("prueba.txt", "todo bien");
    console.log(`🚀 ~ write ~ data:`, data);
  } catch (error) {
    const errorStringify = JSON.stringify(error);
    writeFileSync("error.txt", errorStringify);
    console.log(`🚀 ~ write ~ error:`, error);
  }
};
// promesas
// const append = async () => {
//   try {
//     const data = await appendFile("prueba.txt", "todo super bien\n");
//     console.log(`🚀 ~ append ~ data:`, data);
//   } catch (error) {
//     const errorStringify = JSON.stringify(error);
//     await appendFile("error.txt", `${errorStringify}\n`);
//     console.log(`🚀 ~ write ~ error:`, error);
//   }
// };

// const append = () => {
//   return appendFile("prueba.txt", "todo super bien\n");
// };

// read()
// write()
// // append()
//   .then(() => console.log("modificacion ok"))
//   .catch((e) => {
//     const errorStringify = JSON.stringify(e);
//     appendFile("error.txt", `${errorStringify}\n`);
//   });
// -------------------------
const append = () => {
  appendFile("prueba.txt", "todo super bien\n")
    .then(() => console.log("modificacion ok"))
    .catch((e) => {
      const errorStringify = JSON.stringify(e);
      appendFile("error.txt", `${errorStringify}\n`);
    });
};

// read()
// write()
// append()

// callback

const readDir = () => {
  readdir("./", (error, data) => {
    if (error) {
      console.log(`🚀 ~ readDir ~ error:`, error);
    } else {
      console.log(`🚀 ~ readDir ~ data:`, data);
    }
  });
};

readDir();
