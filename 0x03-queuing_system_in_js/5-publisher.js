#!/usr/bin/yarn dev
import { createClient } from 'redis';

const client = createClient();


async function main() {
    try {
        await client.connect();
        console.log('Redis client connected to the server');
        
        await publishMessage("ALX Student #1 starts course", 100);
        await publishMessage("ALX Student #2 starts course", 200);
        await publishMessage("KILL_SERVER", 300);
        await publishMessage("ALX Student #3 starts course", 400);
    } catch (error) {
        console.log('Redis client not connected to the server:', error);
    }
}


async function publishMessage(message, time) {
    await new Promise(res => setTimeout(() => res(console.log(`about to sent ${message}`), time)));
    await client.publish("ALX", message);
};

main();