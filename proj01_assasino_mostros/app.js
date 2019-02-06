new Vue({
    el : "#app",
    data :{
  
    iEnergiaJogador : 100,
    iEnergiaMostro : 100,

    },
    watch: {
        
    },
    computed: {
        energiaJogador(){
          return `${this.iEnergiaJogador}%`
        },
        energiaMostro(){
            return `${this.iEnergiaMostro}%`
        }
    },
    methods: {
        Ataque(){
            this.iEnergiaJogador -= Math.floor(Math.random() * 7);
            this.iEnergiaMostro -=  Math.floor(Math.random() * 5);

        },
        AtaqueEspecial(){
            this.iEnergiaJogador-= Math.floor(Math.random() * 7);
            this.iEnergiaMostro -= Math.floor(Math.random() * 10);

        },
        Curar(){
            this.iEnergiaJogador +=   Math.floor(Math.random() * 7);
            this.iEnergiaJogador -= Math.floor(Math.random() * 7);

        }
    },

})