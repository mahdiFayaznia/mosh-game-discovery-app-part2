import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

// export default axios.create({
//   baseURL: "https://api.rawg.io/api",
//   params: {
//     key: "44eb2938882647819de2b33b89f8f4f7",
//   },
// });

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "44eb2938882647819de2b33b89f8f4f7",
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };
}

export default APIClient;
