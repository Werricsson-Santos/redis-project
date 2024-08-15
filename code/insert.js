const { faker } = require("@faker-js/faker");
const pgp = require("pg-promise")();
const db = pgp('postgres://user:user123@localhost:5432/redis')

async function createTable() {
    await db.none(`
            CREATE TABLE IF NOT EXISTS clients (
                id SERIAL PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                age INT NOT NULL,
                state VARCHAR(255) NOT NULL
            )
        `)
}

async function insert() {

    for (let i = 0; i < 100000; i++) {
        await db.query('INSERT INTO clients (name, age, state) values (${name}, ${age}, ${state})',
            {
                name: faker.person.firstName(),
                age: Math.floor(Math.random() * 100),
                state: faker.location.state()
        })
    }

    await db.$pool.end()
}

createTable();
insert();