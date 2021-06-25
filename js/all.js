// index

$(document).ready(function(){
$(document).mousemove(function(e) {
$('#cursor').css({
left:e.pageX - 10,
top:e.pageY - 10
});


$("a, .larrow1, .rarrow1, .burger, .cross1").mouseover(function(){
$("#cursor").addClass("fill");
});
$("a, .larrow1, .rarrow1, .burger, .cross1").mouseout(function(){
$("#cursor").removeClass("fill");
});
});


$(document).ready(function(){
let slider = 0;
let slider_result = 0;

$(".rarrow1").click(function(){
slider -= 100;
slider_result = slider+"%";
$(".sl").css("background-position", slider_result);
});
});
$(document).ready(function(){
let slider = 0;
let slider_result = 0;

$(".larrow1").click(function(){
slider += 100;
slider_result = slider+"%";
$(".sl").css("background-position", slider_result);
});
});

$(document).ready(function(){
$(".burger").click(function(){
$(".sidebarfon").css('display', 'block');
$("body").addClass("bodysidebar");
});
$(".cross1").click(function(){
$(".sidebarfon").css('display', 'none');
$("body").removeClass("bodysidebar");
});
});

});



// forma
$(document).ready(function(){
$(".submit").click(function(){
  if ($('input[name="imya"]').val() && $('input[name="nomer"]').val() && $('input[name="pochta"]').val()){
    $(".popup").css('display', 'block');
    $(".dark").css('display', 'block');
  }


});
$(".cross").click(function(){
$(".popup").css('display', 'none');
$(".dark").css('display', 'none');
});
});

$(document).mousemove(function(e) {
$('#cursor').css({
left:e.pageX - 10,
top:e.pageY - 10
});

$(document).mousemove(function(e) {
$('.fill').css({
left:e.pageX - 10,
top:e.pageY - 10
});

$(".submit, .larrow, .form-split input, .form-split2 input, .form-split3 input, .cross").mouseover(function(){
$("#cursor").addClass("fill");
});
$(".submit, .larrow, .form-split input, .form-split2 input, .form-split3 input, .cross").mouseout(function(){
$("#cursor").removeClass("fill");
});
});

});

// afisha
$(document).ready(function(){
$(".button1reg").click(function(){
$(".popup").css('display', 'block');
$(".dark").css('display', 'block');
});
$(".crossbox").click(function(){
$(".popup").css('display', 'none');
$(".dark").css('display', 'none');
});
$(".button2reg").click(function(){
$(".popup").css('display', 'block');
$(".dark").css('display', 'block');
});
$(".crossbox").click(function(){
$(".popup").css('display', 'none');
$(".dark").css('display', 'none');
});

$(document).mousemove(function(e) {
$('#cursor').css({
left:e.pageX - 10,
top:e.pageY - 10
});

$("a, .green, .crossafisha, .burger, .cross1, .burger2").mouseover(function(){
$("#cursor").addClass("fill");
});
$("a, .green, .crossafisha, .burger, .cross1, .burger2").mouseout(function(){
$("#cursor").removeClass("fill");
});
});



$(document).ready(function(){
$(".burger2").click(function(){
$(".sidebarfon").css('display', 'block');
$("body").addClass("bodysidebar");
});
$(".cross1").click(function(){
$(".sidebarfon").css('display', 'none');
$("body").removeClass("bodysidebar");

});
});

});
// construct
$(document).ready(function(){
  $(".heart").click(function(){
    if ($(".heart").hasClass("four")){
      $(".heart").addClass("one");
      setTimeout(function(){
        $(".heart").removeClass("four");
    }, 10);
  } else if ( $(".heart").hasClass("two")){
      $(".heart").addClass("three");
      setTimeout(function(){
        $(".heart").removeClass("two");
    }, 100);
  } else if ( $(".heart").hasClass("three")){
    $(".heart").addClass("four");
    setTimeout(function(){
      $(".heart").removeClass("three");
  }, 100);
} else if ( $(".heart").hasClass("one")){
      $(".heart").addClass("two");
      setTimeout(function(){
        $(".heart").removeClass("one");
    }, 100);
    };
  });


  $(".circle").click(function(){
    if ($(".circle").hasClass("chetire")){
      $(".circle").addClass("odin");
      setTimeout(function(){
        $(".circle").removeClass("chetire");
    }, 10);
  } else if ( $(".circle").hasClass("dva")){
      $(".circle").addClass("tri");
      setTimeout(function(){
        $(".circle").removeClass("dva");
    }, 100);
  } else if ( $(".circle").hasClass("tri")){
    $(".circle").addClass("chetire");
    setTimeout(function(){
      $(".circle").removeClass("tri");
  }, 100);
} else if ( $(".circle").hasClass("odin")){
      $(".circle").addClass("dva");
      setTimeout(function(){
        $(".circle").removeClass("odin");
    }, 100);
    };
  });


  $(".shape").click(function(){
    if ($(".shape").hasClass("d")){
      $(".shape").addClass("a");
      setTimeout(function(){
        $(".shape").removeClass("d");
    }, 10);
  } else if ( $(".shape").hasClass("b")){
      $(".shape").addClass("c");
      setTimeout(function(){
        $(".shape").removeClass("b");
    }, 100);
  } else if ( $(".shape").hasClass("c")){
    $(".shape").addClass("d");
    setTimeout(function(){
      $(".shape").removeClass("c");
  }, 100);
} else if ( $(".shape").hasClass("a")){
      $(".shape").addClass("b");
      setTimeout(function(){
        $(".shape").removeClass("a");
    }, 100);
    };
  });

  $(".crown").click(function(){
    if ($(".crown").hasClass("chetirez")){
      $(".crown").addClass("raz");
      setTimeout(function(){
        $(".crown").removeClass("chetirez");
    }, 10);
  } else if ( $(".crown").hasClass("dvaz")){
      $(".crown").addClass("triz");
      setTimeout(function(){
        $(".crown").removeClass("dvaz");
    }, 100);
  } else if ( $(".crown").hasClass("triz")){
    $(".crown").addClass("chetirez");
    setTimeout(function(){
      $(".crown").removeClass("triz");
  }, 100);
} else if ( $(".crown").hasClass("raz")){
      $(".crown").addClass("dvaz");
      setTimeout(function(){
        $(".crown").removeClass("raz");
    }, 100);
    };
  });

  $(".triang").click(function(){
    if ($(".triang").hasClass("quatro")){
      $(".triang").addClass("uno");
      setTimeout(function(){
        $(".triang").removeClass("quatro");
    }, 10);
  } else if ( $(".triang").hasClass("dos")){
      $(".triang").addClass("tres");
      setTimeout(function(){
        $(".triang").removeClass("dos");
    }, 100);
  } else if ( $(".triang").hasClass("tres")){
    $(".triang").addClass("quatro");
    setTimeout(function(){
      $(".triang").removeClass("tres");
  }, 100);
} else if ( $(".triang").hasClass("uno")){
      $(".triang").addClass("dos");
      setTimeout(function(){
        $(".triang").removeClass("uno");
    }, 100);
    };
  });


  $(".square").click(function(){
    if ($(".square").hasClass("quatre")){
      $(".square").addClass("un");
      setTimeout(function(){
        $(".square").removeClass("quatre");
    }, 10);
  } else if ( $(".square").hasClass("deux")){
      $(".square").addClass("trois");
      setTimeout(function(){
        $(".square").removeClass("deux");
    }, 100);
  } else if ( $(".square").hasClass("trois")){
    $(".square").addClass("quatre");
    setTimeout(function(){
      $(".square").removeClass("trois");
  }, 100);
} else if ( $(".square").hasClass("un")){
      $(".square").addClass("deux");
      setTimeout(function(){
        $(".square").removeClass("un");
    }, 100);
    };
  });

  $(".star").click(function(){
    if ($(".star").hasClass("opsi")){
      $(".star").addClass("o");
      setTimeout(function(){
        $(".star").removeClass("opsi");
    }, 10);
  } else if ( $(".star").hasClass("op")){
      $(".star").addClass("ops");
      setTimeout(function(){
        $(".star").removeClass("op");
    }, 100);
  } else if ( $(".star").hasClass("ops")){
    $(".star").addClass("opsi");
    setTimeout(function(){
      $(".star").removeClass("ops");
  }, 100);
} else if ( $(".star").hasClass("o")){
      $(".star").addClass("op");
      setTimeout(function(){
        $(".star").removeClass("o");
    }, 100);
    };
  });

  $(".half").click(function(){
    if ($(".half").hasClass("rose")){
      $(".half").addClass("r");
      setTimeout(function(){
        $(".half").removeClass("rose");
    }, 10);
  } else if ( $(".half").hasClass("ro")){
      $(".half").addClass("ros");
      setTimeout(function(){
        $(".half").removeClass("ro");
    }, 100);
  } else if ( $(".half").hasClass("ros")){
    $(".half").addClass("rose");
    setTimeout(function(){
      $(".half").removeClass("ros");
  }, 100);
} else if ( $(".half").hasClass("r")){
      $(".half").addClass("ro");
      setTimeout(function(){
        $(".half").removeClass("r");
    }, 100);
    };
  });
  $(document).mousemove(function(e) {
$('#cursor').css({
  left:e.pageX - 10,
  top:e.pageY - 10
});
$("a, .heart, .circle, .shape, .crown, .triang, .square, .star, .half, .burger3").mouseover(function(){
$("#cursor").addClass("fill");
});
$("a, .heart, .circle, .shape, .crown, .triang, .square, .star, .half, .burger3").mouseout(function(){
$("#cursor").removeClass("fill");
});
});
$(document).ready(function(){
$(".burger3").click(function(){
$(".sidebarfon").css('display', 'block');
$("body").addClass("bodysidebar");
});
$(".cross1").click(function(){
  $(".sidebarfon").css('display', 'none');
$("body").removeClass("bodysidebar");

});
});
});

// istorii
$(document).ready(function(){
$(document).mousemove(function(e) {
$('#cursor').css({
left:e.pageX - 10,
top:e.pageY - 10
});
$("a, .burger4, .cross1").mouseover(function(){
$("#cursor").addClass("fill");
});
$("a, .burger4, .cross1").mouseout(function(){
$("#cursor").removeClass("fill");
});
});
$(document).ready(function(){
$(".burger4").click(function(){
$(".sidebarfon").css('display', 'block');
$("body").addClass("bodysidebar");
});
$(".cross1").click(function(){
$(".sidebarfon").css('display', 'none');
$("body").removeClass("bodysidebar");

});
});
});


// shop
$(document).ready(function(){
$(".buybutton1").click(function(){
$(".popupshop").css('display', 'block');
$(".dark").css('display', 'block');
});
$(".crossboxshop").click(function(){
$(".popupshop").css('display', 'none');
$(".dark").css('display', 'none');
});
$(".buybutton2").click(function(){
$(".popupshop").css('display', 'block');
$(".dark").css('display', 'block');
});
$(".crossboxshop").click(function(){
$(".popupshop").css('display', 'none');
$(".dark").css('display', 'none');
});

$(document).mousemove(function(e) {
$('#cursor').css({
left:e.pageX - 10,
top:e.pageY - 10
});

$("a, .crossshoppop, .buybutton1, .buybutton2, .burger5, .cross1").mouseover(function(){
$("#cursor").addClass("fill");
});
$("a, .crossshoppop, .buybutton1, .buybutton2, .burger5, .cross1").mouseout(function(){
$("#cursor").removeClass("fill");
});
});
$(document).ready(function(){
$(".burger5").click(function(){
$(".sidebarfon").css('display', 'block');
$("body").addClass("bodysidebar");
});
$(".cross1").click(function(){
$(".sidebarfon").css('display', 'none');
$("body").removeClass("bodysidebar");

});
});

});



// contacts
$(document).ready(function(){


    $(".submitcontacts").click(function(){
      if ($('input[name="imya"]').val() && $('input[name="nomer"]').val() && $('input[name="pochta"]').val()){
        $(".popupcontacts").css('display', 'block');
        $(".dark").css('display', 'block');
      }
    });
    $(".crossboxcontacts").click(function(){
    $(".popupcontacts").css('display', 'none');
    $(".dark").css('display', 'none');
    });

    $(document).mousemove(function(e) {
  $('#cursor').css({
    left:e.pageX - 10,
    top:e.pageY - 10
  });

    $("a, .submitcontacts, .larrowcontacts, .rarrowcontacts, .form-splitcontacts input, .form-splitcontacts2 input, .form-splitcontacts3 input, .crosscontacts, .burger6, .cross1").mouseover(function(){
  $("#cursor").addClass("fill");
  });
  $("a, .submitcontacts, .larrowcontacts, .rarrowcontacts,  .form-splitcontacts input, .form-splitcontacts2 input, .form-splitcontacts3 input, .crosscontacts, .burger6, .cross1").mouseout(function(){
  $("#cursor").removeClass("fill");
  });
  });

  $(document).ready(function(){
    $(".burger6").click(function(){
    $(".sidebarfon").css('display', 'block');
    $("body").addClass("bodysidebar");
    });
    $(".cross1").click(function(){
      $(".sidebarfon").css('display', 'none');
    $("body").removeClass("bodysidebar");

  });
  });
  $(document).ready(function(){
  let slidercont = 0;
  let slidercont_result = 0;

  $(".rarrowcontacts").click(function(){
  slidercont -= 100;
  slidercont_result = slidercont+"%";
  $(".bookimg").css("background-position", slidercont_result);
});
});

$(document).ready(function(){
  let slidercont = 0;
  let slidercont_result = 0;

  $(".larrowcontacts").click(function(){
  slidercont += 100;
  slidercont_result = slidercont+"%";
  $(".bookimg").css("background-position", slidercont_result);
});
});



  });
