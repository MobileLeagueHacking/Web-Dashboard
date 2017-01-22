FlowRouter.route('/', {
    action: function() {
        BlazeLayout.render("mainLayout");
    }
});

FlowRouter.route('/register', {
    action: function() {
        FlowRouter.redirect('/register/1');
    }
});

FlowRouter.route('/register/:pageNumber', {
    action: function(params) {
        BlazeLayout.render("register", { pageNumber: params.pageNumber });
    }
});