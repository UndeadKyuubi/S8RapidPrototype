/* 
Title screen:
Title: Uses text to convey the exact title text "Roly Poly: To the End"
Theme: Uses visual assets to convey the themes of the game (fairies / roly polies / snails).
Aliveness: Some sort of animation should be used to make the scene feel alive and responsive (e.g. tween-based movement)
Controls: It should be very obvious (even without the ability to read) that you tap/click the screen to begin play.

Victory screen: Some visually-satisfying scene showing a roly poly getting a badg, using motion so that the scene feels alive. 
Tapping the screen cycles back to the title screen
*/
class Title extends Phaser.Scene {
    constructor(){
        super('title');
    }

    init(){

    }

    preload(){
        this.load.image('roly', 'assets/Roly.jpg');
    }

    create(){
        const width = this.scale.width;
        const height = this.scale.height;
        let title = this.add.text(100, 100, "Roly Poly: To the End");
        
        let roly1 = this.add.image(width * 0.2, height * 0.65, 'roly');
        roly1.setScale(0.4);
        
        this.input.on('pointerdown', () => this.scene.start('victory'));
    }

    update(){

    }
}

class Victory extends Phaser.Scene {
    constructor(){
        super('victory');
    }

    init(){

    }

    preload(){

    }

    create(){
        this.input.on('pointerdown', () => this.scene.start('title'));
    }

    update(){

    }
}

var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    scene: [Title, Victory],
};

var game = new Phaser.Game(config);