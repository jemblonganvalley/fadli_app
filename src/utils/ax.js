import axios from "axios"

const ax = axios.create({
	baseURL: "http://localhost:8080/api",
	responseType: "json",
	withCredentials: true,
})

export default ax
