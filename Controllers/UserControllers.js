import { User, Role } from "../Models/models.js";
import { genToken, verifyToken } from "../utils/token.js";

class UserControllers {
  async getAllUser(req, res) {
    try {
      const result = await User.findAll({
        attributes: ["id", "name", "mail", "roleId"],
        include: {
          model: Role,
          attributes: ["name"],
        },
      });
      res.status(200).send({ success: true, message: result });
    } catch (error) {
      res.status(400).send({ success: false, message: error });
    }
  }
  async getUserById(req, res) {
    try {
      const { id } = req.params;
      // const result = await User.findOne({
      //   attributes: ["id", "name", "mail"],
      //   where: {
      //     id,
      //   },
      // });
      const result = await User.findByPk(id);
      res.status(200).send({ success: true, message: result });
    } catch (error) {
      res.status(400).send({ success: false, message: error });
    }
  }

  async createUser(req, res) {
    try {
      const { name, mail, password, roleId } = req.body;
      const result = await User.create({
        name,
        mail,
        password,
        roleId,
      });
      res.status(200).send({
        success: true,
        message: `usuario ${result.dataValues.name} creado con exito`,
      });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  }
  async updateUser(req, res) {
    try {
      const { id } = req.params;
      const { name, mail, password } = req.body;
      const result = await User.update(
        { name, mail, password },
        {
          where: {
            id,
          },
        }
      );
      res
        .status(200)
        .send({ success: true, message: "usuario modificado con exito" });
    } catch (error) {
      res.status(400).send({ success: false, message: error });
    }
  }

  async deleteUser(req, res) {
    try {
      const { id } = req.params;
      const result = await User.destroy({
        where: {
          id,
        },
      });
      res
        .status(200)
        .send({ success: true, message: "usuario eliminado con exito" });
    } catch (error) {
      res.status(400).send({ success: false, message: error });
    }
  }

  login = async (req, res) => {
    try {
      const { mail, password } = req.body;
      const data = await User.findOne({
        where: {
          mail,
        },
      });
      if (!data) throw new Error("no podes pasar");
      const comparePass = await data.comparePass(password);
      if (!comparePass) throw new Error("no podes pasar");
      const payload = {
        id: data.id,
        name: data.name,
      };
      const token = genToken(payload);
      res.cookie("token", token);
      res
        .status(200)
        .send({ success: true, message: "usuario logueado con exito" });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  me = async (req, res) => {
    try {
      const { user } = req;
      res.status(200).send({ success: true, message: user });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
}

export default UserControllers;
