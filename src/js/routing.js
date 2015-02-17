

// Default route
app.router.add('', function () {
    document.title = 'Fetsy Home';
    app.showFetsyListings();
    app.showFetsyListings2();
    app.showFetsyListings3();
});


// #users/chris -> r.params.name will equal 'chris'
app.router.add('users/:id', function (users) {
    document.title = 'User ' + users.params.id;
    app.showFetsyProfile(users.params.id);
});
