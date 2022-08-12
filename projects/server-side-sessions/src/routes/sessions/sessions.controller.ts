import type express from "express";

declare module "express-session" {
    interface SessionData {
        userId: number;
        sensitiveInfo: string;
    }
}

async function createSession(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
) {
    try {
        console.log(req.sessionStore);
        // Create or regenerate session
        return req.session.regenerate((err: Error) => {
            if (err) {
                return next(err);
            }

            // Set session data
            req.session.userId = Math.floor(Math.random() * 100);
            req.session.sensitiveInfo = "🤫";

            // Save session data
            req.session.save((err: Error) => {
                if (err) {
                    next(err);
                }
                res.status(200).json({ sessionId: req.sessionID });
            });
        });
    } catch (e) {
        console.log(e);
        return res.status(500).json("Internal server error");
    }
}

export { createSession };
