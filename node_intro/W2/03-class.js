class Animal {
  constructor(testParam) {
    console.log(testParam);
    this.voice = "va va";
  }
}

class Janevari extends Animal {
  constructor(eyeColor = "black") {
    super("Sadra"); /// constructor baba ra seda mizanad
    this.eyeColor = eyeColor;
  }
}

const jan1 = new Janevari();
console.log(jan1.eyeColor);
console.log(jan1.voice);
