const app = Vue.createApp({
  data() {
    return {
      title: "The Last Samurai",
      details: "Captain Nathan Algren is hired to train the Japanese army to fight a Samurai rebellion. However, he ends up embracing the people of Samurai culture after he gets captured by them.",
      rating: 2,
      showDetails: true,
      x: 0,
      y: 0
    };
  },
  methods: {
    handleNext() {
      this.title = "The Last Airbender",
      this.details = "The Last Airbender is a 2010 American action-adventure fantasy film written, co-produced and directed by M. Night Shyamalan.",
      this.rating = 3
    },
    handleShowDetails() {
      this.showDetails = !this.showDetails
    },
    handleEvent(e, data){
      console.log(e, e.type);
      if (data) {
        console.log(data);
      }
    },
    handleMouseMove(e) {
      this.x = e.offsetX
      this.y = e.offsetY
    }
  },
});

app.mount("#app");
