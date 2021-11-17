// FIRST SECTION 

$(document).on('scroll', function () {
    const windowHeight = $(window).height()
    const scrollValue = $(this).scrollTop();
    // console.log(scrollValue);

    const $art2 = $('.art2');
    const art2FromTop = $art2.offset().top
    // console.log(art2FromTop);
    const art2Height = $art2.outerHeight()
    // console.log(art2Height);

    const $art3 = $('.art3');
    const art3FromTop = $art3.offset().top
    const art3Height = $art3.outerHeight()

    const $art4 = $('.art4');
    const art4FromTop = $art4.offset().top
    const art4Height = $art4.outerHeight()

    if (scrollValue > art2FromTop + art2Height - windowHeight) {
        console.log('I am art 2 displayed in full ')
        $art2.addClass('active');
    }

    if (scrollValue > art3FromTop + art3Height - windowHeight) {
        console.log('I am art 3 displayed in full ')
        $art3.addClass('active');
    }

    if (scrollValue > art4FromTop + art4Height - windowHeight) {
        console.log('I am art 4 displayed in full ')
        $art4.addClass('active');
    }
    // clener 
    if (scrollValue < 100) {
        $('article').removeClass('active');
    }

})



// SHOW ICON 
window.onmousemove = function (e) {

    if (e.target.classList.contains('icon')) {
        //	Content of icon which is hovered
        var $target = e.target.nextElementSibling;

        //	Only work with hovered target
        //	Add visible class hovered elem to distinguish
        if (!$target.classList.contains('visible')) {
            $target.classList.add('visible');
        } else {
            //	Get viewport offset of tooltip element
            var offset = $target.parentElement.getBoundingClientRect();
            //	Tooltip distance from mouse(px)
            var tipDist = 10;
            //	Calc and set new tooltip location
            $target.style.top = (e.clientY - offset.top + tipDist) + 'px';
            $target.style.left = (e.clientX - offset.left + tipDist) + 'px';
        }
    } else {
        //	Remove visible class
        var content = document.getElementsByClassName('content');
        for (var i = 0; i < content.length; i++) {
            content[i].classList.remove('visible');
        }
    }

};