//////  toTop /////////
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

/// reset ///
function resetFunction() {
    document.getElementById("contact-form").reset();
}

//Servicios
    $(function() {      
      $(window).resize(function() {
       /* if ($(this).width()  < 1200) {
          $('#col-horario').removeClass('col-sm-6');
          $('#col-phones').removeClass('col-sm-6');
          $('#col-horario').addClass('col-sm-7');
          $('#col-phones').addClass('col-sm-5');
        }else {
          $('#col-horario').removeClass('col-sm-7');
          $('#col-phones').removeClass('col-sm-5');
          $('#col-horario').addClass('col-sm-6');
          $('#col-phones').addClass('col-sm-6');
        }*/

        if ($(this).width()  < 900) {
          $('#col-img').removeClass('col-md-6');
          $('#col-text').removeClass('col-md-6');
          $('#col-img').addClass('col-md-5');
          $('#col-text').addClass('col-md-7');
        }else{
          $('#col-img').removeClass('col-md-5');
          $('#col-text').removeClass('col-md-7');
          $('#col-img').addClass('col-md-6');
          $('#col-text').addClass('col-md-6');
        }

 
        if ($(this).width()  > 1366) {
          $('#horarios-wrap').removeClass('container-fluid');
          $('#horarios-wrap').addClass('container');
        } else {
          $('#horarios-wrap').removeClass('container');
          $('#horarios-wrap').addClass('container-fluid');
        }
 
        if($(this).width()  < 992) {
          $('#servicios-wrap').removeClass('container');
        } else {

          $('#servicios-wrap').addClass('container');
        }
        
      });
    });
