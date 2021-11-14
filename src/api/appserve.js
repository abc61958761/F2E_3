import axios from "axios";


const appserve = axios.create({
  baseURL: process.env.VUE_APP_URL
});

// appserve.interceptors.response.use(
//   function(response) {
//     // Do something with response data
//     return response;
//   },
//    function(error) {
//     if (error.response) {
//       switch (error.response.status) {
//         case 401:
//           store.commit("UPDATE_USER", {});
//           router.push("/login");
//           break;
//         // case 404:
//         //   // go to 404 page
//         //   router.push("/404");
//         //   break;
//         case 403:
//           store.dispatch("logout").then(() => {
//             router.push("/login").catch(() => {})
//           });

//           break;
//         case 500:
//           store.commit("UPDATE_ERROR_STATUS", {
//             openErrorDialog: true,
//             errorMessage: FormatErrorMessage(error),
//           });
//           break;
//         default:
//           console.log("error ==========");
//           console.log(FormatErrorMessage(error));
//           break;
//       }
//     }
//     // if (!window.navigator.onLine) {
//     //   alert("網路出了點問題，請重新連線後重整網頁");
//     //   return;
//     // }
//     return Promise.reject(error);
//   }
// );

export default appserve;
