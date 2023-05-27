import { useState } from "react";
import { useDispatch } from "react-redux";
import { notificationActions } from "../store/notificationSlice";
import axios from 'axios';


const useFetch = ({ method, url }, successFn, errorFn) => {
  const [requestState, setRequestState] = useState();
  const dispatch = useDispatch();

  const Server_URL = process.env.REACT_APP_SERVER_URL;

  axios.defaults.withCredentials = true

  const requestFunction = async (values) => {
    const methodUpper = method.toUpperCase();
    const fetchOptions =
     {
            method: methodUpper,
            url:`${Server_URL}/api${url}`,
            headers: {
              "Content-Type": "application/json",
              'Access-Control-Allow-Credentials': true,
              'Access-Control-Allow-Origin': true
            },
            data: JSON.stringify(values),
          };

    try {
      setRequestState("loading");
      const response = await axios(fetchOptions);
      let data;
      if (methodUpper !== "DELETE") {
        data = await response;
      }
      if (!response.statusText==='OK') throw new Error(data.message);
      setRequestState("success");
      successFn && successFn(data.data);
      return data.data;
    } catch (error) {
      setRequestState("error");
      dispatch(
        notificationActions.addNotification({
          message: error.message,
          type: "error",
        })
      );

      errorFn && errorFn(error);
    }
  };

  return {
    reqState: requestState,
    reqFn: requestFunction,
  };
};

export default useFetch;
