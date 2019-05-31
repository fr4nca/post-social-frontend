import axios from '../../services/api'
import moment from 'moment'

const state = {
  posts: []
}

const getters = {
  allPosts: state => state.posts
}

const actions = {
  async getAllPosts({ commit }) {
    const res = await axios.get('/posts')
    res.data.map(
      post =>
        (post.created_at = moment(post.created_at)
          .utc()
          .format('DD/MM/YYYY HH:mm:ss'))
    )
    commit('setPosts', res.data)
  },
  async addPost({ commit }, post) {
    try {
      const { data: newPost } = await axios.post('/posts', post)
      newPost.created_at = moment(newPost.created_at)
        .utc()
        .format('DD/MM/YYYY HH:mm:ss')
      commit('addNewPost', newPost)
    } catch (e) {
      console.log(e.response.data)
    }
  }
}

const mutations = {
  setPosts: (state, posts) => (state.posts = posts),
  addNewPost: (state, post) => state.posts.unshift(post)
}

export default {
  state,
  getters,
  actions,
  mutations
}
