import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#f8615e',//dark
                secondary: '#f8f2ee',//light
                dark:"#212121"
                // accent: '#8c9eff',
                // error: '#b71c1c',
                // text_color:' #555555', 
                // background:'#f5f4f0 ',
                // primary_background_color:"#0f5d65",
                // primary_text_color:"#f8615e",

                // primary_text: "#f2eae8",
                // primary_background:"#f8615e"

            },
        },
    },
});
// 