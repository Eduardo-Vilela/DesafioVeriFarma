// import axios from "axios";

// export const Movies = type => {
//   return axios.create({
//     baseURL: `http://www.omdbapi.com/?apikey=${process.env.VUE_APP_MOVIEOMB_KEY}&${type}`
//   });
// };
export default defineEventHandler(() =>{
  return { message: 'hello world!'}
})