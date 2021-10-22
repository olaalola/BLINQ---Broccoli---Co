import _axios from "axios";
// base url
const axios = () => {
  const instance = _axios.create({
    baseURL: "https://us-central1-blinkapp-684c1.cloudfunctions.net/fakeAuth",
  });
  return instance;
};

export { axios };
export default axios();
