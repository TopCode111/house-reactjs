import axios from "axios";

class MicroCmsService {
    
    constructor() {
        this.axiosObj = axios.create({
            baseURL: "https://2o-house.microcms.io/api/v1/",
            headers: {
                'Content-Type': 'application/json',
                "X-MICROCMS-API-KEY": "6HxldKKia18wUZQjoCtT2JzXze6MeeSZ8g0Z"
            }
        })
    }

    getBlogs = () => {
        return new Promise((resolve, reject) => {
            this.axiosObj.get("blogs").then(res => {
                resolve(res.data)
            }).catch(err => {
                reject(err);
            })
        })
    }
}

const service = new MicroCmsService();

export default service;