function card(type, number) {
  this.cardType = type;
  this.key = `${type}-card-${number}`;
}

export function generateCards(type, n) {
  var libCards = [];
  for (var i = 0; i < n; i++) {
    libCards.push(new card(type, i));
  }

  return libCards;
}

// Fisher-Yates Shuffle algorithm
// https://bost.ocks.org/mike/shuffle/
export function shuffle(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

// play music
export function playAudio(url, volume = 1.0) {
  var a = new Audio(url);
  a.volume = volume;
  a.play();
}
