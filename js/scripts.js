(function($, window, undefined){
  var MainScripts = {
    initialize: function(){
      var self = this;
      this.expandLeft();
    },
    expandLeft: function() {
      $('.btn').on('click', function() {
        var clickedBtn = $(this);
        clickedBtn.addClass('expanded');
        clickedBtn.find('.ajax-spinner').addClass('shown');
      });
    }
  };

  // Send to global namespace (optional)
  window.MainScripts = MainScripts;

  // DOM Ready
  $(function(){
    MainScripts.initialize();
  });

  // Deferred loading (window.load)
    $(window).load(function() {
  });

})(jQuery, window, null);
