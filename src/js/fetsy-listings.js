(function(){
  var southernStores = $('#southern-stores').html();
  var storeTemplate = _.template(southernStores, {variable: 'm'});

app.showFetsyListings = function () {
  $.getJSON("https://openapi.etsy.com/v2/listings/active.js?includes=MainImage&geo_level=state&location=durham,north carolina&api_key=08gz3o57xxzhamlkdgb8us19&callback=?")
  .done(function(data) {
    console.log(data.results);
    $('.container').html(storeTemplate({
      stores : data.results
    }));

  });


};

// make object
// https://openapi.etsy.com/v2/listings/active.js?api_key=08gz3o57xxzhamlkdgb8us19&callback=foo

// app.showFetsylistings = function () {
//   $.getJSON("https://openapi.etsy.com/v2/listings/active.js?includes=MainImage&geo_level=state&location=arkansas&api_key=08gz3o57xxzhamlkdgb8us19&callback=?")
//   .done(function(data) {
//     console.log(data);
//
})();
