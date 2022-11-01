import type { Application, NextFunction, Request, Response } from "express";

function createLoginRoute(createHelpers: any) {
    return async function (req: Request, res: Response, next: NextFunction) {};
}

function registerLoginRoute(app: Application, createHelpers?: any) {
    app.get("/login", createLoginRoute(createHelpers));
}
