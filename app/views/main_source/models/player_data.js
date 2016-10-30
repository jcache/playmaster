const players =[
  {
    id: 1,
    player_name: `aestrro`,
    avatar_uri: `images/spiderman.jpg`,
  }, {
    id: 2,
    player_name: `jcache`,
    avatar_uri: `images/rogue.jpg`,
  }
]

export default {
  getPlayer(id,cb) {
    function findPlayerById(element) {
      return element.id == id;
    }
    var player = players.find(findPlayerById);
    cb(player);
  },
  getPlayers(cb) {
    cb(players);
  },
}
