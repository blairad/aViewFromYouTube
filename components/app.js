

Vue.component('greeting',{
    // template: '<p>I am a reusable component</p>',
    template: '<p>I am {{ name }} <button @click="changeName">Change Name</button></p>',
    data: function() {
        return {
            name: 'Link'
        }
    },
    methods: {
        changeName: function(){
            this.name = "Zelda"
        }
    }
})

new Vue ({
    el: "#app-1"
})

new Vue ({
    el: "#app-2"
})