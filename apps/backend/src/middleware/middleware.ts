import { NextFunction, Request, Response } from "express";
import jwt, { decode } from "jsonwebtoken";





export const userMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const header = req.headers["authorization"];
  
  if (!header || !header.startsWith("Bearer ")) {
     res.status(401).json({ msg: "Header must start with Bearer" });
     return;
  }

  const token = header.split(" ")[1];

  try {
    const decoded = jwt.verify(token, jwt_secret) as {id : string};
    req.userId = decoded.id;
    next();
  } catch (error) {
     res.status(403).json({ message: "Failed to authenticate token" });
  }
};
