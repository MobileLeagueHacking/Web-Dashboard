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
        app_type: Number,
        primary_color: {
            type: String,
            optional: true
        },
        secondary_color: {
            type: String,
            optional: true
        },
        schedule: {
            type: [Object],
            optional: true
        },
        prizes: {
            type: [Object],
            optional: true
        },
        sponsors: {
            type: [Object],
            optional: true
        },
        android_app: {
            type: String,
            optional: true
        },
        ios_app: {
            type: String,
            optional: true
        },
        hack_url: {
            type: String,
            optional: true
        },
        custom_url: {
            type: String,
            optional: true
        },
        hackathon_id: {
            type: String,
            optional: true
        }
    }
});

if (Meteor.isServer) {
    User.extend({
        fields: {
            services: Object
        }
    });
}
