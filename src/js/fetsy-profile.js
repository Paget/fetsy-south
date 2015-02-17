app.showFetsyProfile = function(userId) {

  // var southernStores = $('#southern-stores').html();
  // var storeTemplate = _.template(southernStores, {variable: 'm'});

var profileTemplate = _.template($('#user-profile').html(), { variable: 'm' });

$.getJSON("https://openapi.etsy.com/v2/users/"+userId+"/profile.js?&api_key=08gz3o57xxzhamlkdgb8us19&callback=?")
.done(function(data) {
  console.log('user',data);
});
}
