import axios from 'axios'

const api_url = "http://localhost:3000/datlich/them";


class callApi{


    getuser(){
      return axios.get(api_url);
    }
    adduser(datlich){
      return axios.post(api_url,datlich);
    }
}
export default new callApi()