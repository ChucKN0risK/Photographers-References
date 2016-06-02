// CREATE ELEMENT
// var newEl = document.createElement('div');

// GET ATTRIBUTE
// document.querySelector('.el').setAttribute('key', 'value');
// document.querySelector('.el').getAttribute('key');

// ADD/REMOVE/TOGGLE CLASS
// document.querySelector('.el').classList.add('class');
// document.querySelector('.el').classList.remove('class');
// document.querySelector('.el').classList.toggle('class');

// REMOVE
// remove('.el');

// function remove(el) {
//   var toRemove = document.querySelector(el);
//   toRemove.parentNode.removeChild(toRemove);
// }

// PARENT
// document.querySelector('.el').parentNode;

// PREV/NEXT ELEMENT
// document.querySelector('.el').previousElementSibling;
// document.querySelector('.el').nextElementSibling;

// Pour chaque auteur :
// 1) Cacher le books-thumbs-wrapper
// 2) Afficher le books-wrapper et le book correspondant à l'auteur
// 3) Lancer le slider propre au book
// 4) Générer le nom en dessous du logo

// Créer une class Book qui aura : 
// Un toggler : le book-thumb associé via un data attribute
// Un slider
// Un description idéalement contenue dans un JSON à part



// // Initi IMG Slider
// $("#book-images").glide({
//     type: "carousel",
//     hoverpause: "true",
//     keyboard: "true"
// });

// // Book Selector
// $('.js-book-selector').on('click', function(e){
//     modalWrapper.open();
//     var modalSelector = $(this).data('modal');
//     console.log('help ' + modalSelector);
//     $(modal).addClass('u-hide');
//     $('#' + modalSelector).removeClass('u-hide');
// });

$(function(){
    console.info('main.js Loaded');

    // -------------------
    // Book
    // -------------------

    var Book = function($el) {
        this.$el = $el;
        this.$booksThumbsWrapper = $('.books-thumbs-wrapper');
        this.$wrapper = $('.js-books-wrapper');
        this.$toggler = this.$el.find('.js-book-toggler');
        this.$slider = this.$el.find('.js-book-slider');
        this.isShown = false;
        this.toggle();
        this.events();

        return Book;
    };

    Book.prototype = {
        events: function() {
            var _this = this;

            $('.js-books-thumbs-toggler').on('click', function() {
                _this.toggle();
                _this.$booksThumbsWrapper.removeClass('u-hide');
            });
        },
        toggle: function() {
            if (this.isShown) {
                this.close();
            } else {
                this.open();
            }
        },
        open: function(transition) {
            this.$booksThumbsWrapper.addClass('u-hide');
            this.$wrapper.removeClass('u-hide');
            this.$el.siblings().addClass('u-hide');
            this.initSlider();
            this.isShown = true;
            console.log('open');
        },
        close: function(transition) {
            this.$booksThumbsWrapper.removeClass('u-hide');
            this.$wrapper.addClass('u-hide');
            this.$el.siblings().removeClass('u-hide');
            this.isShown = false;
            console.log('close');
        },
        initSlider: function() {
            this.$slider.glide({
                type: "carousel",
                hoverpause: "true",
                keyboard: "true"
            });
        }
    };

    $('.js-book-selector').click(function(){
        new Book($('#' + $(this).data('book')));
    });
});

