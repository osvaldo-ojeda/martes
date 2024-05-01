import fs, { readFileSync, writeFileSync } from "node:fs";
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
    const errorStringify=JSON.stringify(error)
    writeFileSync("error.txt", errorStringify);
    console.log(`🚀 ~ write ~ error:`, error);
  }
};

// read()
// write()