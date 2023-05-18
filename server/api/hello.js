import axios from "axios";

export const Movies = type => {
  return axios.create({
    baseURL: `http://www.omdbapi.com/?apikey=c7485f5a&s&${type}`
  });
};