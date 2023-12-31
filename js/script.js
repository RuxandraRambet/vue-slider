'use strict';
// destrutturazione createApp
const { createApp } = Vue;

createApp({
  data() {
    return {
        slides: [
            {
                image: 'img/01.webp',
                title: 'Marvel\'s Spiderman Miles Morale',
                text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
            }, 
            {
                image: 'img/02.webp',
                title: 'Ratchet & Clank: Rift Apart',
                text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
            },
            {
                image: 'img/03.webp',
                title: 'Fortnite',
                text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
            }, 
            {
                image: 'img/04.webp',
                title: 'Stray',
                text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
            }, 
            {
                image: 'img/05.webp',
                title: "Marvel's Avengers",
                text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
            }
        ],    
        currentSlide: 0,
        autoPlay: null,
    };
  },
  methods: {
    next(){
        // console.log('ho cliccato su next');
        this.currentSlide++;

        if(this.currentSlide > this.slides.length - 1){
            this.currentSlide = 0;
        }
    },
    prev(){
        // console.log('ho cliccato su prev');
        this.currentSlide--;

        if(this.currentSlide < 0){
            this.currentSlide = this.slides.length - 1;
        }
    },
    changeImage(index){
        console.log(index);
        this.currentSlide = index;
    },
    stopAutoPlay(){
        clearInterval(this.autoPlay);
    },
    startAutoPlay(){
        this.autoPlay = setInterval(this.next, 3_000);
    },
  },

  mounted() {
    //this.autoPlay = setInterval(this.next, 3_000);
    this.startAutoPlay();

    // Versione con arrow function
    // setInterval(() => {
    //     this.next();
    // }, 3_000);
    
  },
}).mount('#app'); //app montata nel DOM