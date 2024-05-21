import mysql from "mysql2/promise";

const connection = async () => {
  try {
    const conn = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "martes",
      port: "3306",
    });
    console.log(`🚀 ~ connection db ok`);
    return conn;
  } catch (error) {
    console.log(`🚀 ~ connection ~ error:`, error);
  }
};

const db = await connection();

export default db;
