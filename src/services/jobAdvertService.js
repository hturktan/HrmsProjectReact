import axios from "axios"

export default  class JobAdvertService{
    getJobAdverts(){
        return axios.get("http://localhost:8080/api/jobadverts/getall")
    }

    getById(id){
        return axios.get("http://localhost:8080/api/jobadverts/getbyid?id="+ id)
    }

    add(values){
        return axios.get("http://localhost:8080/api/jobadverts/add",values).then(response => {console.log(response)}).catch(error=>{console.log(error.response)})
    }
}