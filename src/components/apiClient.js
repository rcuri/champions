import axios from 'axios';

const BASE_URI = 'http://localhost:5000/api';

const client = axios.create({
 baseURL: BASE_URI,
 json: true
});

class APIClient {


getPlayer(player){
    return this.perform('get', `/players/${player.player_name}`);
}


 async perform (method, resource, data) {
   return client({
     method,
     url: resource,
     data,
     
   }).then(resp => {
     return resp.data ? resp.data : [];
   })
 }
}

export default APIClient;