import { NextFunction, Request, Response } from "express";

export default function errorHandlerMiddleware(err, req: Request, res: Response, next: NextFunction) {
    console.log(err);

    if (err.type === "unauthorized") {
        return res.sendStatus(401);
    }

    return res.sendStatus(500);
}
