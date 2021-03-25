import axios from "axios";
import appConfig from "../config";

export const login = async (loginData) => {
  let result = {};
  try {
    const res = await axios.post(`${appConfig.appUrl}/users/login`, loginData);
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

export const signUp = async (signUpData) => {
  let result = {};
  try {
    const res = await axios.post(`${appConfig.appUrl}/users/signUp`, signUpData);
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

export const changedPassword = async (userDetails) => {
  let result = {};
  try {
    const res = await axios.put(
      `${appConfig.appUrl}/users/changePassword`, userDetails, {
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

export const setNewPassword = async (data) => {
  let result = {};
  try {
    const res = await axios.put(
      `${appConfig.appUrl}/users/update`, data, {
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

export const forgotPassword = async (email) => {
  let result = {};
  try {
    const res = await axios.post(
      `${appConfig.appUrl}/users/forget`, {email}, {
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
