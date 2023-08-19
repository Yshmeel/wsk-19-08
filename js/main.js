jQuery(document).ready(function() {
    const getScrollPercentage = () => {
        return (jQuery('section.features').position().top - jQuery(window).scrollTop())/10
    };

    const checkScroll = () => {
        if(jQuery(window).scrollTop() > jQuery('section.features').position().top &&
            jQuery(window).scrollTop() < (jQuery('section.company').position().top - 150)) {
            jQuery('body').addClass('features');
        } else {
            jQuery('body').removeClass('features');
        }

        if(jQuery(window).scrollTop() > (jQuery('section.company').position().top - 150)) {
            jQuery('body').addClass('ads');
        } else {
            jQuery('body').removeClass('ads');
        }

        if(jQuery(window).scrollTop() > (jQuery('section.roadmap').position().top - 900)) {
            jQuery('body').addClass('roadmap-b');
        } else {
            jQuery('body').removeClass('roadmap-b');
        }
        //
        // if(jQuery(window).scrollTop() >jQuery('section.features').height() &&
        //     jQuery(window).scrollTop() > jQuery('section.ad').height()) {
        //     jQuery('body').addClass('ads');
        // } else {
        //     jQuery('body').addClass('ads');
        // }

        if(jQuery('body').hasClass('features')) {
            jQuery('.features__scroll').css({
                transform: `translate3d(0px, ${getScrollPercentage()}%, 0px)`
            });
        } else {
            jQuery('.features__scroll').removeAttr('style');
        }

    };

    jQuery(window).on('scroll', checkScroll);
    checkScroll();

    let minHeight = 0;

    jQuery('.features__item').each(function() {
        minHeight += jQuery(this).height();
    });

    jQuery('section.features').css({
        minHeight: `${minHeight + 1350}px`
    })
});