import axios from 'axios';

const checkEmail = async email => {
  const res = await axios({
    method: 'post',
    url: 'https://backend-healthyhub.onrender.com/api/users/check-email',
    data: {
      email,
    },
  });
  return res;
};

export default checkEmail;
