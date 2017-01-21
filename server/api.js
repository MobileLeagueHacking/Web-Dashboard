// import {
//     User
// }
// from '../lib/models/Users.js';

// import {
//     Report
// }
// from '../lib/models/Reports.js';

//Create Api version 1 using the default authentication and pretty JSON :D
var Api1 = new Restivus({
    version: "v1",
    prettyJson: true
});

Api1.addRoute('events/:id', {
    get: function() {
        result = Meteor.http.get("https://mlh.io/seasons/" + this.urlParams.id + "-2017/events");
        $ = cheerio.load(result.content);
        var objects = [];
        $('.event').each(function (i, elem) {
            var name = $(elem).find('.inner h3').text();
            var date = $(elem).find('.inner p').eq(0).text();
            var imageURL = $(elem).find('.image-wrap').children().first().attr('src');
            var hackURL = $(elem).find('.event-wrapper').children().first().attr('href');
            var logoURL = $(elem).find('.event-logo').children().first().attr('src');
            var location = $(elem).find("div[itemprop='address']").text().replace(/[\r\n]/g, '').replace(/\s/g, '');
            var startDate = $(elem).find("meta[itemprop='startDate']").attr('content');
            console.log(name);
            var endDate = $(elem).find("meta[itemprop='endDate']").attr('content');
            var object = {
                name: name,
                date: date,
                imageURL: imageURL,
                hackURL: hackURL,
                logoURL: logoURL,
                location: location,
                startDate: startDate,
                endDate: endDate
            }
            objects.push(object);
        });
        return objects;
    }
});