import axios from 'axios';

const signUp = async userData => {
  await axios('https://backend-healthyhub.onrender.com/api/users/register', {
    method: 'post',
    data: userData,
  });
};

export default signUp;

// MODEL

// {
//   "name":"User_Name",
//   "email":"user_email",
//   "password":"qwerty123",
//   "goal": "Maintain",
//   "gender":"male",
//   "age":"32",
//   "height":"186",
//   "weight":"75",
//   "activity":"1.5"
//   }
