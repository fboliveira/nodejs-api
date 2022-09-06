# NodeJS API Studying Project

This is a studying project of [Application Programming Interface (API)](https://en.wikipedia.org/wiki/API) in a NodeJS Project.

Am I doing anything wrong? Please, let me know! Feel free to send me a message or create an issue.

## Technologies

- Node.js
- TypeScript
- Express
- [Prisma](https://www.prisma.io/)

## Folder structure

- server  
    = routes  
    = controllers  
    = database  
    = test  

## Steps

1. Start project: ```npm init -y```
1. Install prisma and TypeScript: ```npm install prisma typescript ts-node @types/node -D```
1. Init TypeScript: ```npx tsc --init```
1. Update tsconfig.json according prisma settings
1. Init Prisma: ```npx prisma init```
1. Setting database URL connection (.env)
1. Creating the database schema ([prisma/schema.prisma](./prisma/schema.prisma))
1. Update database: ```npx prisma migrate dev```
1. Creating the database connection with @prisma/client.

## TO-DO

- Dockerfile
