$(document).ready(function() {
    $(".btn-sidebar").click(function() {
        if(!$(this).hasClass("innerBtn"))
        {
        $(".footer ul li a").each(function(x, y) {
            if ($(y).find("img").hasClass("selectedFooter")) {
                $(y).find("img").removeClass("selectedFooter");
            }
        });
        if ($('.dashboard').is(":visible")) {
            $(".btn-sidebar-holder").hide();
            $(".dashboard").stop(true, true).hide("slide", {
                direction: "left"
            }, 200, function() {
                $(".login").show();
                $(".wrapper").addClass("loginScreen");
            });
        }
        $("img[alt='account']").toggleClass("selectedFooter");
    }
    });

    $(".footer ul li a").click(function() {
        $(".footer ul li a").each(function(x, y) {
            if ($(y).find("img").hasClass("selectedFooter")) {
                $(y).find("img").removeClass("selectedFooter");
            }
        });

        $(this).find("img").addClass("selectedFooter");



        if ($('.dashboard').is(":visible") && $("img[alt='account']").hasClass("selectedFooter")) {

            $(".btn-sidebar-holder").hide();
            $(".dashboard").stop(true, true).hide("slide", {
                direction: "left"
            }, 200, function() {
                $(".login").show();
                $(".wrapper").addClass("loginScreen");
            });
        } else {
            if (!$('.dashboard').is(":visible")) {
                $("img[alt='account']").removeClass("selectedFooter");
            }
            $(".login").hide();
            $(".wrapper").removeClass("loginScreen");
            $(".dashboard").stop(true, true).show("slide", {
                direction: "left"
            }, 200, function() {
                $(".btn-sidebar-holder").show();
            });
        }
    });


const progressValue = document.querySelector('.Progressbar__value');
function setValue(value) {
  progressValue.style.width = `${value}%`;
}
setValue(70);

});