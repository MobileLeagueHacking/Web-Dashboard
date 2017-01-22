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
    }
});