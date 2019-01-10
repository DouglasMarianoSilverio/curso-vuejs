new Vue({
  el: '#desafio',
  data: {
    classe1:'destaque'

  },
  methods: {
    iniciarEfeito: function() {
     setInterval(() => {
       this.classe1 = this.classe1 == 'destaque'
       ?'encolher' : 'destaque'
     }, 1000);
    },
    startProgress(){

    }
  }
});
