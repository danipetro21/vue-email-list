const { createApp } = Vue;

createApp({
    data() {
        return {

            emailList: [],
            status : false,
        }
    },
    mounted: async function() {
        var stop
        for (let i = 0; i < 10; i++) {
           await axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response)=> {
                    
                    var emailProva = response.data.response;
                    this.emailList.push(emailProva);
                    console.log(emailProva);
                    stop = response.data.success;
                    
                });
                
            }
            this.status = stop;
        
    }

}).mount("#app");
