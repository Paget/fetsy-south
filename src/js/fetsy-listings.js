(function(){

//north carolina
  var southernStores = $('#southern-stores').html();
  var storeTemplate = _.template(southernStores, {variable: 'm'});

app.showFetsyListings = function () {
  $.getJSON("https://openapi.etsy.com/v2/listings/active.js?includes=MainImage&geo_level=state&location=north carolina&limit=8&api_key=08gz3o57xxzhamlkdgb8us19&callback=?")
  .done(function(data) {
    console.log(data);

    $('.container').html(storeTemplate({
      stores : data.results
    }));

  });

};

  $(document).on("click", '.store-info__pic', function(){

    var listing_id = $(this).data("listing-id");

    $.getJSON("https://openapi.etsy.com/v2/shops/listing/"+listing_id+".js?&api_key=08gz3o57xxzhamlkdgb8us19&callback=?")
    .done(function(data) {

      app.showStoreModal(data);
      console.log(data);
    })
  });

//georgia
  var southernStores2 = $('#southern-stores2').html();
  var storeTemplate2 = _.template(southernStores2, {variable: 'm'});

app.showFetsyListings2 = function () {
  $.getJSON("https://openapi.etsy.com/v2/listings/active.js?includes=MainImage&geo_level=state&location=georgia&limit=8&api_key=08gz3o57xxzhamlkdgb8us19&callback=?")
  .done(function(data) {
    console.log(data);

    $('.container2').html(storeTemplate2({
      stores : data.results
    }));

  });

};

//arkansas

  var southernStores3 = $('#southern-stores3').html();
  var storeTemplate3 = _.template(southernStores3, {variable: 'm'});

app.showFetsyListings3 = function () {
  $.getJSON("https://openapi.etsy.com/v2/listings/active.js?includes=MainImage&geo_level=state&location=arkansas&limit=8&api_key=08gz3o57xxzhamlkdgb8us19&callback=?")
  .done(function(data) {
    console.log(data);

    $('.container3').html(storeTemplate3({
      stores : data.results
    }));

  });

};


})(jQuery);
