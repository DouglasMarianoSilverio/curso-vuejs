new Vue({
    el:"#desafio",
    data:{
        nome:'Douglas Mariano',
        idade:33,
        urlImagem:"https://www.holistics.io/blog/content/images/2017/10/angtovu@2x-8.png"
    },
    methods: {
        getIdadeVezes3(){
            return this.idade * 3
        },
        getRandom(){
            return Math.random()
        }
    },
})