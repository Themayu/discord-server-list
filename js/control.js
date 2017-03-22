$(document).ready(function() {
  var assembleSidebarServerEntry = function (index, el) {
    var server = $('<div class="server py-1 px-2 mb-1" data-id="' + index + '"></div>');
    $(server).append('<p class="name mb-1 mr-1 d-inline-block">' + el['server-name'] + '</p>');
    $(server).append('<p class="user-count text-muted mb-1 d-inline-block">' + el['user-count'] + ' Users</p>')
    $(server).append('<p class="short-desc m-0 d-block">' + truncateStr(el['description'], 50) + '</p>');
    $(server).append('<p class="invite text-muted m-0 mt-1">(' + el['invite'] + ')</p>');

    serverList += server.get(0).outerHTML;
  }

  var exampleServerData = [
    {
      'description': 'A roleplay server taking place on a pair of islands, with portals between each one. ' +
                     'Purgatory is a science-fantasy roleplay where almost anything is allowed: humans, ' +
                     'werewolves, angels, dragons, etc., anything that comes to mind.',
      'icon': {
        'type': 'icon',
        'content': 'https://cdn.discordapp.com/icons/259536826304430080/0bf37265180baa680ceed62b805c9a00.png',
        'text': 'P'
      },
      'rank': 1,
      'rating': 1,
      'server-name': "Purgatory",
      'user-count': 4,
      'channel-count': 3,
      'invite': 'BeWdRTp',
      'example-messages': [
        {
          channel: '#general',
          from: 'Teruko#9136',
          message: "This server is big. It can stay alive for another 30-100 days without anyone taking care, except for very few staff.\n\nServers revolves around activity. If there's no activity, RPers won't RP. They need more interaction.\nIf there's no activity all the time, they will go elsewhere, because they think it is solely up to the owners, which is halfy-right. They have to ensure activity, but you are the activity.\n\nI have more, but I'm lazy.\n\n**Idk**.\nRandom message.",
          timestamp: '1489143980'
        },
        {
          channel: '#beach1',
          from: 'ninjafrogtez#8775',
          message: "(including why my mind can't comprehend the reality of u choosing your current profile pic)",
          timestamp: '1489143060'
        },
        {
          channel: '#dreaming',
          from: 'Darkpuppy#9233',
          message: "*hes constantly smacking his head on the wall of the elevator*",
          timestamp: '1488346260'
        }
      ],
      'example-users': [
        {username: 'Alex', discriminator: '1571'},
        {username: 'Cherry The Meme', discriminator: '3763'},
        {username: 'Teruko', discriminator: '9136'},
        {username: 'Zuris', discriminator: '4495'}
      ]
    },
    {
      'description': 'Chat for Hacker\'s Edge, a highly realistic online hacking game located <a href="http://www.hackers-edge.com/" class="external-link">\nhere\n</a>.',
      'icon': {
        'type': 'text',
        'content': null,
        'text': 'H\'sE'
      },
      'rank': 2,
      'rating': 0,
      'server-name': "Hacker's Edge",
      'user-count': 6,
      'channel-count': 2,
      'invite': 'R7gs88h',
      'example-messages': [
        {
          channel: '#general',
          from: 'chronoboy#3402',
          message: "One of the main ideas behind Hacker's Edge is to create a sandbox environment which is semi-realistic.  It allows for a safe environment where one can play around with realistic hacking ideas, as Hacker's Edge provides a virtual Internet consistenting of working Virtual Machines which run real machine code and have the ability to communicate to each other over said virtual Internet.  Players are free to modify raw memory addresses, assemble machine code, run port scanning tools, send out raw packet data to other in-game machines, and so on.",
          timestamp: '1490141760'
        },
        {
          channel: '#spam',
          from: 'bauen1#3624',
          message: "removes everything in the ascii range 128-255 from the stream",
          timestamp: '1458330000'
        }
      ],
      'example-users': [
        {username: 'AdminUtils', discriminator: '4635 [Bot user]'},
        {username: 'chronoboy', discriminator: '3402'},
        {username: 'IAmSilK', discriminator: '0348'},
        {username: 'LightkillerX', discriminator: '4866'},
        {username: 'Missingno50', discriminator: '3997'},
        {username: 'Zuris', discriminator: '4495'}
      ]
    },
    {
      'description': 'The Programmer\'s Hangout (TPH) is a small, community driven discord in which you are free' +
      'to discuss and learn anything related to computer science, programming, or technology in general. If you' +
      'would like to know more about us, read the info channel, #info.\nWelcome and enjoy your stay :)',
      'icon': {
        'type': 'icon',
        'content': 'https://cdn.discordapp.com/icons/244230771232079873/37843453ef2b855d227be2f558e18070.png',
        'text': 'TP\'sH'
      },
      'rank': 3,
      'rating': 0,
      'server-name': "The Programmer's Hangout",
      'user-count': 3,
      'channel-count': 5,
      'invite': 'BeWdRTp',
      'example-messages': [
        {
          channel: '#general',
          from: '🔥Fox#7705',
          message: "Morning",
          timestamp: '1490181900'
        },
        {
          channel: '#javascript',
          from: 'Pandito#4353',
          message: "hey guys, I recently followed a guide on how to connect with google using OAuth, however it " +
          "says that passport.authenticate isnt a function, which I cant find inside the passportfile either, any" +
          " ideas how this works?Passport: http://pastebin.com/rdWgnw8g ,  Index.js http://pastebin.com/9XB7qGUd\n" +
          "passport.authenticate is not a function\n\n" +
          "TypeError: passport.authenticate is not a function\n" +
          "   at module.exports (C:\Users\Oskar\Documents\GitHub\password-manager\password-manager\password-manager\routes\index.js:40:38)",
          timestamp: '1490129640'
        },
        {
          channel: '#javascript',
          from: 'TM™#6440',
          message: "I'm trying to investigate your issue, but there's not much to investigate.",
          timestamp: '1490130780'
        }
      ],
      'example-users': [
        {username: '🔥Fox', discriminator: '7705'},
        {username: 'devoidfury', discriminator: '3045'},
        {username: 'Zuris', discriminator: '4495'}
      ]
    }
  ]

  var showEditor = function(e) {
    var $field = $($(this).data('field'));
    var $staticField = $($field.get(0));
    var $editor = $($field.get(1));

    $textboxSizingBox.appendTo($field.parent());
    if ($(this).data('field') !== '#control-frame .server-name') {
      $textboxSizingBox.removeClass('display-5');
    } else {
      $textboxSizingBox.addClass('display-5');
    }

    $editor.keyup(resizeTextBox);

    $(this).children('i').removeClass('fa-pencil').addClass('fa-floppy-o');
    $staticField.removeClass('d-inline-block');
    $editor.css({
      width: Math.ceil($staticField.width()),
      height: Math.ceil($staticField.height()*1.1)+2,
      fontFamily: $staticField.css('font-family')
    }).val($staticField.html()).addClass('d-inline-block').focus();

    $(this).off('click').click(saveAndHideEditor);
  }

  var saveAndHideEditor = function(e) {
    var $field = $($(this).data('field'));
    var $staticField = $($field.get(0));
    var $editor = $($field.get(1));
    var fieldvalue = $editor.val();
    var cp = $('#control-frame');
    var id = parseInt(cp.attr('data-index'));

    $staticField.html(fieldvalue);
    exampleServerData[id][$editor.attr('name')] = fieldvalue;

    $editor.off('keyup');

    $(this).children('i').removeClass('fa-floppy-o').addClass('fa-pencil');
    $staticField.addClass('d-inline-block');
    $editor.removeClass('d-inline-block');

    buildServerList();

    $(this).off('click').click(showEditor);
  }

  var resizeTextBox = function(e) {
    var minWidth = 150;
    var currentWidth;
    var currentHeight;
    $textboxSizingBox.text($(this).val());
    currentWidth = $textboxSizingBox.width();
    currentHeight = $textboxSizingBox.height();

    $(this).css({
      width: ((currentWidth <= minWidth)? minWidth : currentWidth),
      height: currentHeight
    });
  }

  var showServerPanel = function() {
    var cp = $('#control-frame');
    var id = parseInt($(this).data('id'));
    cp.attr('data-index', id);

    var $serverName = cp.find('.server-name:not(textarea)');
    var $serverIcon = cp.find('.server-icon:not(textarea)');
    var $serverDesc = cp.find('.description:not(textarea)');
    var   $userList = cp.find('.user-list');
    var $statistics = cp.find('.stats-box');
    var   $messages = cp.find('.messages');

    var $serverRatings = $statistics.find('.rating-number');
    var    $serverRank = $statistics.find('.rank-number');
    var $serverChanNum = $statistics.find('.channel-number');

    $serverName.text(exampleServerData[id]['server-name']);
    $serverIcon.empty();

    if (exampleServerData[id]['icon']['type'] === 'icon') {
      $serverIcon.append(
        '<img src="' +
        exampleServerData[id]['icon']['content'] +
        '" alt="' +
        exampleServerData[id]['server-name'] +
        ' icon" class="w-100 rounded icon" />'
      )
    } else {
      $serverIcon.append(
        '<div class="icon-text icon rounded" aria-label="' +
        exampleServerData[id]['server-name'] +
        ' icon"><p class="text">' +
        exampleServerData[id]['icon']['text']) +
        '</p></div>'
    }

    $serverDesc.html(exampleServerData[id]['description']);

    buildUserList(exampleServerData[id]['example-users']);
    buildMessageList(exampleServerData[id]['example-messages']);

    $serverRatings.text(exampleServerData[id]['rating']);
    $serverRank.text(exampleServerData[id]['rank']);
    $serverChanNum.text(exampleServerData[id]['channel-count']);

    cp.css({display: 'block'});

    cp.find('.server-name + .field-actions').click(showEditor);
    cp.find('.description + .field-actions').click(showEditor);

    $('a.external-link', '.description').each(function(index, el) {
      var $el = $(el);
      console.log('Setting data-domain to ' + el.hostname);
      $el.attr('data-domain', el.hostname);
    });
  }

  var serverList;
  var $textboxSizingBox = $('#textbox-sizing');

  var buildMessageList = function(messages) {
    var msgl = $('.messages');
    msgl.empty();

    $.each(messages, function(index, message) {
      var     messageDOM = $('<div class="message mt-1 px-2 py-1"></div>');

      var  messageHeader = $('<div class="msg-header"></div>');
      var messageContent = $('<div class="msg-content"></div>');
      var  messageFooter = $('<div class="msg-footer"></div>');

      var  messageAuthor = $('<p class="msg-author m-0"></p>');
      var messageChannel = $('<p class="msg-channel m-0"></p>');

      var    messageTime = $('<p class="msg-time mb-0 pb-05"></p>');

      var date = new Date(message.timestamp * 1000);

      var formattedDate = new String().concat(
        (date.getDate() <= 9)? '0' + date.getDate() : date.getDate(), '/',
        (date.getMonth() <= 9)? '0' + date.getMonth() : date.getMonth(), '/',
        date.getFullYear()
      );
      var formattedTime = new String().concat(
        (date.getHours() <= 9)? '0' + date.getHours() : date.getHours(), ':',
        (date.getMinutes() <= 9)? '0' + date.getMinutes() : date.getMinutes(), ':',
        (date.getSeconds() <= 9)? '0' + date.getSeconds() : date.getSeconds()
      );

      messageContent.html(markup(message.message));
      messageAuthor.text('From ' + message.from);
      messageChannel.text('In ' + message.channel);
      messageTime.text(formattedDate + ' ' + formattedTime);

      messageAuthor.appendTo(messageHeader);
      messageChannel.appendTo(messageHeader);

      messageTime.appendTo(messageFooter);

      messageHeader.appendTo(messageDOM);
      messageContent.appendTo(messageDOM);
      messageFooter.appendTo(messageDOM);

      messageDOM.appendTo(msgl);
    });
  }

  var buildUserList = function(users) {
    var ul = $('.user-list');
    ul.empty();

    $.each(users, function(index, user) {
      var userDOM = $('<div class="user mb-1 py-1 px-2">' + user.username + '#' + user.discriminator + '</div>');
      userDOM.appendTo(ul);
      console.log(userDOM);
    });
  }

  var buildServerList = function() {
    serverList = '';
    var index = 0;

    $.each(exampleServerData, assembleSidebarServerEntry);

    $('#sidebar-server-list').html(serverList);

    $('.server', '#sidebar-server-list').click(showServerPanel);
  }

  buildServerList();
});
