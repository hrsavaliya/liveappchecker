import axios from "axios";
import appConfig from "../config";

export const createRole = async (data) => {
  let result = {};
  try {
    const res = await axios.post(
      `${appConfig.appUrl}/roles`, data, {
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

export const createPermission = async (data) => {
  let result = {};
  try {
    const res = await axios.post(
      `${appConfig.appUrl}/permission`, data, {
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

export const Roles = async (roles) => {
  let result = {};
  try {
    const res = await axios.get(
      `${appConfig.appUrl}/roles/${roles}`, {
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

export const getRoles = async () => {
  let result = {};
  try {
    const res = await axios.get(
      `${appConfig.appUrl}/roles`, {
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

export const deleteRole = async (id) => {
  let result = {};
  try {
    const res = await axios.delete(
      `${appConfig.appUrl}/roles/${id}`, {
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

export const updatePermissions = async (data) => {
  let result = {};
  try {
    const res = await axios.put(
      `${appConfig.appUrl}/roles`, data, {
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

export const getPermission = async () => {
  let result = {};
  try {
    const res = await axios.get(
      `${appConfig.appUrl}/permission`, {
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
