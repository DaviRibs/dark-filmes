import axios from "axios";     // importa axios 

const instance = axios.create({                                     // url API
    baseURL: "https://api-dark-films.onrender.com"
})


export default instance;             // vai deixa acessivel em outros lugares