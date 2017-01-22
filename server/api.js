// import {
//     User
// }
// from '../lib/models/Users.js';

import {
    Hackathon
}
from '../lib/models/Hackathons.js';

//Create Api version 1 using the default authentication and pretty JSON :D
var Api1 = new Restivus({
    version: "v1",
    prettyJson: true
});

Api1.addRoute('events/:region', {
    get: function() {
        var returnArray = [];
        var regionParam = this.urlParams.region;
        var hackathons = Hackathon.find({ region: regionParam });
        hackathons.forEach(function(item) {
            returnArray.push(item);
        });
        return returnArray;
    }
});

Api1.addRoute('events/id/:hackathonID', {
    get: function() {
        var returnArray = [];
        var hackathonID = this.urlParams.hackathonID;
        var hackathons = Hackathon.find(hackathonID);
        hackathons.forEach(function(item) {
            returnArray.push(item);
        });
        return returnArray;
    }
});

Api1.addRoute('hackathon/:hackID', {
    get: function() {
        var hackathonID = this.urlParams.hackID;
        var hackathon = Meteor.users.findOne({ hackathon_id: hackathonID });
        console.log(hackathon);
        return hackathon; 
    }
});

Api1.addRoute('refresh/:region', {
    get: function() {
        var regionParam = this.urlParams.region;
        result = Meteor.http.get("https://mlh.io/seasons/" + regionParam + "-2017/events");
        $ = cheerio.load(result.content, { decodeEntities: false });
        var objects = [];
        // Hackathon.remove({})
        Hackathon.remove({ region: regionParam });
        $('.event').each(function(i, elem) {
            var name = $(elem).find('.inner h3').first().text();
            if (!name.includes("[email")) {
                var date = $(elem).find('.inner p').eq(0).text();
                var imageURL = $(elem).find('.image-wrap').children().first().attr('src');
                var hackURL = $(elem).find('.event-wrapper').children().first().attr('href');
                var logoURL = $(elem).find('.event-logo').children().first().attr('src');
                var location = $(elem).find("div[itemprop='address']").text().replace(/[\r\n]/g, '').replace(/\s/g, '');
                var startDate = $(elem).find("meta[itemprop='startDate']").attr('content');
                var endDate = $(elem).find("meta[itemprop='endDate']").attr('content');
                var object = {
                    name: name,
                    date: date,
                    region: regionParam,
                    imageURL: imageURL,
                    hackURL: hackURL,
                    logoURL: logoURL,
                    location: location,
                    startDate: startDate,
                    endDate: endDate
                }
                Hackathon.insert(object);
            }
        });
        return objects;
    }
});
