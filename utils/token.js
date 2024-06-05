import jwt from "jsonwebtoken";
import { SECRET } from "../config/config.js";

export const genToken = (payload) => {
  const token = jwt.sign({payload}, SECRET, { expiresIn: "2d" });
  return token;
};

export const verifyToken=(token)=>{
     const verify=jwt.verify(token, SECRET)
     return verify
}
