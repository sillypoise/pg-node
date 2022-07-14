import type { Request, Response } from "express";
import { getAllFoo } from "../../models/foo.model";

async function httpGetFoo(_req: Request, res: Response) {
    let foo = await getAllFoo();
    return res.status(200).json(foo);
}

export { httpGetFoo };
