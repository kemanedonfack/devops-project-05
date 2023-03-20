// export const environment = {
//   production: true,
//   apiBaseUrl: "http://localhost:9090/api/tutorials",
// };

export const environment = {
  production: true,
  apiBaseUrl: window["env"]["apiUrl"] || "default",
};
