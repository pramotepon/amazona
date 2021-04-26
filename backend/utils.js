import jwt from "jsonwebtoken";
export const generateToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    process.env.JWT_TOKEN || 'wg6wLsSyrW0dhcVanrpdFnUZhmbM1iKJEJ6kEBiK',
    {
      expiresIn: "30d",
    }
  );
};
