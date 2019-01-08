new Vue({
    el: '#desafio',
    computed: {
        resultado(){
            return this.valor!=37?
            'diferente de 37' : 'igual a 37'
        }
    },
    data: {
        valor: 0
    },
    watch: {
        resultado(novo,antigo){
            setTimeout(() => {
                this.valor=0
            }, 5000);
        }
    },
});