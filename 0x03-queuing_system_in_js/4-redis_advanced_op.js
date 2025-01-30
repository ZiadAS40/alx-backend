#!/usr/bin/yarn dev
import {createClient, print} from 'redis';

const client = createClient();

client.connect()
    .then(res => {
      console.log('Redis client connected to the server');
      const hashObj = {
        'Portland': 50,
        'New York': 20,
        'Seattle': 80,
        'Bogota': 20,
        'Cali': 40,
        'Paris': 2,
      };
      for (const [field, value] of Object.entries(hashObj)) {
        setHashTableData('HolbertonSchools', field, value);
      }
      displayHashTableData('HolbertonSchools');
    })
    .catch(error => console.log('Redis client not connected to the server:', error.message));

const setHashTableData = (hashName, fieldName, fieldValue) => {
  client.hSet(hashName, fieldName, fieldValue, print)
      .then(res => console.log(`Reply: ${res}`));
};

const displayHashTableData = (name) => {
  client.hGetAll(name)
      .then(res => console.log(JSON.parse(JSON.stringify(res))));
};