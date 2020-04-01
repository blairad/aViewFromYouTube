new Vue ({
    el: "#app",
    data: {
        age: 20,
        a: 0,
        b: 0
    },
    methods: {
        // addToA: function(){
        //     console.log('add to A')
        //     return this.a + this.age
        // },
        // addToB: function(){
        //     console.log('add to B')
        //     return this.b + this.age
        // }
    },
    computed: {
        addToA: function(){
            console.log('add to A')
            return this.a + this.age
        },
        addToB: function(){
            console.log('add to B')
            return this.b + this.age
        },
    }
})