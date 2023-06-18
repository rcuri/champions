import axios from 'axios';

const BASE_URI = 'https://qbrlgxkhtd.execute-api.us-east-1.amazonaws.com/';

const client = axios.create({
 baseURL: BASE_URI,
 json: true
});

class APIClient2 {

getPlayer(player){
    return this.perform('get', `player?player_name=${player.player_name}`);
}

 async perform (method, resource, data) {
   return client({
     method,
     url: resource,
     data,
     
   }).then(resp => {
    console.log(resp)
     return resp ? resp : [];
   })
 }
}

export default APIClient2;