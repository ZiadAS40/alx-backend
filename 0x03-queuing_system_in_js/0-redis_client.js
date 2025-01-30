#!/usr/bin/yarn dev
import {createClient, print} from 'redis';

const client = createClient({
    host: 'localhost',
});

client.connect()
    .then(r => console.log('Redis client connected to the server'))
    .catch(error => console.log('Redis client not connected to the server:', err.message));
