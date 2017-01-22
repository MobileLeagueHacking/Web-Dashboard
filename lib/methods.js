import { User } from './models/Users.js'
import { Hackathon } from './models/Hackathons.js'


// if (Meteor.isServer) {
//     Accounts.onCreateUser((options, user) => {
//         user.firstName = options.firstName;
//         user.lastName = options.lastName;
//         user.grade = options.grade;
//         user.birthday = options.birthday;
//         user.notes = options.notes;
//         user.roles = options.roles;
//         user.schoolID = options.schoolID;
//         return user;
//     });
// }

Meteor.methods({
    "createHackathon": function(email, password) {
        const hackathonID = Accounts.createUser({
            email: email,
            password: password
        });
        return hackathonID;
    },
    "addScheduleItem": function(userID, scheduleItem) {
        var user = Meteor.users.findOne(userID);
        Meteor.users.update(user, { $push: { "schedule": scheduleItem } });
    },
    "addPrizeItem": function(userID, prizeItem) {
        var user = Meteor.users.findOne(userID);
        Meteor.users.update(user, { $push: { "prizes": prizeItem } });
    },
    "addSponsorItem": function(userID, sponsorItem) {
        var user = Meteor.users.findOne(userID);
        Meteor.users.update(user, { $push: { "sponsors": sponsorItem } });
    },
    "addApps": function(userID, android_url, ios_url) {
        var user = Meteor.users.findOne(userID);
        console.log(android_url + " " + ios_url);
        Meteor.users.update(user, { $set: { "app_type": 0, "android_app": android_url, "ios_app": ios_url } });
    },
    "addColors": function(userID, primary_color, secondary_color) {
        var user = Meteor.users.findOne(userID);
        Meteor.users.update(user, { $set: { "app_type": 1, "primary_color": primary_color, "secondary_color": secondary_color } });
    },
    "addSite": function(userID, hackURL) {
        var user = Meteor.users.findOne(userID);
        console.log(hackURL);
        Meteor.users.update(user, { $set: { "app_type": 2, "custom_url": hackURL } });
    },
    "addHackathon": function(userID, hackathonID) {
    	var user = Meteor.users.findOne(userID);
        Meteor.users.update(user, { $set: { "hackathon_id": hackathonID} });
    }
});
