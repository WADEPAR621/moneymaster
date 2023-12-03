var msTooltip = {

    init: function (target, right, i) {

        tip = target.attr('title');

        if (!tip || tip == '' || $("#ms-tooltip" + i).length > 0)
            return false;

        tooltip = $('<div class="ms-tooltip ms-in" id="ms-tooltip' + i + '"></div>');
        target.attr('title', '');
        tooltip.css('display', 'none').css('max-width', 340).html(tip).appendTo('body');

        if ($(window).width() < tooltip.outerWidth()) {
            tooltip.css('max-width', $(window).width() / 2);
        }

        var pos_left = target.offset().left + (target.outerWidth() / 2) - (tooltip.outerWidth() / 2);
        var pos_top = target.offset().top - tooltip.outerHeight() - 30;

        if (pos_left < 0) {
            pos_left = target.offset().left + target.outerWidth() / 2 - 20;
            tooltip.addClass('left');
        }
        else
            tooltip.removeClass('left');

        if (right && ((target.offset().left + target.outerWidth() + tooltip.outerWidth()) < $(window).width())) {
            pos_left = target.offset().left + target.outerWidth() + 20;
            pos_top = target.offset().top - 10;
            tooltip.addClass('left');
        }

        tooltip.css({ left: pos_left, top: pos_top }).fadeIn();
    },

    remove: function (target, i) {

        tip = $('#ms-tooltip' + i).html();

        if (!tip || tip == '')
            return false;

        if (target.attr('title') == '')
            target.attr('title', tip);

        $('#ms-tooltip' + i).fadeOut(100, function () {
            $(this).remove();
        });
    }
}