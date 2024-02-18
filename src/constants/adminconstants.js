const BASE_URL = "http://localhost:3000/api/v1/";

const ApiConstants = {
  SIGN_IN: `${BASE_URL}admin/sign-in`,
  SIGN_OUT: `${BASE_URL}admin/sign-out`,
  GET_ALL_FACULTY: `${BASE_URL}faculty/alldetails`,
  GET_ALL_PARENT: `${BASE_URL}parent/alldetails`,
  GET_ALL_STUDENT: `${BASE_URL}student/alldetails`,
  GET_ALL_COURSE: `${BASE_URL}course/alldetails`,
};

export default ApiConstants;
