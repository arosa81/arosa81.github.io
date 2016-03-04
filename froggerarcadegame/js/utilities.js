/**
* @name getRandomIntInclusive
* @description Utility function to randomize stuff
* @function
* @param {integer} min - minimum number to use in randomizer
* @param {integer} max - minimum number to use in randomizer
*/
function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// function isCollision() {
//   if (Object.prototype.isPrototypeOf(Enemy)) {
//     // var bugXHitCoord = this.x+15;
//     // var bugYHitCoord = this.y+(171/2);
//     var playerXHitCoord = player.x+20;
//     var playerYHitCoord = player.y+70;
//
//     for (var i = 0; i < allEnemies.length; i++) {
//       if (allEnemies[i].getX()+15 < playerXHitCoord + player.width &&
//        allEnemies[i].getX()+15 + allEnemies[i].getWidth() > playerXHitCoord &&
//        allEnemies[i].getX()+(171/2) < playerYHitCoord + player.height &&
//        allEnemies[i].getHeight() + allEnemies[i].getX()+(171/2) > playerYHitCoord)
//         return true;
//       else
//         return false;
//     }
//   }
// }
