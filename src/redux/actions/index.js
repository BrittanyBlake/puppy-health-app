// import axios from 'axios';

export const loginUser = userObj => ({
  type: 'LOGIN_USER',
  payload: userObj,
});

export const logoutUser = () => ({
  type: 'LOGOUT_USER',

});

export const formErrors = errors => ({
  type: 'GET_ERRORS',
  payload: errors,
});

// const userPostFetch = user => dispatch => fetch('http://localhost:3000/signup', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     Accept: 'application/json',
//   },
//   body: JSON.stringify({ user }),
// })
//   .then(resp => resp.json())
//   .then(data => {
//     if (data.message) {
//       // Here you should have logic to handle invalid creation of a user.
//       // This assumes your Rails API will return a JSON object with a key of
//       // 'message' if there is an error with creating the user, i.e. invalid username
//     } else {
//       localStorage.setItem('token', data.data.auth_token);
//       dispatch(loginUser(data.user));
//     }
//   });
// // export const userPostFetch = user => async dispatch => {
// //   const data = await axios.post('http://localhost:3000/signup', {
// //     users: {
// //       email: user.email,
// //       name: user.name,
// //       password: user.password,
// //       password_confirmation: user.password_confirmation,
// //     },
// //   });

// //   localStorage.setItem('token', data.token);
// //   console.log(localStorage.getItem('token'));
// //   dispatch(loginUser(data.user));
// // };

// export const userLoginFetch = user => dispatch => fetch('http://localhost:3000/auth/login', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     Accept: 'application/json',
//   },
//   body: JSON.stringify({ user }),
// })
//   .then(resp => resp.json())
//   .then(data => {
//     if (data.message) {
//       // Here you should have logic to handle invalid login credentials.
//       // This assumes your Rails API will return a JSON object with a key of
//       // 'message' if there is an error
//     } else {
//       localStorage.setItem('token', data.data.auth_token);
//       dispatch(loginUser(data.user));
//     }
//   });

// // export const userLoginFetch = user => async dispatch => {
// //   const data = await axios.post('http://localhost:3000/auth/login', {
// //     users: {
// //       email: user.email,
// //       password: user.password,
// //     },
// //   });
// //   localStorage.setItem('token', data.data.auth_token);
// //   console.log(localStorage.getItem('token'));
// //   dispatch(loginUser(data.user));
// // };

// export default userPostFetch;
