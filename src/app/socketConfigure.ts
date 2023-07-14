import io from "socket.io-client";

const host = "http://localhost:3000";

const socket = io(host);

const listenEventSocket = () => {
    socket.on("sendDataServer", (dataGot) => {
        console.log(dataGot.data);
    })
}

const socketConfigure = {
    listenEventSocket,
}

export { socketConfigure }
