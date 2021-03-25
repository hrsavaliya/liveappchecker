import axios from "axios";
import appConfig from "../config";

export const createSetting = async (body) => {
  let result = {};
  try {
    const res = await axios.post(
      `${appConfig.appUrl}/settings/create`, body, {
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

export const getSettingAllData = async () => {
  let result = {};
  try {
    const res = await axios.post(
      `${appConfig.appUrl}/settings/get`, {}, {
        headers: {
          Authorization: `${appConfig.token}`
        }
      }
    );
    result = res.data || {};
    return {success: true, data: result};
  } catch (err) {
    console.log("error in getting time info : ", err);
    return {
      success: false,
      message: (err) || "something went wrong"
    };
  }
};

export const deleteSettingData = async (id) => {
  let result = {};
  try {
    const res = await axios.delete(
      `${appConfig.appUrl}/settings/${id}`, {
        headers: {
          Authorization: `${appConfig.token}`
        }
      }
    );
    result = res.data || {};
    return {success: true, data: result};
  } catch (err) {
    console.log("error in getting time info : ", err);
    return {
      success: false,
      message: (err) || "something went wrong"
    };
  }
};

