new Vue({
  el: '#desafio',
  data: {
    classe1: 'destaque',
    aplicarLinha: true,
    classeCSS: 'azul',
    classeCSS2: 'linha',
    cor: 'blue',
    width: '1%',
    altura: 50

  },
  methods: {
    iniciarEfeito: function () {
      setInterval(() => {
        this.classe1 = this.classe1 == 'destaque' ?
          'encolher' : 'destaque'
      }, 1000);
    },
    startProgress() {
      let valor =0;
      const temporizadpr =    setInterval(() => {
         valor+=5;
       this.width = `${valor}%`
        if(valor==100) clearInterval(temporizadpr)
      }, 100);
    }
  },
  computed: {
    barra(){
      return {
        width: `${this.tamanho}px`,
        height: `${this.altura}px`,
        backgroundColor:this.cor
      }
    }
  },
});