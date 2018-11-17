class Field extends Phaser.Scene {
    constructor() {
        super({key:"Field"});
    }

    preload() {
        this.load.image('TankFR1', 'assets/tank2fr1.png');
        this.load.image('Bullet', 'assets/Bullet.png');
    }
    create() {
        this.image = this.add.image(400,300,'TankFR1');

        this.input.keyboard.on('keyup_D', function (event) {
           this.image.x +=10;
        }, this);

        this.input.keyboard.on('keyup_P', this.fire, this);
    }

    fire() {
        var pi = this.physics.add.image(this.image.x, this.image.y, 'Bullet')
        pi.setVelocity(Phaser.Math.RND.integerInRange(-100,100), -300);
    }
}