new Vue({
    el:"#vue-app",

    data: {
        name: "Andrew",
        job: ":(",
        website: 'https://vuejs.org/',
        websiteTag: '<a href="https://vuejs.org/">Website</a>',
        age: 34,
        x: 0,
        y: 0,
        name2: '',
        age2: ''
    },

    methods: {
        greet: function(time){
            // this.name is really this.data.name. but vue lifts the data up to the instance of vue in this case new Vue
            return "Good " + time + ' ' + this.name;
        },
        //the argument is related to the parameter in the html depending on button. either (1) or (10)
        // <h2>Events</h2>
         add: function(inc){
            this.age += inc;
        },
        subtract: function(dec) {
            this.age -= dec;
        },

        //CANVAS
        updateXY: function(event){
            //offsetX/Y are taken from the top left of the canvas made from the div
            this.x = event.offsetX;
            // this.x = event.pageX;
            this.y = event.offsetY;
            // this.y = event.pageY;
        },
        // KEYBOARD EVENTS
        click: function(){
            alert('you clicked me')
        },
        logName: function(){
            console.log('you entered your name')
        },
        logAge: function(){
            console.log('you entered your age')
        }
    }
});