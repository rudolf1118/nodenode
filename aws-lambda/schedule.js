const schedule = require('node-schedule');
const { exec } = require('child_process');

const job = schedule.scheduleJob('*/1 * * * *', function(){
    exec(`lambda-local -l index.js -h handler -e event.json `, (error) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
    });
});