import axios from 'axios';

const apiCalls = {
  addFavorite:function (data){
    return axios.post("api/user/addFavorite/" + data.id, data)
  }
};

export default apiCalls;