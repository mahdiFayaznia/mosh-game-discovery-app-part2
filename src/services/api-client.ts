import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "44eb2938882647819de2b33b89f8f4f7",
  },
});
