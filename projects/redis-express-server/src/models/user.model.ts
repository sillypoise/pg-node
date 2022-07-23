import { rdb } from "../services/redis";

async function getUsers() {
    let userKeys = await rdb.keys("user:*");
    let users = await rdb.mGet(userKeys);
    return users;
}

export { getUsers };
