$(function(){
    var Book = function($el) {
        this.$el = $el;
        this.$booksThumbsWrapper = $('.books-thumbs-wrapper');
        this.$wrapper = $('.js-books-wrapper');
        this.$toggler = this.$el.find('.js-book-toggler');
        this.$slider = this.$el.find('.js-book-slider');
        this.$title = this.$el.find('js-book-title');
        this.isShown = false;
        this.toggle();
        this.events();

        return Book;
    };

    Book.prototype = {
        events: function() {
            var _this = this;

            $('.js-books-thumbs-toggler, .js-home-link').on('click', function() {
                _this.close();
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
            $('body').addClass('book-selected');
            this.$booksThumbsWrapper.addClass('u-hide');
            this.$wrapper.removeClass('u-hide');
            this.$el.siblings().addClass('u-hide');
            this.$title.text('');
            this.initSlider();
            this.isShown = true;
            console.log('open');
        },
        close: function(transition) {
            $('body').removeClass('book-selected');
            this.$booksThumbsWrapper.removeClass('u-hide');
            this.$wrapper.addClass('u-hide');
            this.$el.siblings().removeClass('u-hide');
            $('.js-book-author').addClass('u-hide');
            this.isShown = false;
            console.log('close');
        },
        initSlider: function() {
            this.$slider.glide({
                type: "carousel",
                hoverpause: "true",
                keyboard: "true",
                autoplay: "4000"
            });
        }
    };

    $('.js-book-selector').click(function(){
        new Book($('#' + $(this).data('book')));
        $('.js-book-author').text($(this).data('author'));
        $('.js-book-title').text($(this).data('author'));
    });

    var headerAnimationOnScroll = {
        init: function() {
            // Elements we animate
            this.$body = $('body');
            this.$header = $('#header-main');
            this.headerHeight = this.$header.outerHeight();
            this.$logo = $('#header-logo');
            this.$authorLogo = $('.js-book-author');
            this.$authorBook = $('.js-book-title');

            this.didScroll = false;
            this.lastScrollTop = 0;
            this.scrollDelta = 5;
            this.hasScrolled();
            this.scrollCheck();
        },
        scrollCheck: function() {
            var self = this;

            // On scroll, we set the didscroll variable to true 
            // so that the interval function knows the user has scrolled.
            $(window).scroll(function() {
                if(self.$body.hasClass('book-selected')) {
                    self.didScroll = true;
                }
            });

            // This interval function check every 250ms if 
            // didScroll has changed. If so it runs the function
            // and resets didScroll to false.
            setInterval(function() {
                if (self.didScroll) {
                    self.hasScrolled();
                    self.didScroll = false;
                }
            }, 250);
        },
        hasScrolled: function() {
            var self = this;
            // Here we store our scroll position for a later easy access
            var scroll = $(window).scrollTop();

            // We make sure the user has scrolled more than delta
            if (Math.abs(self.lastScrollTop - scroll) <= self.scrollDelta) {
                return;
            }

            // If the user has scrolled down and is past 
            // the header then we hide the header by addind to it a "is-hidden" class.
            if (scroll > self.lastScrollTop) {
                if (scroll > self.headerHeight) {
                    // console.log('scroll sup header height');
                    setTimeout(function() {
                        self.$body.addClass('logo-onelined');
                        self.$logo.addClass('onelined');
                        self.$authorLogo.removeClass('u-hide');
                        self.$authorBook.addClass('is-hidden');
                        console.log('scroll down');
                    }, 300);
                }
            } else {
                  if ( scroll + $(window).height() < $(document).height()) {
                    setTimeout(function() {
                        console.log('scroll up');
                        self.$body.removeClass('logo-onelined');
                        self.$logo.removeClass('onelined');
                        self.$authorLogo.addClass('u-hide');
                        self.$authorBook.removeClass('is-hidden');
                    }, 300);                        
                  }
            }

            self.lastScrollTop = scroll;
        }
    };
    headerAnimationOnScroll.init();
});

