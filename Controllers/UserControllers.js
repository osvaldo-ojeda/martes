import db from "../connection/connection.js";

class UserControllers {
  async getAllUser(req, res) {
    try {
      const query = "SELECT id, name, mail FROM user";
      const [result] = await db.query(query);
     //  console.log(`🚀 ~ UserControllers ~ getAllUser ~ data:`, result);
      res.status(200).send({ success: true, message: result });
    } catch (error) {
      res.status(400).send({ success: false, message: error });
    }
  }
}

export default UserControllers;
