import {Hackathons} from '../lib/models/Hackathons.js'

Meteor.publish("hackathons", function() {
    return Hackathons.find();
});
// Meteor.publish("users", function() {
//     return Meteor.users.find();
// })