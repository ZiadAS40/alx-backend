import { createQueue } from "kue";


let blackListPhones = ["4153518780", "4153518781"];

function sendNotification(phoneNumber, message, job, done) {
    job.progress(0, 100);
    if (blackListPhones.includes(phoneNumber)) {
        throw Error(`Phone number ${phoneNumber} is blacklisted`);
    } else {
        job.progress(0, 50);
        console.log(`Sending notification to ${phoneNumber}, with message: ${message}`);
    }
    done();
}

const queue = createQueue();

queue.process("push_notification_code_2", 2, (job, done) => {
    sendNotification(job.data.phoneNumber, job.data.message, job, done);
});

