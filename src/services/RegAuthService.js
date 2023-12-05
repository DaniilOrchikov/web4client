import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8180/api/authorization";

class PointsService {
    reg_user(){
        return new Promise((resolve, reject) => {
            axios
                .post(USER_API_BASE_URL,
                    {
                        name: "Name",
                        login: "Login",
                        password: "Password"
                    },
                    {headers: {'Content-Type': 'application/json'}})
                .then((response) => {
                    resolve(response.data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }
}

export default new PointsService()