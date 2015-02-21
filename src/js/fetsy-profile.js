app.showFetsyProfile = function(userId) {


var profileTemplate = _.template($('#user-profile').html(), { variable: 'm' });


$.getJSON("https://openapi.etsy.com/v2/users/"+userId+"/profile.js?&api_key=08gz3o57xxzhamlkdgb8us19&callback=?")
.done(function(data) {
        $('.container').html(profileTemplate({
          user : data.results[0]
        }));
        $('.container2').html('');
        $('.container3').html('');
        console.log('user',data);

});
};
