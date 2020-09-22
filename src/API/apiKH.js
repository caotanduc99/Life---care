import axios from 'axios'

const api_url = "http://localhost:3000/khachhang/them";


class apiKH{


    getuser(){
      return axios.get(api_url);
    }
    adduser(users){
      return axios.post(api_url,users);
    }
}
export default new apiKH()