class Field extends Phaser.Scene {
    constructor() {
        super({key:"Field"});
    }

    preload() {
        this.load.image('TankFR1', 'assets/tank2fr1.png');
    }
    create() {
        this.image = this.add.image(400,300,'TankFR1');

        this.input.keyboard.on('keyup_D', function (event) {
           this.image.x +=10;
        }, this);
    }
}