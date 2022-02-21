## Dev Environment

Running this project in development enviroment with localhost:8080

1. Download/clone this project to your local.
2. Open **Terminal**/**CMD** then point it to this project folder
3. Type **npm run install**; let it run for awhile(depending on your internet connection) to download all required dependencies to run this project.
4. Type **npm run start:dev**; you can view all action name in package.json
5. After few seconds, you will see in **Terminal** that it is compiling data
6. A new tab will be auto open on your browser, then load the file to run properly.
7. **Taaadaaa!** you can try change anything on styling or logic, it will hot reload the update to browser. 

## Prod Environment

Running this project in Prod enviroment 

1. Download/clone this project to your local.
2. Double click on **index.html**
3. A new tab on your default web browser will open with this file, and shows its content

## Build project for Prod Environment

Running this project in Prod enviroment 

1. Open this project folder.
2. Open **Terminal**/**CMD** then type **npm run build**
3. it will compile and convert to final version for prod

## Current Issues

I'm a normal human being with lots flaws

1. Final bundle size is more than **1mb**, i need to work on webpack chuck to reduce into smaller efficient files
2. Fetching data from url seems not working(although it works on other api url), maybe some setting blocking it from server.