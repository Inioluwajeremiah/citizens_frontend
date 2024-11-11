// export const endpoints = {
//   baseUrl: "http://localhost:7000/api/v1/",
//   policyUrl: "policy/",
// };

// "proxy": " https://citizens-backend-lzzl.onrender.com",
// "proxy": "http://localhost:7000",
export const endpoints = {
  // baseUrl: "http://localhost:7000/api/v1/",
  baseUrl: "https://citizens-backend-lzzl.onrender.com/api/v1/",
  proxyUrl: "https://citizens-backend-lzzl.onrender.com",
  policyUrl: "policy",
  blogUrl: "blog",
} as const;

// type Endpoints = typeof endpoints;
