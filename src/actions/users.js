import axios from "axios";
import appConfig from "../config";

export const getUserList = async () => {
  let result = {};
  try {
    const res = await axios.get(
      `${appConfig.appUrl}/users`, {
        headers: {
          Authorization: `${appConfig.token}`
        }
      }
    );
    result = res.data || {};
    return {success: true, data: result};
  } catch (err) {
    console.log("error in getting info : ", err);
    return {
      success: false,
      message: (err) || "something went wrong"
    };
  }
};

export const updateStatus = async (id,status) => {
  let result = {};
  try {
    const res = await axios.put(
      `${appConfig.appUrl}/users/isActive/${id}`, {isActive: !status},{
        headers: {
          Authorization: `${appConfig.token}`
        }
      }
    );
    result = res.data || {};
    return {success: true, data: result};
  } catch (err) {
    console.log("error in getting info : ", err);
    return {
      success: false,
      message: (err) || "something went wrong"
    };
  }
};
