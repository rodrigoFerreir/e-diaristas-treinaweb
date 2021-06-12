import axios from "axios";

const uri = "https://ediaristas-workshop.herokuapp.com";

export const apiService = axios.create({
  baseURL: uri,
  headers: {
    "Content-Type": "application/json",
  },
});
