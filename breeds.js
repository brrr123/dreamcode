const urlParams = new URLSearchParams(window.location.search);
const breed = urlParams.get("breed")
const API_KEY =  "DEMO-API-KEY" // Replace this with your API Key
 Vue.createApp({
     data() {
         return {
             breedInfo: []

         };
     },
     created() {
         this.fetchBreed();

     },
     methods: {

         fetchBreed() {
             fetch('https://api.thecatapi.com/v1/breeds/' + breed, {
                 headers: {
                     'x-api-key': API_KEY
                 }
             })
                 .then((response) => {
                     response.json().then((breedResponse) => {
                         this.breedInfo = breedResponse;
                         document.title = this.breedInfo.name + " Information";
                     });
                 })
                 .catch((err) => {
                     console.error(err);
                 });
         },
     }
 }).mount('#app');