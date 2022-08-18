import type express from "express";

async function httpAuth(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
) {
    try {
        let { email, passwd } = req.body;
        console.log(email, passwd);
        return res.status(200).json("🔓 Authenticated");
    } catch (e: any) {
        next(e);
        console.log(e);
        return res.status(500).json("🔒 Error");
    }
}

async function httpGoogleAuth(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
) {
    console.log("Google will now redirect you to authenticate...");
}

async function httpGoogleAuthCallback(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
) {
    console.log("Google called us back! You're authenticated! I think...");
}

export { httpAuth, httpGoogleAuth, httpGoogleAuthCallback };
