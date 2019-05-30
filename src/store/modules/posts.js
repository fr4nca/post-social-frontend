import axios from '../../services/api'

const state = {
  posts: []
}

const getters = {
  allPosts: state => state.posts
}

const actions = {
  async getAllPosts({ commit }) {
    const res = await axios.get('/posts')
    commit('setPosts', res.data)
  }
}

const mutations = {
  setPosts: (state, posts) => (state.posts = posts)
}

export default {
  state,
  getters,
  actions,
  mutations
}
