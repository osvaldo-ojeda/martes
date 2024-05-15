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
    const ok = await conn.connect();

    if (ok) {
      console.log(`🚀 ~ connection db ok`);
      return conn;
    }
  } catch (error) {
    console.log(`🚀 ~ connection ~ error:`, error);
  }
};

const db = connection();

export default db;
