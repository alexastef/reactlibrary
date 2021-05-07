import axios from "axios";

export default {
  getBooks: (query) => {
    return axios.get("/api/google", { params: { q: `title:${query}`} });
  }
}