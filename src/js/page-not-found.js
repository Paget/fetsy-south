app.pageNotFound = function () {
      var pageNotFound = $('#page-not-found').html();
      var pageNotFoundTemplate = _.template(pageNotFound, {variable: 'm'});

      $('.container').html(pageNotFoundTemplate());
      $('.container2').html('');
      $('.container3').html('');
  };
