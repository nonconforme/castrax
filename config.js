var config = {
    type:Phaser.AUTO,
    width: 1280,
    height: 720,
    physics: {
        default:'arcade',
        arcade: {
            gravity: {y:200}
        }
    },
    scene: [Field]
};
