#!/usr/bin/env node
import { createClient} from 'redis';
import { promisify } from 'util'

const client = createClient();


client.connect()
    .then(r => console.log('Redis client connected to the server'))
    .catch(error => console.log('Redis client not connected to the server:', error));


 function setNewSchool(schoolName, value) {
     client.set(schoolName, value)
     .then((replay) => console.log(`Replay: ${replay}`))
     .catch(err => console.log(err));
};

async function displaySchoolValue(schoolName) {
    const value = await client.get(schoolName);
}

displaySchoolValue('ALX');
setNewSchool('ALXSanFrancisco', '100');
displaySchoolValue('ALXSanFrancisco');