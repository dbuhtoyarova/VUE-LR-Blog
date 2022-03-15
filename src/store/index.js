import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
import category from "@/components/Category";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        categories: [],
        posts: [],
    },
    getters: {
        CATEGORIES: state => state.categories,
        POSTS: state => state.posts,
    },

    mutations: {
        SET_CATEGORIES: (state, payload) => {
            state.categories = payload;
        },
        SET_POSTS: (state, payload) => {
            state.posts = payload;
        },
    },
    actions: {
        GET_CATEGORIES: async (context, payload) => {
            let {data} = await axios.get('http://mysite/api/categories');
            context.commit('SET_CATEGORIES', data);
        },
        GET_POSTS: async (context, payload) => {
            let {data} = await axios.get('http://mysite/api/posts');
            const posts = data.map((post) => {
                post.img = 'http://mysite/' + post.img;
                const categories = context.getters.CATEGORIES;
                const post_category = categories.find((category) => {
                    return category.id === post.category_id;
                });
                post.category = post_category ? post_category.title : 'unknown';
                return post;
            });
            context.commit('SET_POSTS', posts);
        },
        DELETE_CATEGORIES: async (context, payload) => {
            let {data, status} = await axios.delete('http://mysite/api/categories/' + payload);
            if (status === 204) {
                context.commit('SET_CATEGORIES', context.getters.CATEGORIES.filter((category) => category.id !== payload));
            }
        },
        DELETE_POST: async (context, payload) => {
            let {data, status} = await axios.delete('http://mysite/api/posts/' + payload);
            if (status === 204) {
                context.commit('SET_POSTS', context.getters.POSTS.filter((post) => post.id !== payload));
            }
        },
        ADD_CATEGORY: async (context, payload) => {

            let {data, status} = await axios.post('http://mysite/api/categories', {...payload, alias: payload.title.toLowerCase()});
            if (status === 201) {
                context.commit('SET_CATEGORIES', [...context.getters.CATEGORIES, data]);
            }
        },
        UPDATE_CATEGORY: async (context, payload) => {
            let {data, status} = await axios.put('http://mysite/api/categories/' + payload.id, {...payload, alias: payload.title.toLowerCase()});
            if (status === 200) {
                context.commit('SET_CATEGORIES', context.getters.CATEGORIES.map(category => {
                    if (category.id === data.id) {
                        return data;
                    }
                    return category;
                }));
            }
        },
    },
    modules:
        {}
})
