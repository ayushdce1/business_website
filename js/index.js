var common_slides_count = document.getElementsByClassName("common_slides_count");
      var common_slides_length = common_slides_count.length;

      
      var stop_slider_var = setInterval(() => {slider();}, 7000);

      var i = 0;

      function slider() {
        if (common_slides_count[0].classList.contains("common_animation_1")) {
          i = 1;
        }

        actual_slider_code();
      }

      function actual_slider_code() {
        if (i < common_slides_length) {
          var j;
          for (j = 0; j < common_slides_length; j++) {
            common_slides_count[j].classList.remove("common_animation_1");
          }
          common_slides_count[i].classList.add("common_animation_1");
          i++;
        } else {
          i = 0;
        }
      }

      function stop_slider(){
        // alert("stop");
        clearInterval(stop_slider_var);
      }

      function start_slider(){
        // alert("start");
        stop_slider_var = setInterval(() => {slider();}, 7000);
      }