// //////////2번째 보류

// import axios from "axios";

// const instance = axios.create({
//   // 상대적인 URL을 인스턴스 메서드에 전달하려면 baseURL을 설정하는 것은 편리하다.
//   // URL(서버 주소) 예시 - http://127.0.0.1:5500
//   baseURL: "https://every-board.shop", //401error발생
//   //baseURL: "http://localhost:3001",
//   // 요청이 timeout보다 오래 걸리면 요청이 중단된다.
//   timeout: 1000,
// });

// instance.interceptors.request.use(
//   async config => {
//     const accessToken = sessionStorage.getItem("Refresh");
//     if (accessToken) {
//       config.headers.Authorization = `Bearer ${accessToken}`;
//       config.headers["Content-Type"] = "application/json";
//     } else {
//       console.error("No access token found");
//     }
//     return config;
//   },
//   error => {
//     console.error("Interceptor error:", error);
//     return Promise.reject(error);
//   },
// );

// instance.interceptors.response.use(
//   response => {
//     if (response.status === 404) {
//       console.log("404 페이지로 넘어가야 함!");
//     }

//     return response;
//   },
//   async function (error) {
//     if (error.response?.status === 401) {
//       const refreshToken = sessionStorage.getItem("Refresh");

//       if (refreshToken) {
//         try {
//           const response = await axios.post(
//             `https://every-board.shop/auth/token`,
//             {},
//             { headers: { Authorization: `Bearer ${refreshToken}` } },
//           );

//           const newAccessToken = response.data.Authorization;
//           sessionStorage.setItem("Authorization", newAccessToken);

//           // 실패한 요청의 config를 업데이트하여 새 엑세스 토큰을 설정합니다.
//           error.config.headers.Authorization = `Bearer ${newAccessToken}`;

//           // 실패한 요청을 다시 보냅니다.
//           return axios.request(error.config);
//         } catch (err: any) {
//           // 새로운 토큰 요청 또한 실패한 경우 로그인 페이지로 이동하거나 다른 처리를 합니다.
//           console.error("Error refreshing access token:", err.response);
//         }
//       }
//     }
//     return Promise.reject(error);
//   },
// );

// export default instance;

// 333333333
// import axios from "axios";

// const instance = axios.create({
//   baseURL: "https://every-board.shop",
//   timeout: 1000,
// });

// instance.interceptors.request.use(
//   function (config) {
//     const accessToken = sessionStorage.getItem("Authorization");
//     const refreshToken = sessionStorage.getItem("Refresh");

//     if (config.headers && accessToken && refreshToken) {
//       config.headers.authorization = `Bearer ${accessToken}`;
//       config.headers.refreshToken = `Bearer ${refreshToken}`;
//     }
//     return config;
//   },
//   function (error) {
//     console.log("request error", error);
//     return Promise.reject(error);
//   },
// );

// instance.interceptors.response.use(
//   function (response) {
//     console.log("get response", response);
//     return response;
//   },
//   async error => {
//     const {
//       config,
//       response: { status },
//     } = error;
//     if (status === 401) {
//       if (error.response.data.message === "expired") {
//         const originalRequest = config;
//         const refreshToken = await sessionStorage.getItem("Refresh");
//         const { data } = await axios.post(
//           `https://every-board.shop/auth/token`,
//           {},
//           { headers: { authorization: `Bearer ${refreshToken}` } },
//         );
//         const { accessToken: newAccessToken, refreshToken: newRefreshToken } =
//           data;

//         await sessionStorage.setItem("Authorization", newAccessToken);
//         await sessionStorage.setItem("Refresh", newRefreshToken);
//         originalRequest.headers.authorization = `Bearer ${newAccessToken}`;
//         return axios(originalRequest);
//       }
//     }
//     console.log("response error", error);
//     return Promise.reject(error);
//   },
// );
// export default instance;
