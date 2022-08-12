import type express from "express";

async function createSession(req: express.Request, res: express.Response) {
    try {
        // let session = await createSession();
        return res
            .status(202)
            .json("🗄️🍪 session created and stored in database");
    } catch (e) {
        console.log(e);
        return res.status(500).json("Internal server error");
    }
}

export { createSession };
