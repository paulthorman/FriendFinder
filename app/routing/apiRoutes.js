// Libraries
var path = require('path');
var chalk = require('chalk');

// Data load
var friendsData = require('../data/friends');

module.exports = function (app) {
    // GET route to display JSON of all friends
    app.get('/api/friends', function (request, response) {
        response.json(friendsData);
    });

    // POST route to handle incoming survey results and compatibility logic
    app.post('/api/friends', function (request, response) {
        friendsData.push(request.body);
        response.json(compatible(friendsData));
        console.log(chalk.green(request.body.name + ' was added as a friend.'));
    });
};

// Compatibility logic
function compatible (data) {
    var newUserLoc = data.length - 1;
    var newUserScore = data[newUserLoc].scores;
    var compatibleArr = [];
    var minVal = 0;
    var indexBool = false;
    var compIndex;
    var compatibleFriendName;
    var compatiblePhoto;

    for (var i = 0; i < newUserLoc; i++) {
        var compatibleScore = 0;
        var friendScore = data[i].scores;

        for (var j = 0; j < friendScore.length; j++) {
            compatibleScore += Math.abs(parseInt(newUserScore[j] - parseInt(friendScore[j])));
        }
        compatibleArr.push(compatibleScore);
    }

    for (var k = 0; k < compatibleArr.length; k++) {
        if (compatibleArr.length > 1 && k < compatibleArr.length - 1) {
            minVal = Math.min(compatibleArr[k], compatibleArr[k + 1]);
            indexBool = true;
        }
    }

    if (indexBool) {
        compIndex = compatibleArr.indexOf(minVal);
        compatibleFriendName = data[compIndex].name;
        compatiblePhoto = data[compIndex].photo;    
    } else {
        compatibleFriendName = data[minVal].name;
        compatiblePhoto = data[minVal].photo;
    }

    var compatibleFriend = {
        name: compatibleFriendName,
        photo: compatiblePhoto
    }

    return compatibleFriend;
}