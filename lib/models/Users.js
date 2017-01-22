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
        app_type: Boolean,

        colors: {
            type: [String],
            optional: true
        },
        
    }
});

if (Meteor.isServer) {
    User.extend({
        fields: {
            services: Object
        }
    });
}
