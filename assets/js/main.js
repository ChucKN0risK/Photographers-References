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

// $(function(){
    console.info('main.js Loaded');
// });

// IMG Slider
$("#Glide").glide({
    type: "carousel"
});

// Book Selector
$('.js-modal-selector').on('click', function(e){
    saveStateCommand = unsaveCommande;
    unsaveCommande = false;
    modalWrapper.open();
    var modalSelector = $(this).data('modal');
    console.log('help ' + modalSelector);
    $(modal).addClass('u-hide');
    $('#' + modalSelector).removeClass('u-hide');
});
