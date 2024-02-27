import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8180/api/points";


class PointsService {
    refresh_points(keycloak) {
        return axios.get(USER_API_BASE_URL, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + keycloak.token
            }
        }).catch((error) => {
            if (error.response.status === 401)
                keycloak.login();
        })
    }

    post_point(x, y, r, keycloak) {
        return new Promise((resolve, reject) => {
            axios
                .post(USER_API_BASE_URL,
                    {
                        x: x,
                        y: y,
                        r: r
                    },
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer ' + keycloak.token
                        }
                    })
                .then((response) => {
                    resolve(response.data);
                })
                .catch((error) => {
                    reject(error);
                    if (error.response.status === 401)
                        keycloak.login();
                });
        });
    }

    delete_points(keycloak) {
        return axios.delete(USER_API_BASE_URL, {
            headers: {
                'Authorization': 'Bearer ' + keycloak.token
            }
        }).catch((error) => {
            if (error.response.status === 401)
                keycloak.login();
        })
    }
}

export default new PointsService()