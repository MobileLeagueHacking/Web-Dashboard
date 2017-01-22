//Events that are done in the Template, actions, etc.
import {
    Hackathon
}
from '../../../lib/models/Hackathons.js';

Template.register.helpers({
    isOne: function() {
        console.log(FlowRouter.getParam("pageNumber"));
        return (FlowRouter.getParam("pageNumber") == 1) || (FlowRouter.getParam("pageNumber") == null);
    },
    isTwo: function() {
        console.log(FlowRouter.getParam("pageNumber"));
        return FlowRouter.getParam("pageNumber") == 2;
    },
    isThree: function() {
        console.log(FlowRouter.getParam("pageNumber"));
        return FlowRouter.getParam("pageNumber") == 3;
    }
});

Template.part1.helpers({
    hackathons: function() {
        return Hackathon.find({});
    }
});

Template.part1.events({
    'click .hackathon-card': function(event) {
        var id = event.currentTarget.id;
        Session.set("hackathon_id", id);
        FlowRouter.redirect('/register/2');
    }
});

Template.part2.onRendered(function() {
    $(".tdInput").keypress(function(e) {
        return e.which != 13;
    });
    $('ul.tabs').tabs();
})

    // $(".ifAppClass").hide();