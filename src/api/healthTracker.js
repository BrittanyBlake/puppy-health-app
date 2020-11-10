import axios from 'axios';

const PuppyHealthApi = (() => {
  const signUpUser = user => {
    const promise = axios.post('http://localhost:3000/signup', {
      users: {
        email: user.email,
        name: user.name,
        password: user.password,
        password_confirmation: user.password_confirmation,
      },
    });
    const promiseData = promise.then(res => res.data);
    promise.catch(error => {
      throw error;
    });
    return promiseData;
  };

  return { signUpUser };
})();

export default PuppyHealthApi;
