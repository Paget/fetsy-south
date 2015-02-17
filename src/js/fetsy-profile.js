
  //
  // $('.container').on("click", '.store-info__pic', function(){
  //
  //   var listing_id = $(this).data("listing-id");
  //
  //   $.getJSON("https://openapi.etsy.com/v2/shops/listing/"+listing_id+".js?&api_key=08gz3o57xxzhamlkdgb8us19&callback=?")
  //   .done(function(data) {
  //     console.log(data);
  //   });
  // });


/////////////////////
  app.router.add('profiles/:userid', function (r) {
    // Here, put logic that will display your
    // Etsy listings...

    var profileTemplate = _.template($('#user-profile').html(), { variable: 'm' });
$.getJSON("https://openapi.etsy.com/v2/shops/listing/"+listing_id+".js?&api_key=08gz3o57xxzhamlkdgb8us19&callback=?")
.done(function(data) {
  console.log(data);
});
});


  //var api = app.EtsyApi({ apiKey: 'jgeqmbakgybo48lww24232km' });
  // api.getProfileById(r.params.userid)
  //     .done(function (data) {
  //       // Let's put the data in the console so we can
  //       // explore it...
  //       console.log(data);
  //       $('.container').html(profileTemplate({ items: data.results }));
  //     })
  //     .fail(function (req, status, err) {
  //       console.log(err);
  //       $('.container').text(err.error);
  //     });
  // });
