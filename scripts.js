(function($){
    "use strict";

    function load_more_posts() {
        $(".podcaste-container .card").each(function(i, data) {
         var total_posts = $(".card").size();
         var default_posts = 6;
         var increment_posts = 3;
         if (i > (default_posts - 1)) {
          $(this).addClass("d-none");
       
          $(".load-more-btn").on("click", () => {
           $(".d-none").nextAll(':lt(' + increment_posts + ')').removeClass("d-none");
           increment_posts += 3;
           var total_hiden_posts = $(".d-none").size();
           if (total_hiden_posts < 3) {
            $(".d-none").removeClass("d-none");
            $(".load-more-btn").addClass("d-none");
           }
       
          });
         }
        });
       }

})(jQuery);
