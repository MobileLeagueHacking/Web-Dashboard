//Events that are done in the Template, actions, etc.
import {
    Hackathon
}
from '../../../lib/models/Hackathons.js';

//Detect the click of the logout button and logs out of the site everywhere.
Template.register.events({
    'click .hackathon-card': function(event) {
        var id = event.currentTarget.id;
        Session.set("hackathon_id", id);
    }
});

//Helper functions to be called within the HTML via {{brackets}}.
Template.register.helpers({
    isOne: function() {
        return (FlowRouter.getParam("pageNumber") == 1) || (FlowRouter.getParam("pageNumber") == null);
    },
    isTwo: function() {
        return FlowRouter.getParam("pageNumber") == 2;

    },
    isThree: function() {
        return FlowRouter.getParam("pageNumber") == 3;
    }
});

Template.part1.helpers({
    hackathons: function() {
        return Hackathon.find({});
    }
});
