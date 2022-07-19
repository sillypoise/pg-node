import type { Request, Response } from "express";
import { getUsers } from "../../models/user.model";

async function httpGetUsers(_req: Request, res: Response) {
    let users = await getUsers();
    return res.status(200).json(users);
}

export { httpGetUsers };
