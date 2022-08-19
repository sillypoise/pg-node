import type express from "express";

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

export { httpGoogleAuth, httpGoogleAuthCallback };
