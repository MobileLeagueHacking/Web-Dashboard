import {
    Class
}
from 'meteor/jagi:astronomy';
import {
    Mongo
}
from 'meteor/mongo';

export const Hackathons = new Mongo.Collection('hackathons');
export const Hackathon = Class.create({
    name: 'Hackathon',
    collection: Hackathons,
    fields: {
        name: String,
        date: String,
        region: String,
        imageURL: String,
        hackURL: String,
        logoURL: String,
        location: String,
        startDate: String,
        endDate: String
    }
});
