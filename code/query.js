async function query() {
    const asyncRedis = require("async-redis");
    const redis = asyncRedis.createClient();
    const pg = require("pg-promise")();
    const db = pg('postgres://user:user123@localhost:5432/redis')
    const queryTime = 1000;

    const idClient = 5;
    console.time("Redis");

    for (let i = 0; i < queryTime; i++) {
        let clientCache = await redis.get(`${idClient}`);

        if (!clientCache) {
            const client = await db.query(`SELECT * FROM clients WHERE id = ${idClient} LIMIT 1`);

            redis.set(`${idClient}`, JSON.stringify(client));
            clientCache = client;
        } else clientCache = JSON.parse(clientCache);
    }  

    console.timeEnd("Redis");

    console.time("Postgresql");

    for (let i = 0; i < queryTime; i++) {
        const client = await db.query(`SELECT * FROM clients WHERE id = ${idClient} LIMIT 1`);
    }

    console.timeEnd("Postgresql");

    await db.$pool.end();
    await redis.quit();
}

query();