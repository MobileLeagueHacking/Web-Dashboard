import {
    Class
}
from 'meteor/jagi:astronomy';
import {
    Mongo
}
from 'meteor/mongo';

export const Reports = new Mongo.Collection('reports');
export const Report = Class.create({
    name: 'Report',
    collection: Reports,
    fields: {
        studentID: {
            type: String,
            optional: true
        },
        firstName: String,
        lastName: String,
        grade: Number,
        date: Date,
        message: String,
        location: String,
        schoolID: String,
        ref: String,
        contributers: [String],
        resolved: String,
        readStatus: {
            type: Date,
            optional: true
        },
        messages: [Object]
    }
});
