#!/usr/bin/yarn dev
import {createClient} from 'redis';

const client = createClient({});

client.connect()
    .then(res => console.log('Redis client connected to the server'))
    .catch(error => console.log('Redis client not connected to the server:', error.toString()));

client.subscribe('holberton school channel', (message, channel)=>{
  console.log(message);
  if (message === 'KILL_SERVER') {
    client.unsubscribe().then(res => null);
    client.quit().then(res => null);
  }
});
