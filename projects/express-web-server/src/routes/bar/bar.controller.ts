import type { Request, Response } from "express";

import { writeBar } from "../../models/bar.model";

async function httpWriteBar(req: Request, res: Response) {
    let val = req.body.value;
    let newBarValues = await writeBar(val);
    res.status(200).json(newBarValues);
}

export { httpWriteBar };
