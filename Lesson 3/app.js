const app = Vue.createApp({
  data() {
    return {
      books: [
        {
          name: "Don Quixote",
          author: "Miguel de Cervantes",
          copies: "500 million",
          cover: "assets/DonQuixote.jpg",
          fav: false,
        },
        {
          name: "A Tale of Two Cities",
          author: "Charles Dickens",
          copies: "200 million",
          cover: "assets/ATaleofTwoCities.jpg",
          fav: false,
        },
        {
          name: "The Lord of the Rings",
          author: "J.R.R. Tolkien",
          copies: "150 million",
          cover: "assets/TheLordoftheRings.jpg",
          fav: true,
        },
        {
          name: "The Little Prince",
          author: "Antoine de Saint-Exupery",
          copies: "142 million",
          cover: "assets/TheLittlePrince.jpg",
          fav: false,
        },
        {
          name: "Harry Potter and the Sorcerer’s Stone",
          author: "J.K. Rowling",
          copies: "107 million",
          cover: "assets/HarryPotterandtheSorcerer’sStone.jpg",
          fav: true,
        },
      ],
    };
  },
  methods: {
    handleFav(b) {
      b.fav = !b.fav;
    },
  },
  computed: {
    filteredBooks() {
      return this.books.filter((book) => book.fav);
    },
  },
});

app.mount("#app");
