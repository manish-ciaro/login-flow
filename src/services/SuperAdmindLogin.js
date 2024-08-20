import axios from "axios";
import {superAdminLogin} from "../utils/config/config"
import baseURL from "../utils/constants/constants";
import { redirect } from "react-router-dom";



export const superAdminPostData = (data) => {

  const superAdminLoginAPI = axios.create({
    baseURL: baseURL ,
    method:'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body:JSON.stringify(data)
  });
  try {
    const result = superAdminLoginAPI.post(superAdminLogin, data);
    return(
      <>
/      <redirect  to='/dashboard' />
      </>
    ) 
  } catch (error) {
    return(
     console.error("Error sending data:", error.msg)
    )
  }
};

// export default superAdminLoginAPI;

