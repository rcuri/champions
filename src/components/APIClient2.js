import axios from 'axios';

const BASE_URI = 'https://comparenba-api-heroku.herokuapp.com/api';

const client = axios.create({
 baseURL: BASE_URI,
 json: true
});

class APIClient2 {

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

export default APIClient2;