import { Class } from 'meteor/jagi:astronomy';
import { Meteor } from 'meteor/meteor';

export const User = Class.create({
    name: 'User',
    collection: Meteor.users,
    fields: {
        createdAt: Date,
        emails: {
            type: [Object],
            default: function() {
                return [];
            }
        },
        roles: [String],
        allowed_domains: {
            type: [String],
            optional: true
        },
        firstName: String,
        lastName: String,
        grade: {
            type: Number,
            optional: true
        },
        birthday: {
            type: Date,
            optional: true
        },
        notes: {
            type: String,
            optional: true
        },
        schoolID: Mongo.ObjectID
    }
});

if (Meteor.isServer) {
    User.extend({
        fields: {
            services: Object
        }
    });
}
