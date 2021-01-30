import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        currentTopic: "",
        currentSubTopic: "",
        webdata: {}
    },
    getters: {},
    mutations: {
        setCurrentTopic(state, topic){
            state.currentTopic = topic;
        },
        setCurrentSubTopic(state, subtopic){
            state.currentSubTopic = subtopic;
        },
        emptyTopics(state){
            state.currentTopic = "";
            state.currentSubTopic ="";
            state.solutionLink= "";
            state.solActive= ""
        }
    }
});
