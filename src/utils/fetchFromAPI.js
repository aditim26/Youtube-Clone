import axios from 'axios'

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'
const options = {
  method: 'GET',
    url: BASE_URL,
    params: {
      maxResults:'50'
    },
    headers: {
      'X-RapidAPI-Key': '62e9c2ee47mshd890e77d9dc10cdp1f8258jsn4777abde4d89',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const fetchFromAPI = async(url) =>{
    const {data} = await axios.get(`${BASE_URL}/${url}`, options)
    return data;
  }