import axios from 'axios';

const ipInfoKey = process.env.REACT_APP_IP_INFO_API_KEY;

export const getUserLocations = () => {
  const fetchUserLocations = async () => {
    const response = await axios.get(`https://api.ipify.org/?format=json`);

    const { data } = await axios.get(`https://ipinfo.io/${response.data.ip}?token=${ipInfoKey}`);

    return data.loc;
  };

  return fetchUserLocations().then((res) => res.split(','));
};
