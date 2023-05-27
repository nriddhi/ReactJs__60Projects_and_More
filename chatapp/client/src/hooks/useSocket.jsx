import { useSelector } from "react-redux";
import { io } from "socket.io-client";

const socketServer = process.env.REACT_APP_SERVER_URL;

const socket = io(socketServer);

const useSocket = () => {
  const userId = useSelector((state) => state.userReducer.user._id);

  const socketEmit = (action, payload, fn) => {
    socket.emit(action, payload, fn);
  };

  const socketListen = (action, fn) => {
    socket.on(action, fn);
  };

  return { socketEmit, socketListen, userId, socket };
};

export default useSocket;
