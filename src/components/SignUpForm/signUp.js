import axios from 'axios';

const signUp = async data => {
  // const res = await axios({
  //   method: 'post',
  //   url: 'https://backend-healthyhub.onrender.com/api/users/register',
  //   data: {
  //     ...data,
  //   },
  // });
  console.log(data);
  // return res;
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
