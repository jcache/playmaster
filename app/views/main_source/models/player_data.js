export default {
  getPlayer(player,cb) {
    cb(player);
  },
  getPlayers(cb) {
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
    cb(players);
  },
}
