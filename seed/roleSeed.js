import { Role } from "../Models/models.js";

export const roleSeed = async () =>
  await Role.bulkCreate([
    { name: "superAddmin" },
    { name: "addmin" },
    { name: "user" },
  ]);

  await roleSeed()