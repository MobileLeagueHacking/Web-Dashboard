Template.login.events({
    'click #signupButton': function(event) {
        Meteor.call("createHackathon", $('#email').val(), $('#password').val(), function(error, result) {
            if (error) {
                console.log(error);
            } else {
                Session.set("registerID", result);
            }
        });
}
});
