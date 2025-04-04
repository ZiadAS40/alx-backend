#!/usr/bin/yarn dev
import { createClient } from 'redis';

const client = createClient();


client.connect()
    .then(r => console.log('Redis client connected to the server'))
    .catch(error => console.log('Redis client not connected to the server:', error));
