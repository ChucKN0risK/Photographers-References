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
                    setTimeout(function() {
                        self.$body.addClass('logo-onelined');
                        self.$logo.addClass('onelined');
                        self.$authorBook.addClass('is-hidden');
                    }, 300);
                }
            } else {
                  if ( scroll + $(window).height() < $(document).height()) {
                    setTimeout(function() {
                        self.$body.removeClass('logo-onelined');
                        self.$logo.removeClass('onelined');
                        self.$authorBook.removeClass('is-hidden');
                    }, 300);                        
                  }
            }

            self.lastScrollTop = scroll;
        }
    };
    headerAnimationOnScroll.init();

    var $inputs = $('input[type="checkbox"]');
    var $shopButton = $('.js-shop-button');
    var $paypalCart = $('.js-paypal-cart');
    var $form = $('.js-form');
    var $cartToggler = $('.js-cart-toggler');
    var currency = 'USD';
    var sign = '$';

    $('.js-updatePrice').on('change', function() {
        var totalPrice = 0;
        var shipping = 5;
        $inputs.each(function(i, el){
            if($(el).is(':checked')){
                var quantity = $(el).parent().find('input[type="number"]').addClass('counting').val();
                totalPrice += (parseInt($(el).attr('data-price-' + currency.toLowerCase())) + shipping) * quantity; 
                updateQuantity(quantity);
            }
        });
        if(totalPrice > 0) { 
            $shopButton.find('.shop-button-price').text(sign + totalPrice);
            $cartToggler.removeClass('is-disabled');
        } else {
            $cartToggler.addClass('is-disabled');
        }
        updateCart();
    });

    function updateCart(){
        $paypalCart.html('');
        var index = 1;
        $inputs.each(function(i, el){
            if($(el).is(':checked')){
                $paypalCart.append($('<input>').attr({
                    type: 'hidden',
                    name: 'item_name_' + index
                }).val($(el).data('item')));
                $paypalCart.append($('<input>').attr({
                    type: 'hidden',
                    name: 'amount_' + index
                }).val($(el).data('price-' + currency.toLowerCase())));
                $paypalCart.append($('<input>').attr({
                    type: 'hidden',
                    name: 'quantity_' + index
                }).val($(el).parent().find('input[type="number"]').val()));
                $paypalCart.append($('<input>').attr({
                    type: 'hidden',
                    name: 'shipping_' + index
                }).val(5));
                index++;
            }
        });
    }

    function updateQuantity(number) {
        var quantity = 0;
        $('.counting').each(function() {
            quantity += +$(this).val();
        });
        $cartToggler.find('.js-products-selected').html(quantity);
    }
    
    var selectedBooks = [];
    function getSelectedProducts() {
        $('.js-product-selector').on('change', function() {
            if ($(this).is(':checked')) {
                selectedBooks.push($(this).data('item'));
            } else {
                var index = selectedBooks.indexOf($(this));
                selectedBooks.splice(index, 1);
            }
            $cartToggler.find('.js-products-selected').html(selectedBooks.length);
            console.log(selectedBooks.length);
        });
        return selectedBooks;
    }
    getSelectedProducts();

    $('.js-submit').on('click', function(e) {
        e.preventDefault();
        updateCart();
        $form.submit();
    });


});

