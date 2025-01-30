#!/usr/bin/yarn dev
import {createClient, print} from 'redis';

import {promisify}  from 'util';

const client = createClient({});

client.connect()
    .then(async(res) => {
      console.log('Redis client connected to the server');
      await func();
    })
    .catch(error => console.log('Redis client not connected to the server:', error.message));

const setNewSchool = (schoolName, value) => {
  client.set(schoolName, value, print)
      .then(res => console.log(`Reply: ${res}`));
};

const displaySchoolValue = promisify(
    (schoolName) => client.get(schoolName)
        .then((value) => {
          console.log(value);
        })
);

const func = () => {
  displaySchoolValue('Holberton').then(res => null);
  setNewSchool('HolbertonSanFrancisco', '100');
  displaySchoolValue('HolbertonSanFrancisco').then(res => null);
}
