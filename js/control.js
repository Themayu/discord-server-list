$(document).ready(function() {
  var assembleSidebarServerEntry = function (index, el) {
    var server = $('<div class="server"></div>');
    $(server).append('<p class="name">' + el['server-name'] + '</p>');

    $('#sidebar-server-list').append('<p>Hello!</p>');

    console.log(server);
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

  var serverList = '';
  var index = 0;

  for (server of exampleServerData) {
    assembleSidebarServerEntry(index, server);
    ++index;
  }

  $('#sidebar-server-list').html(serverList);
});
