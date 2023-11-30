/**
 * It's suggested to configure the RESTful endpoints in this file
 * so that there is only one source of truth, future update of endpoints
 * could be done from here without refactoring on multiple places throughout the app
 */
const API = {
  auth: {
    login: '/login',
    signUp: '/signup',
  },
};

const BASE_URL = process.env.NODE_ENV === "production" 
? "http://localhost:3010/api/" : "http://localhost:3010/api/";


export { API, BASE_URL };
