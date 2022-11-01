import type { V0alpha2ApiInterface } from "@ory/client";
import express, { Application, NextFunction, Request, Response } from "express";

let app = express();

app.use(express.json());

app.get("/", (_req: Request, res: Response) => {
    console.log(res.locals);
    return res.status(200).json("Aliiiive");
});

app.get("*", (_req: Request, res: Response) => {
    res.status(404).json("404 - page not found");
});

app.get("/login", (req: Request, res: Response, next: NextFunction) => {
    // Possible query params
    let {
        flow,
        aal = "",
        refresh = "",
        return_to = "",
        login_challenge,
    } = req.query;

    // Let's parse the initFlowQuery query params
    let initFlowQuery = new URLSearchParams({
        aal: aal.toString(),
        refresh: refresh.toString(),
        return_to: return_to.toString(),
    });
});

// * Route Registration
// register404Route(app);
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
