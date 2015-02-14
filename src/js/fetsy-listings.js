(function(){
  var southernStores = $('#southern-stores').html();
  var storeTemplate = _.template(southernStores, {variable: 'm'});

app.showFetsyListings = function () {
  $.getJSON("https://openapi.etsy.com/v2/listings/active.js?includes=MainImage&geo_level=state&location=north carolina&api_key=08gz3o57xxzhamlkdgb8us19&callback=?")
  .done(function(data) {
    console.log(data);
    $('.container').html(storeTemplate({
      stores : data.results
    }));

  });

};

})();
