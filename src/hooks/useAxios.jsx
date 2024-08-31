import axios from "axios";

export const useAxios = () => axios.create({baseURL: 'https://dummyjson.com/'})