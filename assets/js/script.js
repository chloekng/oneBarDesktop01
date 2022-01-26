$(document).ready(function() {

  // make bg masonry
  var colcade = new Colcade( '.grid', {
    columns: '.grid-col',
    items: '.grid-item'
  });


  // guides

  var colors = ['#FFFD92', '#FFE4C1', '#CFFFCA', '#DAFFF6', '#D7EDFF', '#DAD4FF', '#FFE2EB'];


  guidesArray = $(".guide")


  for (let i = 0; i < guidesArray.length; i++) {
    guidesArray[i].style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  }


  // add images to the pins

  let pins = document.getElementsByClassName("grid-item");

  let addImages = function(pins) {
    for (let i = 0; i < pins.length; i++) {
      let pin = pins[i];
      pin.style.backgroundImage = "url('assets/img/pin" + [i] + ".jpg')"; 
      pin.style.backgroundSize = "cover";
      pin.style.backgroundPosition = "center center";
    }

    
  }

  // addImages(pins);



  // reset 

  $(".navIcon").click(function() {

    window.location.href = "index.html";


  });

  // shop mode filters


  let shopFilter = document.createElement("div");
  shopFilter.className = "shopFilter";

  let shopFilterIcon = document.createElement("div");
  shopFilterIcon.className = "shopFilterIcon";
  shopFilterIcon.style.backgroundImage = "url('assets/img/filter.svg')";


  let shopFilterDropdown = document.createElement("div");
  shopFilterDropdown.className = "shopFilterDropdown";
  $(shopFilterDropdown).text("Price");

  let chevron = document.createElement("div");
  chevron.className = "chevron";
  $(shopFilterDropdown).append(chevron);

  $(shopFilter).prepend($(shopFilterDropdown));
  $(shopFilter).prepend($(shopFilterIcon));


  // setting up shop mode icon

  let shopModeIcon = document.createElement("div");
  shopModeIcon.className = "shopModeIcon";
  shopModeIcon.style.backgroundImage = "url('assets/img/shoppingBag.svg')";
  $(".navSearch").prepend($(shopModeIcon)); 
  $(shopModeIcon).hide();


  // shop mode 

  $(".shopMode").click(function() {


    $(".navSearch").toggleClass('animate');

    if ($(shopModeIcon).is(":visible")) {
      $(shopModeIcon).hide();
    } else {
      $(shopModeIcon).show();
    }

    $(shopModeIcon).toggleClass('animate');
    $(".searchText").toggleClass('animate');

    $(".mode").toggleClass('animate');
    $(".guide").toggleClass('animate');

    $(".oneBar").prepend($(shopFilter)); 

    setTimeout(function() {
      $(shopFilter).toggleClass('animate');
    }, 250);



    // $(shopModeIcon).css("transform", "show");
    // $(shopModeIcon).css("transition", "var(--short)");
    // $(shopModeIcon).css("transition-timing-function", "var(--easeInOut)");

    // $(shopModeIcon).css("animation-timing-function", "cubic-bezier(.63, .09, .3, .43");



  });

  $(shopModeIcon).hover(
      function() {
        shopModeIcon.style.backgroundImage = "url('assets/img/cancel.svg')";
      }, function() {
        shopModeIcon.style.backgroundImage = "url('assets/img/shoppingBag.svg')";
      }
    );



  // remove shop mode

  $(shopModeIcon).click(function() {

    $(shopFilter).toggleClass('animate');

    setTimeout(function() {
      $(".mode").toggleClass('animate');
      $(".guide").toggleClass('animate');
    }, 250);

    $(".oneBar .shopFilter").remove();

    if ($(shopModeIcon).is(":visible")) {
      $(shopModeIcon).hide();
    } else {
      $(shopModeIcon).show();
    }

    $(shopModeIcon).toggleClass('animate');
    $(".searchText").toggleClass('animate');

    $(".navSearch").toggleClass('animate');


  });

  // X interactions

  let cursor = document.createElement("div");
  cursor.className = "cursor"; 

  $(".xIcon").click(function() {

    $(".oneBar .shopFilter").remove();

    if ($(shopModeIcon).is(":visible")) {
      $(shopModeIcon).hide();


      $(shopFilter).toggleClass('animate');

      setTimeout(function() {
        $(".mode").toggleClass('animate');
        $(".guide").toggleClass('animate');
      }, 250);

      $(shopModeIcon).toggleClass('animate');
      $(".searchText").toggleClass('animate');

      $(".navSearch").toggleClass('animate');



    } else {
      $(".searchText").contents().filter((_, el) => el.nodeType === 3).remove();
      $(".searchText").append($(cursor));
      $(".xIcon").hide();
    }



  });




});