import type { V0alpha2ApiInterface } from "@ory/client";
import express, { Application, NextFunction, Request, Response } from "express";

let app = express();

app.use(express.json());

app.get("/", (_req: Request, res: Response) => {
    res.status(200).json("Aliiiive");
});

// app.get("*", (_req: Request, res: Response) => {
//     res.status(404).json("404 - page not found");
// });

function register404Route(app: any, createHelpers?: any) {
    app.get("*", (_req: Request, res: Response) => {
        res.status(404).json("404 - Page not found");
    });
}

// * Route Registration
register404Route(app);

// RouteRegistrator
interface RouteOptions {
    sdk: V0alpha2ApiInterface;
    apiBaseUrl: string;
    kratosBrowserUrl: string;
    logo?: string;
}

type RouteOptionsCreator = (req: Request) => RouteOptions;

type RouteCreator = (
    opts: RouteOptionsCreator
) => (req: Request, res: Response, next: NextFunction) => void;

type RouteRegistrator = (
    app: Application,
    createHelpers?: RouteOptionsCreator,
    route?: string
) => void;

export { app };
