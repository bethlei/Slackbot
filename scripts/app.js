// Project 1 for JS032017
// Build a Slackbot on top of Hubot
// Author: Elizabeth Lei
// Date: April 11, 2017


module.exports = function(bot) {

  // Task 1 - Hubot will greet users when they join or leave a channel with a random phrase.
  var joinReplies = ['Target Acquired', 'Hello friend', 'I see you'];
  var leaveReplies = ['Are you still there?', 'Target lost', 'Searching'];

  bot.enter(function(msg) {
    return msg.send(msg.random(joinReplies));
  });

  bot.leave(function(msg) {
    return msg.send(msg.random(leaveReplies));
  });


  // Task 2 - Hubot will be given two choices and asked to determine which/who is better or worse.
  // For each scenario, we have six possible answers.
  // Four static answers and two dynamically interpolated answers.
  var answers = [
    'I could tell you, but I want you to decide for yourself!',
    'Answering that would be a matter of personal preference.',
    'You can\'t possibly compare them!',
    'Both hold a special place in my heart!'
  ];

  bot.respond(/(which|who) is (better|worse)\?* (.*) or (.*?)\??$/i, function(msg) {
    var randomResponse;
    randomResponse = msg.random([1, 2, 3, 4, 5, 6]);
    if (randomResponse >= 3) {
      return msg.send(msg.random(answers));
    } else {
      return msg.send("Clearly " + msg.match[randomResponse + 2] + " is " + msg.match[2]);
    }
  });


  // Task 3 - Hubot will be asked to check/list low ingredients/inventory for 'chocolate chip cookies',
  // so ingredients can be replenished before they run out.
  // We will create an inventory collection for chocolate chip cookie and iterate on properties to determine
  // which ingredients are running low. Ingredient that has less than 5 units in stock is considered low-level inventory.
  // If ingredients/inventory for other products are requested, an alternate message will be sent back
  // saying 'ingredient list for that product is not available at this time'.
  var chocChipCookieInventory = {
    flour: 10,
    butter: 4,
    sugar: 2,
    salt: 5,
    bakingSoda: 6,
    eggs: 120,
    chocolateChips: 15,
    vanillaExtract: 6
  };

  bot.respond(/(check|list) low (ingredients|inventory) for (.*)/i, function(msg) {
    var output = [];
    var product = msg.match[3].toLowerCase();
    if (product === 'chocolate chip cookie') {
      for (var prop in chocChipCookieInventory) {
        if (chocChipCookieInventory[prop] < 5) {
          output.push(prop);
        }
      }
      if (output.length > 0) {
        var str = output.join(', ');
        return msg.send('We\'re running low on ' + str + ' for ' + product);
      } else {
        return msg.send('We\'re ok with ingredient list for ' + product);
      }
    } else {
      return msg.send('Ingredient list for ' + product + ' is not available at this time.');
    }
  });


  // Task 4 - April 11, 2017 is National Pet Day. To honor Pet Day, Hubot is going to display random images of cute and lovable pets
  // stored in a 'pets' array when it hears the word 'pet'.
  var pets = [
    'http://media.istockphoto.com/photos/cute-dalmatian-picture-id175455453?s=2048x2048',
    'http://media.istockphoto.com/photos/adorable-pug-puppy-dog-in-park-picture-id468648042?s=2048x2048',
    'http://media.istockphoto.com/photos/wolf-dog-playing-on-the-beach-picture-id494709384?s=2048x2048',
    'http://media.istockphoto.com/photos/shar-pei-dog-picture-id667551336?s=2048x2048',
    'http://media.istockphoto.com/photos/german-sheperd-picture-id667545622?s=2048x2048',
    'http://media.istockphoto.com/photos/male-shiba-inu-dog-at-the-beach-picture-id502665349?s=2048x2048'
  ];

  bot.hear(/(^|\W)pet(\z|\W|$)/i, function(msg) {
    return msg.send(msg.random(pets));
  });
};
