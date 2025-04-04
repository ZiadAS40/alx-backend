import { createClient } from "redis";

const client = createClient();

client.connect()
.then(_ => console.log('Redis client connected to the server'))
.catch(error => console.log('Redis client not connected to the server:', error));

const hashes = {
    "Portland":50,
    "Seattle":80,
    "New York":20,
    "Bogota":20,
    "Cali":40,
    "Paris":2
};


for (const [k, v] of Object.entries(hashes)) {
    client.hSet("ALX", k, v)
        .then(r => console.log(`Replay: ${r}`));
}

client.hGetAll("ALX").then(r => console.log(Object.assign({}, r)));