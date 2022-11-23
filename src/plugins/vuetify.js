import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#fbe8d4',
                ashColor:'#d5cfb8',
                secondary: '#991a1a',
                accent: '#8c9eff',
                error: '#b71c1c',
                text_color:' #555555', 
                background:'#f5f4f0 '
            },
        },
    },
});
// 