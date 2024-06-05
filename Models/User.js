import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";
import bcrypt from "bcrypt";
class User extends Model {
  comparePass = async (password) => {
    const compare = await bcrypt.compare(password, this.password);
    return compare;
  };
}

User.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mail: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: connection,
    modelName: "User",
  }
);

User.beforeCreate(async (user) => {
  // console.log(`🚀 ~ User.beforeCreate ~ user:`, user)
  const genSalt = await bcrypt.genSalt(10);
  // console.log(`🚀 ~ User.beforeCreate ~ genSalt:`, genSalt);
  const hashedPassword = await bcrypt.hash(user.password, genSalt);
  // console.log(`🚀 ~ User.beforeCreate ~ hashedPassword:`, hashedPassword)
  user.password = hashedPassword;
});

export default User;
