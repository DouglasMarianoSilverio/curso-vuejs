new Vue({
    el : "#app",
    data :{
  
    iEnergiaJogador : 100,
    iEnergiaMonstro : 100,
    mensagem:null,

    jogoIniciado : false,

    },
    watch: {
        
    },
    computed: {
        energiaJogador(){
          return `${this.iEnergiaJogador}%`
        },
        energiaMostro(){
            return `${this.iEnergiaMonstro}%`
        },
        barraJogador(){
            return {
                   'bg-success':this.iEnergiaJogador >20,
                   'bg-danger':this.iEnergiaJogador <= 20
                }
            },
            barraMonstro(){
                return {
                       'bg-success':this.iEnergiaMonstro >20,
                       'bg-danger':this.iEnergiaMonstro <= 20
                    }
                }
        },
    methods: {
        Ataque(){
            this.iEnergiaJogador -= Math.floor(Math.random() * 7);
            this.iEnergiaMonstro -=  Math.floor(Math.random() * 5);

        },
        AtaqueEspecial(){
            this.iEnergiaJogador-= Math.floor(Math.random() * 7);
            this.iEnergiaMonstro -= Math.floor(Math.random() * 10);

        },
        Curar(){
            this.iEnergiaJogador +=   Math.floor(Math.random() * 7);
            this.iEnergiaJogador -= Math.floor(Math.random() * 7);

        },
        Desistir(){
                this.mensagem="Você desistiu";
                this.jogoIniciado=false;
        },
        IniciarJogo(){
            this.jogoIniciado = true;
            this.iEnergiaJogador=100;
            this.iEnergiaMonstro=100;
            this.mensagem=null;
        }
    },

})