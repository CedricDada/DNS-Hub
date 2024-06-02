import io from 'socket.io-client'

const url = "http://localhost:9093";
const socket = io(url);
export default socket;