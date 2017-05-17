import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        wordEntries: [],
        newWordEntry: {word: "", username: "", comment: ""},
        selectedWordEntry: {},
        connect: false
    },
    mutations: {
        SET_WORD_ENTRIES(state, wordEntries) {
            state.wordEntries = wordEntries;
        },
        SET_NEW_WORD_ENTRY(state, wordEntry) {
            state.newWordEntry = wordEntry;
        },
        SELECT_WORD_ENTRY(state, wordEntry) {
            state.selectedWordEntry = wordEntry;
        },
        DESELECT_WORD_ENTRY(state) {
            state.selectedWordEntry = {};
        },
        ADD_WORD_ENTRY(state) {
            state.wordEntries.push(state.newWordEntry);
        },
        CLEAR_NEW_WORD_ENTRY(state){
            state.newWordEntry = {word: "", username: "", comment: ""};
        }
        
        /* Сокеты */

        SOCKET_CONNECT: (state,  status ) => {
            state.connect = true;
        }
    },
    actions: {
        refreshAll({commit}){
            let words = Vue.resource("api/words/");
            return words.get().then((res) => {
                commit('SET_WORD_ENTRIES', res.body);
            });
        },
        selectWordEntry({commit}, wordEntry){
            commit('SELECT_WORD_ENTRY', wordEntry)
        },
        deselectWordEntry({commit}){
            commit('DESELECT_WORD_ENTRY')
        },
        setNewWordEntry({commit}, wordEntry){
            commit('SET_NEW_WORD_ENTRY', wordEntry)
        },
        addWordEntry({commit, state}){
            let words = Vue.resource("api/words/");
            words.save(state.newWordEntry).then((res) => {
                commit('ADD_WORD_ENTRY');
                commit('CLEAR_NEW_WORD_ENTRY');

            });
        },
        clearNewWordEntry({commit}){
            commit('CLEAR_NEW_WORD_ENTRY');
        }

            /* Сокеты */

        socket_newWord({commit, state}, message){
            commit('ADD_WORD_ENTRY', message.message);
        }
    },
    getters: {
        newWordEntry: state => state.newWordEntry,
        selectedWordEntry: state => state.selectedWordEntry,
        wordEntries: state => state.wordEntries
    }
});
