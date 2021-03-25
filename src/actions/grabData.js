import axios from "axios";
import appConfig from "../config";

export const createGrabApp = async (appId) => {
  let result = {};
  try {
    const res = await axios.post(
      `${appConfig.appUrl}/liveappchecker`, {appId}, {
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

export const getGrabApps = async (query) => {
  let result = {};
  try {
    const res = await axios.post(
      `${appConfig.appUrl}/liveappchecker/get${query || ""}`, {}, {
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

export const getLength = async () => {
  let result = {};
  try {
    const res = await axios.post(
      `${appConfig.appUrl}/liveappchecker/getlength`, {}, {
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

export const getGrabAppById = async (id) => {
  let result = {};
  try {
    const res = await axios.get(
      `${appConfig.appUrl}/liveappchecker/${id}`, {
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

export const deleteGrabApp = async (id) => {
  let result = {};
  try {
    const res = await axios.delete(
      `${appConfig.appUrl}/liveappchecker/${id}`, {
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

export const refreshData = async () => {
  let result = {};
  try {
    const res = await axios.post(
      `${appConfig.appUrl}/liveappchecker/getrefresh`, {},{
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

export const updateGrapApp = async (appId) => {
  let result = {};
  try {
    const res = await axios.put(
      `${appConfig.appUrl}/liveappchecker/${appId}`, {appId}, {
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
