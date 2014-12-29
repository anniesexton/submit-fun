(function($, window, undefined){
  var MainScripts = {
    initialize: function(){
      var self = this;
      this.expand();
      this.contract();
    },
    expand: function() {
      $('.expanding-buttons .btn').on('click', function() {
        var clickedBtn = $(this);
        clickedBtn.addClass('expanded');
        clickedBtn.find('.ajax-spinner').addClass('shown');
      });
    },
    contract: function() {
      $('.contract .btn').on('click', function() {
        var clickedBtn = $(this);
        clickedBtn.addClass('contracted');
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
