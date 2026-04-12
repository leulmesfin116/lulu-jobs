import jwt from "jsonwebtoken";

const generateToken = (userId: string) => {
  const payload = { id: userId };
  const token = jwt.sign;
};
