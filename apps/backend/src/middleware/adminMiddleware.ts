import { NextFunction, Request, Response } from "express";
import jwt, { decode } from "jsonwebtoken";



const jwt_secret = process.env.JWT_SECRET_KEY || "leetcode_secret_key";

export const adminMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const header = req.headers["authorization"];
  
  if (!header || !header.startsWith("Bearer ")) {
     res.status(401).json({ msg: "Header must start with Bearer" });
     return;
  }

  const token = header.split(" ")[1];

  try {
    const decoded = jwt.verify(token, jwt_secret) as {role : string};
    const role = decoded.role;
    if(!role || !(role == "ADMIN" )){
        res.status(403).json({
            msg : "You are not able to access this page or content"
        })
    }
    console.log(role + ":admin loggin")
    next();
  } catch (error) {
     res.status(403).json({ message: "Failed to authenticate token" });
  }
};
