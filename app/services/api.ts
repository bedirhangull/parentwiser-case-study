import 'react-native-url-polyfill/auto';
import { SimpleCrudApi, Configuration } from '../api';
import axios from 'axios';
import { API_URL, API_USERNAME, API_PASSWORD} from "@env"

interface IAuth {
    Username: string
    Password: string
}

const auth : IAuth = {
    Username: API_USERNAME,
    Password: API_PASSWORD
}

const config = new Configuration();
const axiosInstance = axios.create({
  auth: {
    username: auth.Username,
    password: auth.Password
  },
});

const userApi = new SimpleCrudApi(config, API_URL, axiosInstance);

export { userApi };