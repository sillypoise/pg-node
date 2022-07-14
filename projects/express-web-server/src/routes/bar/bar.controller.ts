import type { Request, Response } from "express";

import { writeBar } from "../../models/bar.model";

async function httpWriteBar(req: Request, res: Response) {
    let val = req.body.value;
    let query = setTimeout(async () => {
        let newBarValues = await writeBar(val);
        return newBarValues;
    }, 5000);
    return res.status(200).json(query);
}

export { httpWriteBar };
