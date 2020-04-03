new Vue ({
    el: "#app",
    data: {
        output: "your favourite food",
        website: "https://youtu.be/rSyFM2FANtk"
    },
    methods: {
        readRefs: function() {
            this.$refs;
            console.log(this.$refs.test.innerText)
            this.output = this.$refs.input.value
            //use these values to updata values in our data
        }
    }

})