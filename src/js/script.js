$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-add-to-cart]').click(function(e) {
        alert('أضيف المنتج الى عربة الشراء');
        e.stopPropagation();
    });
});