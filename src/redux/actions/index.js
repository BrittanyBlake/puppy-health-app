const loginUser = userObj => ({
  type: 'LOGIN_USER',
  payload: userObj,
});

const userPostFetch = user => dispatch => fetch('http://localhost:3001/api/v1/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  body: JSON.stringify({ user }),
})
  .then(resp => resp.json())
  .then(data => {
    if (data.message) {
      // Here you should have logic to handle invalid creation of a user.
      // This assumes your Rails API will return a JSON object with a key of
      // 'message' if there is an error with creating the user, i.e. invalid username
    } else {
      localStorage.setItem('token', data.token);
      dispatch(loginUser(data.user));
    }
  });

export default userPostFetch;
