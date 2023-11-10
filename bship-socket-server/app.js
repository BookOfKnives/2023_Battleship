import EXPRESS from 'express';
const APP = EXPRESS();
APP.use(EXPRESS.json());
APP.use(EXPRESS.static("../client/dist"));

import cors from 'cors';
APP.use(cors({
    credentials: true,
    origin: true
}));

import http from "http";
const SERVER = http.createServer(APP);

import { Server } from "socket.io";
const IO_Server = new Server(SERVER, {
    cors: {
        origin: "*",
        methods: "*" //skal det være et array?
    }
});

const IO_PORT = 8081;
const APP_PORT = 8080;

IO_Server.on("connection", (socket) => {
    console.log("hello user (new connect in 025 bship-socket-server, socket:", socket);

})

APP.get("/", (req, res) => {
    res.send("hello!"); //fuck jeg har helt gelmt alt om express time to rmemember.
})

IO_Server.listen(IO_PORT, () => {console.log("Server 025 Bship-Socket-Server is listening on port:", IO_PORT)});