//Events that are done in the Template, actions, etc.
import {
    Hackathon
}
from '../../../lib/models/Hackathons.js';

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

Template.part1.events({
    'click .hackathon-card': function(event) {
        var id = event.currentTarget.id;
        Session.set("hackathon_id", id);
        FlowRouter.redirect('/register/2');
    }
});

Template.part2.onRendered(function() {
    $(".tdInput").keypress(function(e) {
        if (e.which == 13) {
            var scheduleItem = {
                name: $('#scheduleName').html(),
                location: $('#scheduleLocation').html(),
                time: $('#scheduleTime').val()
            }
            Meteor.call("addScheduleItem", Session.get("registerID"), scheduleItem)
            return false;
        }
    });

    $(".prizeInput").keypress(function(e) {
        if (e.which == 13) {
            var prizeItem = {
                description: $('#prizeDescription').html(),
                sponsor: $('#prizeSponsor').html(),
                value: $('#prizeValue').html()
            }
            Meteor.call("addPrizeItem", Session.get("registerID"), prizeItem)
            return false;
        }
    });

    $(".sponsorInput").keypress(function(e) {
        if (e.which == 13) {
            var sponsorItem = {
                name: $('#sponsorName').html(),
                website: $('#sponsorWebsite').html(),
                logo: $('#sponsorLogo').html()
            }
            Meteor.call("addSponsorItem", Session.get("registerID"), sponsorItem)
            return false;
        }
    });

    $('ul.tabs').tabs();
})

Template.part2.events({
    'click #tabItem0': function() {
        Session.set("currentTabItem", 0)
    },
    'click #tabItem1': function() {
        Session.set("currentTabItem", 1)
    },
    'click #tabItem2': function() {
        Session.set("currentTabItem", 2)
    },
    'click #submitPageTwo': function() {
        var app_type = Session.get("currentTabItem");
        if (app_type == 0) {
            var android_app = $("#android_app").val();
            var ios_app = $("#ios_app").val();
            Meteor.call("addApps", Session.get("registerID"), android_app, ios_app)
        } else if (app_type == 1 || app_type == null) {
            var primary_color = $('#primaryColor').val();
            var secondary_color = $('#secondaryColor').val();
            Meteor.call("addColors", Session.get("registerID"), primary_color, secondary_color)
        } else if (app_type == 2) {
            var hackURL = $('#website_url').val();
            console.log(hackURL);
            Meteor.call("addSite", Session.get("registerID"), hackURL);
        }
        Meteor.call("addHackathon", Session.get("registerID"), Session.get("hackathon_id"));
    }
});

Template.part2.helpers({
    choice0: function() {
        return Session.get("currentTabItem") == 0;
    },
    choice1: function() {
        return Session.get("currentTabItem") == 1 || Session.get("currentTabItem") == null;
    },
    choice2: function() {
        return Session.get("currentTabItem") == 2;
    }
});

Template.appTemplatePart.helpers({
    scheduleItems: function() {
        var rec = Meteor.users.findOne(Session.get("registerID")).schedule;
        console.log(Session.get("registerID"));
        return rec;
    },
    prizeItems: function() {
        var rec = Meteor.users.findOne(Session.get("registerID")).prizes;
        console.log(Session.get("registerID"));
        return rec;
    },
    sponsorItems: function() {
        var rec = Meteor.users.findOne(Session.get("registerID")).sponsors;
        console.log(Session.get("registerID"));
        return rec;
    }
});