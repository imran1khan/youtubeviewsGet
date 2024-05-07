//https://youtu.be/tPl470Rgqg0
// <iframe width="1236" height="695" src="https://www.youtube.com/embed/IsWiDf8aTc4" title="John Wick: Chapter 4 Club Fight Music - Blood Code Extended Le Castle Vania Mashup - (Joe Solo Mix)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
// import express from "express";


// const app = express();

// app.get('/',async (req,res)=>{
//     try {
//         const responce = await fetch(`https://youtu.be/oiEDcbvyAWk`);
//         console.log(await responce.text())
//     } catch (error) {
        
//     }
//     res.send('hello');
// });

// app.listen(3000,()=>{
//     console.log(`http://localhost:3000`)
// });

// const seeVideo = async () => {
//     const res = await fetch(`https://www.youtube.com/embed/oiEDcbvyAWk`);
//     const text = await res.text();
//     console.log(text);
// }

// seeVideo();
// import { makeRequest } from "./sendRequse";
import { exec } from 'child_process';


const openWebsite = () => {
    const websiteLink = 'https://www.youtube.com/watch?v=tPl470Rgqg0'; // Replace with the actual website link

    // Platform-specific command to open the link
    const command = process.platform === 'win32' ? `start ${websiteLink}` : `open ${websiteLink}`;

    // Execute the command to open the link
    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error('Error opening website:', error.message);
            return;
        }
        console.log('Website opened successfully');
    });
}

const closeTabs = () => {
    const closeTabsCommand = process.platform === 'win32' ? 'taskkill /F /IM chrome.exe' : 'pkill chrome';
    exec(closeTabsCommand, (error, stdout, stderr) => {
        if (error) {
            console.error('Error closing tabs:', error.message);
            return;
        }
        console.log('Tabs closed successfully');
    });
}

async function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function start() {
    while (true) {
        for (let index = 0; index <= 3; index++) {
            openWebsite();
            await sleep(5000); // Sleep for 1 second
        }
        closeTabs();
        await sleep(20000);
    }
}
start();
// setInterval(openWebsite, 5000); // Open tab every 10 seconds
// setInterval(closeOtherTabs, 20000); // Close tabs after 20 seconds
// setInterval(closeTabs, 20000); // Close tabs after 20 seconds

// setInterval(makeRequest, 10000); // 10000 milliseconds = 10 seconds



