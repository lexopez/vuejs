import { createRandomPost } from "@/utils/createPost";
import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      posts: Array.from({ length: 20 }, () => createRandomPost()),
      searchQuery: "",
    };
  },
  mutations: {
    ADD_POST(state, post) {
      state.posts.unshift(post);
    },
    CLEAR_POSTS(state) {
      state.posts = [];
    },
    SET_SEARCH_QUERY(state, query) {
      state.searchQuery = query;
    },
  },
  getters: {
    filteredPosts(state) {
      return state.searchQuery
        ? state.posts.filter((post) =>
            `${post.title.toLowerCase()} ${post.body.toLowerCase()}`.includes(
              state.searchQuery.toLowerCase(),
            ),
          )
        : state.posts;
    },
    postCount(state) {
      return state.posts.length;
    },
  },
});
