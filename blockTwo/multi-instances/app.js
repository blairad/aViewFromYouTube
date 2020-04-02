const one = new Vue ({
    el: "#app-1",
    data: {
        title: "Vue app one"
    },
    methods: {

    },
    computed: {
        greet: function(){
            return 'hello from app one'
        }
    }
})

const two = new Vue ({
    el: "#app-2",
    data: {
        title: "Vue app two"
    },
    methods: {
        changeTitle: function(){
            one.title = "changed from two"
        }
    },
    computed: {
        greet: function(){
            return 'this is not app one. this is app two'
        }
    }
});

two.title = 'changed from outside. the things you can do'