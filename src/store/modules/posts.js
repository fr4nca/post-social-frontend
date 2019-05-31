import axios from "../../services/api";
import moment from "moment";

const state = {
  posts: []
};

const getters = {
  allPosts: state => state.posts
};

const actions = {
  async getAllPosts({ commit }) {
    const res = await axios.get("/posts");
    res.data.map(
      post =>
        (post.created_at = moment(post.created_at)
          .utc()
          .format("DD/MM/YYYY HH:mm:ss"))
    );
    commit("setPosts", res.data);
  }
};

const mutations = {
  setPosts: (state, posts) => (state.posts = posts)
};

export default {
  state,
  getters,
  actions,
  mutations
};
