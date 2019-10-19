/*
    Project Name : Diamond
    Author Company : SpecThemes
    Project Date: 25 july, 2017
    Template Developer: vsafaryan50yan@gmail.com
*/


/*
==============================================
TABLE OF CONTENT
==============================================

1. Owl Carousels
2. CountUp
3. Hover Drop Down
4. Tabs
5. Video Modal
6. Preloader
7. Scroll To Top
8. Isotop
9. WOW

==============================================
[END] TABLE OF CONTENT
==============================================
*/

"use strict";


$(document).ready(function() {

/*------------------------------------
    1. Owl Carousel
--------------------------------------*/  


/*---------------------
Latest Projects Carousel
-----------------------*/

  $('#projects-carousel').owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,  
    responsiveClass: true,
    autoplayHoverPause:false,
    responsive: {
      0: {
        items: 1,
        margin: 0
      },
      600: {
        items: 2,
        margin: 0
      },
      1000: {
        items: 4,
        margin: 0
      }
    }
  })


/*---------------------
Testmonials carousel
-----------------------*/

  $('#testmonials').owlCarousel({
    loop: false,
    nav: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        margin: 15,
      },
      600: {
        items: 1,
        margin: 30,
      },
      1000: {
        items: 2,
        margin: 60,
      }
    }
  })



/*---------------------
Project Single Carousel
-----------------------*/

  $('#project-single').owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,  
    responsiveClass: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        margin: 30,
      },
      600: {
        items: 1,
        margin: 30,
      },
      1000: {
        items: 1,
        margin: 30,
      }
    }
  })


/*---------------------
Similar Project Carousel
-----------------------*/

  $('#similar-projects-carousel').owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,  
    responsiveClass: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        margin: 0,
      },
      600: {
        items: 1,
        margin: 0,
      },
      1000: {
        items: 3,
        margin: 0,
      }
    }
  })



/*---------------------
Partners carousel
-----------------------*/

  $('#our-partners').owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,  
    responsiveClass: true,
    autoplayHoverPause:false,
    responsive: {
      0: {
        items: 2,
        margin: 15,
      },
      600: {
        items: 3,
        margin: 45,
      },
      1000: {
        items: 5,
        margin: 75,
      }
    }
  })


/*------------------------------------
    2. CountUp
--------------------------------------*/  

    $('.countup').counterUp({
        delay: 5,
        time: 2000
    });


/*------------------------------------
    3. Hover Drop Down
--------------------------------------*/    

if ($(window).width() > 991) {
  $('ul.nav li.dropdown').hover(function() {
      $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(300);
  }, function() {
      $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(300);
  });
}


/*------------------------------------
    4. Tabs
--------------------------------------*/    

  $('.tabs_animate').tabslet({
    mouseevent: 'click',
    attribute: 'href',
    animation: true
  });


/*------------------------------------
    5. Video Modal
--------------------------------------*/ 

  $('#videomodal').on('hidden.bs.modal', function() {
    var $this = $(this).find('iframe'),
      tempSrc = $this.attr('src');
    $this.attr('src', "");
    $this.attr('src', tempSrc);
  });

  $('#videomodal').on('hidden.bs.modal', function() {
    var html5Video = document.getElementById("htmlVideo");
    if (html5Video != null) {
      html5Video.pause();
      html5Video.currentTime = 0;
    }
  });


/*------------------------------------
    6. Preloader
--------------------------------------*/ 

  $('#preloader').fadeOut('normall', function() {
      $(this).remove();
  });


/*------------------------------------
    7. Scroll To Top
--------------------------------------*/ 

    $(window).scroll(function(){
        if($(this).scrollTop() > 500) {
            $(".scroll-to-top").fadeIn(400);
            
        } else {
            $(".scroll-to-top").fadeOut(400);
        }
    });
 
    $(".scroll-to-top").on('click', function(event){
        event.preventDefault();
        $("html, body").animate({scrollTop: 0},600);
    });







/*------------------------------------
    8. Isotop
--------------------------------------*/  

// external js: isotope.pkgd.js
// init Isotope
var $grid = $('.isotope-grid').isotope({
  itemSelector: '.isotope-item',
  layoutMode: 'fitRows',
  getSortData: {
    name: '.name',
    symbol: '.symbol',
    number: '.number parseInt',
    category: '[data-category]',
    weight: function( itemElem ) {
      var weight = $( itemElem ).find('.weight').text();
      return parseFloat( weight.replace( /[\(\)]/g, '') );
    }
  }
});

// filter functions
var filterFns = {
  // show if name ends with -ium
  ium: function() {
    var name = $(this).find('.name').text();
    return name.match( /ium$/ );
  }
};

// bind filter button click
$('#filters').on( 'click', 'button', function() {
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
});


// change is-checked class on buttons
$('.latest-projects').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});




/*------------------------------------
    9. WOW
--------------------------------------*/ 
new WOW().init();

/*------------------------------------
    10. Content Switch
--------------------------------------*/

var switchTab = function(selectedTabID){
  $('#tabContainer').children().each(function(i, tab){
    $(tab).fadeOut(300);
  });

  $('#' + selectedTabID).fadeIn(300);
};

var tabSwitcher = $('#tabPanelSwitcher');
if(tabSwitcher){
  tabSwitcher.children().each(function(i, item){
    item.onclick = function(event){
      event.preventDefault();
      var $item = $(item);
      var targetID = $item.attr("tab-target");
      switchTab(targetID);
      $(".services-nav-active").removeClass('services-nav-active');
      $item.addClass('services-nav-active');

      goToByScroll("tabContainer");
    };
  });

  switchTab("genel-ozellikleri");
}

// This is a functions that scrolls to #{blah}link
function goToByScroll(id) {
  // Remove "link" from the ID
  id = id.replace("link", "");
  // Scroll
  $('html,body').animate({
    scrollTop: $("#" + id).offset().top - ($("html, body").scrollTop() < 100 ? 200 : 100)
  }, 'slow');
}

var pageEnMap = {
  "iletisim": "contact",
  "hakkimizda": "about",
  "urunlerimiz": "products",
  "genisletilmis-metal-kaba-siva-profili-uretim-hatti": "expanded-metal-rough-plaster-profile-production-line",
  "delikli-alci-kose-profili-uretim-hatti": "perforated-corner-profile-production-line",
  "alcipan-profili-uretim-hatti": "gypsum-board-profile-production-line"
};

// i18n dropdown links
$(".social-icons .dropdown-menu").each(function(i, li){
  li.onclick = function(event){
    var path = window.location.href;
    path = path.replace('#', '');
    var newLang = event.target.getAttribute("lang");
    var page = path.substring(path.lastIndexOf('/')+1, path.length-5);
    if(newLang === "tr"){
      path = path.replace(/\/en\//, "/");
      path = path.replace(page, Object.keys(pageEnMap)[Object.values(pageEnMap).indexOf(page)])
    } else {
      path = path.replace(/.com\//, ".com/en/");
      path = path.replace(page, Object.values(pageEnMap)[Object.keys(pageEnMap).indexOf(page)])
    }
    window.location = path;
  }
});

});
