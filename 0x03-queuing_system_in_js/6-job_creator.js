import { createQueue } from "kue";

const obj = {
    phoneNumber: "010",
    message: "thank you",
}

const queue = createQueue();

let job = queue.create('push_notification_code', obj)
    .save( err => {
        if (!err) {
            console.log(`Notification job created: ${job.id}`);
        }
    }).on("complete",
        _ => {
          console.log("Notification job completed");
        }
    ).on('failed attempt',
        _ => console.log("Notification job failed")
    );