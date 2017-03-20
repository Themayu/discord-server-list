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
        'content': 'https://cdn.discordapp.com/icons/259536826304430080/8971ff3789a4ead9d0dad08106fd8af1.png'
      },
      'rank': 1,
      'rating': 1,
      'server-name': "Purgatory",
      'user-count': 260,
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
        {username: 'Zuris', discriminator: '4495'},
        {username: 'Teruko', discriminator: '9136'},
      ]
    }
  ]

  var showEditor = function(e) {
    var $field = $($(this).data('field'));
    var $staticField = $($field.get(0));
    var $editor = $($field.get(1));

    $(this).css({transform: 'translateY(-50%)'}).children('i').removeClass('fa-pencil').addClass('fa-floppy-o');
    $staticField.removeClass('d-inline-block');
    $editor.css({width: $staticField.width() + 'px', height: Math.ceil($staticField.height()*1.1)+2}).val($staticField.text()).addClass('d-inline-block');
    console.log($field, $staticField, $editor, $editor.get(0).value.width);

    $(this).off('click').click(saveAndHideEditor);
  }

  var saveAndHideEditor = function(e) {
    $(this).off('click').click(showEditor);
  }

  var showServerPanel = function() {
    var cp = $('#control-frame');
    var id = parseInt($(this).data('id'));
    cp.attr('data-index', id);

    cp.find('.server-name').text(exampleServerData[id]['server-name']);

    cp.css({display: 'block'});

    cp.find('.server-name + .field-actions').click(showEditor);
  }

  var serverList = '';
  var index = 0;

  $.each(exampleServerData, assembleSidebarServerEntry);

  $('#sidebar-server-list').html(serverList);

  $('.server', '#sidebar-server-list').click(showServerPanel);
});
