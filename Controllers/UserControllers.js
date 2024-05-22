import User from "../Models/User.js";

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

  async createUser(req, res) {
    try {
      const { name, mail, password } = req.body;
      const result = await User.create({
        name,
        mail,
        password,
      });
      res.status(200).send({
        success: true,
        message: `usuario ${result.dataValues.name} creado con exito`,
      });
    } catch (error) {
      res.status(400).send({ success: false, message: error });
    }
  }
  async updateUser(req, res) {
    try {
      const { id } = req.params;
      const { name, mail, password } = req.body;
      const query = `UPDATE user SET name=?, password=?, mail=? WHERE id=?`;
      const [result] = await db.query(query, [name, password, mail, id]);
      console.log(`🚀 ~ UserControllers ~ updateUser ~ result:`, result);
      res
        .status(200)
        .send({ success: true, message: "usuario modificado con exito" });
    } catch (error) {
      res.status(400).send({ success: false, message: error });
    }
  }
}

export default UserControllers;
