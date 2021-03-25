require("dotenv").config();

const prod = {
  appUrl: "https://api.modcont.com",
};

const dev = {
  appUrl: 'http://localhost:9999'
};


const config = process.env.REACT_APP_STAGE === 'production'
  ? prod
  : dev;

  console.log("REACT_APP_STAGEREACT_APP_STAGE", process.env.REACT_APP_STAGE);

export default {
  token: localStorage.getItem("token") || "",
  authToken: () => localStorage.getItem("token") || "",
  ...config
};

