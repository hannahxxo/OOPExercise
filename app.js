// OOP Exercise

// 1a
const mulan = {
    title: `Mulan`,
    main: `Fa Mulan`,
    // 1b
    quote: function(){
        return `Dishonor! Dishonor on your whole family!`
    },
    // 1c
    storyline: function(){
        return `In the movie ${this.title}, to save her father from death in the army, a young maiden named ${this.main} secretly goes in his place and becomes one of China's greatest heroines in the process.`
    }
}
// console.log(mulan.title);
// console.log(mulan.quote());
// console.log(mulan.storyline());

// 2a
const tangled = {
    title: `Tangled`,
    main: `Rapunzel`,
    // 2b
    quote: function(){
        return `I can't believe I did this! I can't believe I did this! I have to go home! I am never going back! I'm a horrible daughter! BEST DAY EVER!`;
    },
    // 2c
    storyline: function(){
        return `In ${this.title}, The magically long-haired ${this.main} has spent her entire life in a tower, but now that a runaway thief has stumbled upon her, she is about to discover the world for the first time, and who she really is.`;
    }
}
// console.log(tangled.main);
// console.log(tangled.quote());
// console.log(tangled.storyline());

// 3a
function DisneyMovie(title, main){
    this.title = title;
    this.main = main;
}
// 3b
DisneyMovie.prototype.storyline = function(){
    return `In the movie ${this.title}, to save her father from death in the army, a young maiden named ${this.main} secretly goes in his place and becomes one of China's greatest heroines in the process.`;
}

DisneyMovie.prototype.storyline = function(){
    return `In ${this.title}, The magically long-haired ${this.main} has spent her entire life in a tower, but now that a runaway thief has stumbled upon her, she is about to discover the world for the first time, and who she really is.`;
}
// 3c
const mulan1 = new DisneyMovie(`Mulan`, `Fa Mulan`);
console.log(mulan1);
console.log(mulan1.storyline());
// 3d
const tangled1 = new DisneyMovie(`Tangled`, `Rapunzel`);
console.log(tangled1);
console.log(tangled1.storyline());

// 4a
class DM {
    constructor(title, main){
      this.title = title;
      this.main = main;
    }
    // 4b
    storyline(){
      return `In the movie ${this.title}, to save her father from death in the army, a young maiden named ${this.main} secretly goes in his place and becomes one of China's greatest heroines in the process.`;
    }
    storyline(){
      return `In ${this.title}, The magically long-haired ${this.main} has spent her entire life in a tower, but now that a runaway thief has stumbled upon her, she is about to discover the world for the first time, and who she really is.`;
    }
  }
// 4c
const mulan2 = new DM(`Mulan`, `Fa Mulan`);
  console.log(DM);
  console.log(easterBunny.hello());
  console.log(easterBunny.bio());