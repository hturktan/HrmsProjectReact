import axios from "axios"

export default class WorkingHourService {
    getWorkingHours(){
        return axios.get("http://localhost:8080/api/workinghours/getall")
    }
}