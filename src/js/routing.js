var r = Rlite();

// Default route
r.add('', function () {
    document.title = 'Fetsy Home';
    app.showFetsyListings();
    app.showFetsyListings2();
    app.showFetsyListings3();
});


// #users/chris -> r.params.name will equal 'chris'
r.add('users/:id', function (r) {
    document.title = 'User ' + r.params.id;
});
