const API_KEY =  "DEMO-API-KEY" // Replace this with your API Key
Vue.createApp({
    data() {
        return {
            cats: []

        };
    },
    created() {
        this.fetchData();

    },
    methods: {

        fetchData() {
            fetch('https://api.thecatapi.com/v1/images/search?size=thumb&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=3', {
                headers: {
                    'x-api-key': API_KEY
                }
            })
                .then((response) => {
                    response.json().then((catsResponse) => {
                        this.cats = catsResponse;
                    });
                })
                .catch((err) => {
                    console.error(err);
                });
        },
    }
}).mount('#app');