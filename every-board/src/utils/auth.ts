// import axios from "axios";

// export async function getNewAccessToken(
//   REFRESH_TOKEN: string | null,
// ): Promise<string | null> {
//   if (!REFRESH_TOKEN) {
//     return null;
//   }

//   try {
//     const response = await axios.post("https://every-board.shop/auth/token", {
//       Refresh: REFRESH_TOKEN,
//     });
//     sessionStorage.setItem(
//       "Authorization",
//       `Bearer ${response.data.Authorization}`,
//     );
//     return response.data.Authorization;
//   } catch (err) {
//     console.error(err);
//     return null;
//   }
// }

import axios from "axios";

const newToken = sessionStorage.getItem("Authorization");

const axiosInstance = axios.create({
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + newToken,
  },
});

axiosInstance.interceptors.response.use(
  response => {
    console.log("Server response:", response.status);
    return response;
  },
  async error => {
    const {
      config,
      response: { status },
    } = error;

    const originalRequest = config;

    if (status === 403) {
      console.log("Interceptor received a 403 error");
      const ACCESS_TOKEN = sessionStorage.getItem("Authorization");
      const REFRESH_TOKEN = sessionStorage.getItem("Refresh");

      try {
        const { data } = await axios({
          method: "POST",
          url: `/auth/token`,
          data: {
            ACCESS_TOKEN: ACCESS_TOKEN,
            Refresh: REFRESH_TOKEN,
          },
        });
        const NewAccess_Token = data.data.ACCESS_TOKEN;
        const NewRefresh_Token = data.data.REFRESH_TOKEN;
        originalRequest.headers = {
          "Content-Type": "application/json",
          Authorization: "Bearer" + NewAccess_Token,
        };
        sessionStorage.setItem("Authorization", NewAccess_Token);
        sessionStorage.setItem("Refresh", NewRefresh_Token);
        return await axios(originalRequest);
      } catch (err) {
        console.log(err);
      }
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
