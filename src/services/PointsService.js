import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8180/api/points";

class PointsService {
    refresh_points() {
        return axios.get(USER_API_BASE_URL, {headers: {'Content-Type': 'application/json'}})
    }
    post_point(x, y, r) {
        return new Promise((resolve, reject) => {
            axios
                .post(USER_API_BASE_URL,
                    {
                        x: x,
                        y: y,
                        r: r
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
    delete_points() {
        return axios.delete(USER_API_BASE_URL)
    }
}

export default new PointsService()