import axios from 'axios';
import store from '../store';
import qs from 'qs';


export function getUsers(){
  return axios.get('...')
              .then(result=> { return result.data })
}
