import axios from 'axios';

const url = 'https://api.rootnet.in/covid19-in/stats/latest';

export const fetchData = async () => {

  try {
    const {data}= await axios.get(url);
    return ({data});
  } catch (error) {
    
  }
};