//lazmet el file da ano msh bykhlini adkhol 3la el service wel database abl ma yt2kd an mfish ay mshakel

import { validationResult } from "express-validator";
import { Request, Response, NextFunction, RequestHandler } from 'express';
const validatorMiddleware: RequestHandler=(req: Request, res: Response, next: NextFunction) => {
    const results = validationResult(req);
    if (!results.isEmpty()) {
      return res.status(400).json({ errors: results.array() });
    } else {
      next();
    }
  
}
export default validatorMiddleware;

