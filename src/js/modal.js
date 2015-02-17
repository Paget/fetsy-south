(function($) {

app.showStoreModal = function(storeObject) {

    if ( ! $("body").hasClass('modal-open') ) {
      $("body").addClass("modal-open");
    }

    var modalContainer = $('#store-details-modal').html();
    var modalTemplate = _.template(modalContainer, {variable: 'm'});

    $('.modal-container').html(modalTemplate({
      store : storeObject.results[0]
    }));

    $('.modal-trigger').click();

  // $(document).on("click", '.modal-window', function() {
  //   $('modal-state:checked').prop("checked", false).change();
  // });

  $(document).on("click", ".modal-close", function(e) {
    $("body").removeClass("modal-open");
    e.stopPropagation();
  });
};
})(jQuery);
