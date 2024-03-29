import axios from 'axios';

const BASE_URI = 'https://699zjvu4ta.execute-api.us-east-1.amazonaws.com/';

const client = axios.create({
 baseURL: BASE_URI,
 json: true
});

class APIClient2 {

getPlayer(player){
    return this.perform('get', `players/${player.player_name}`);
}

 async perform (method, resource, data) {
   return client({
     method,
     url: resource,
     data,
     
   }).then(resp => {
     return resp.data[0] ? resp.data[0] : [];
   })
 }
}

export default APIClient2;