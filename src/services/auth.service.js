import axios from "axios";

const API_URL = "http://192.168.2.21:6789/v1.0/";

class AuthService {
    login(username, password) {
        return axios
        .post(API_URL + "Auth", {
            Usrname: username,
            pwd : password
        })
        .then((response) => {
            if (response.data.token) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }

            return response.data;
        });
    }

    logout() {
        localStorage.removeItem("user");
    }

    register(username, email, password) {
        return axios.post(API_URL + "signup", {
            username,
            email,
            password,
        });
    }
}

export default AuthService;