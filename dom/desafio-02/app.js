new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta(){
            alert('Alerta!')
        },
        armazenarValor(e){
            console.log( e.target.value)
          this.valor = e.target.value
        }
    },
})