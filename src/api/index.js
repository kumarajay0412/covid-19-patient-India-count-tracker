import axios from 'axios';

const url = 'https://api.rootnet.in/covid19-in/stats/latest';

export const fetchData = async (country) => {
  if (country) {
    try {
      const {data:{data}} = await axios.get(url);
      return {data};
    } catch (error) {
      
    }
  }
  else{
  try {
    const {data:{data,lastRefreshed}} = await axios.get(url);
    return {data,lastRefreshed};
  } catch (error) {
    
  }
}
};
export const fetchCountries = async () => {
  try {
    const { data: { data } } = await axios.get(url);

    return data.regional.map((country) => country.loc);
  } catch (error) {
    return error;
  }
};
