import axios from "axios";
import appConfig from "../config";

export const createAccount = async (values) => {
  let result = {};
  try {
    const res = await axios.post(
      `${appConfig.appUrl}/account`, values, {
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

export const getAccount = async () => {
  let result = {};
  try {
    const res = await axios.post(
      `${appConfig.appUrl}/account/get`, {}, {
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

export const deleteAccount = async (id) => {
  let result = {};
  try {
    const res = await axios.delete(
      `${appConfig.appUrl}/account/${id}`, {
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

export const updateAccount = async (id, account) => {
  let result = {};
  try {
    const res = await axios.put(
      `${appConfig.appUrl}/account/${id}`, account, {
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

