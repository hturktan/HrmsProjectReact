import axios from "axios"

export default class CandidateService{
    getCandidates(){
        return axios.get("http://localhost:8080/api/candidates/getall")
    }
    
    getById(id){
        return axios.get("http://localhost:8080/api/candidates/getbyid?candidateId=" + id)
    }
    
}