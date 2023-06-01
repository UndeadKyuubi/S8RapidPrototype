/* 
Title screen:
Title: Uses text to convey the exact title text "Roly Poly: To the End"
Theme: Uses visual assets to convey the themes of the game (fairies / roly polies / snails).
Aliveness: Some sort of animation should be used to make the scene feel alive and responsive (e.g. tween-based movement)
Controls: It should be very obvious (even without the ability to read) that you tap/click the screen to begin play.

Victory screen: Some visually-satisfying scene showing a roly poly getting a badge, using motion so that the scene feels alive. 
Tapping the screen cycles back to the title screen
*/
class Title extends Phaser.Scene {
    constructor(){
        super('title');
    }

    preload(){
        this.load.image('roly', 'assets/Roly.png');
        this.load.image('bg', 'assets/title.jpg');
        this.load.image('snail', 'assets/snail.png');
        this.load.image('circle', 'assets/circle.png');
    }

    create(){
        const width = this.scale.width;
        const height = this.scale.height;

        let bg = this.add.image(400, 350, 'bg');
        bg.setScale(2);

        let title = this.add.text(100, 100, "Roly Poly: To the End");
        
        let roly1 = this.add.image(width * 0.2, height * 0.65, 'roly');
        roly1.setScale(0.4);

        let snail1 = this.add.image(width * 0.7, height * 0.65, 'snail');
        snail1.setScale(0.4);

        let circle = this.add.image(400, 540, 'circle');
        circle.setScale(0.5);

        this.tweens.add({
            targets: circle,
            scale: 0.8,
            ease: 'Linear',
            duration: 1500,
            repeat: -1,
            yoyo: true
        });

        this.tweens.add({
            targets: roly1,
            alpha: {from: 0, to: 1},
            duration: 2000,
            repeat: 0
        });
        
        this.tweens.add({
            targets: snail1,
            alpha: {from: 0, to: 1},
            duration: 2000,
            repeat: 0
        });
        
        this.input.on('pointerdown', () => this.scene.start('victory'));

    }
}

class Victory extends Phaser.Scene {
    constructor(){
        super('victory');
    }

    preload(){
        this.load.image('badge', 'assets/badge.png');
        this.load.image('roly', 'assets/Roly.png');
        this.load.image('bg', 'assets/title.jpg');
        this.load.image('snail', 'assets/snail.png')
    }

    create(){
        const width = this.scale.width;
        const height = this.scale.height;

        let bg = this.add.image(400, 350, 'bg');
        bg.setScale(2);
        
        let roly2 = this.add.image(width * 0.35, height * 0.65, 'roly');
        roly2.setScale(0.4);
    
        let snail1 = this.add.image(500, 300, 'snail');
        snail1.setScale(0.25);
    
        let badge = this.add.image(100, 100, 'badge');
        badge.setScale(0.5);
    
        this.tweens.add({
            targets: snail1,
            alpha: {from: 0, to: 1},
            duration: 2000,
            repeat: 0
        });

        this.tweens.add({
            targets: badge,
            x: width * 0.35,
            y: height * 0.65,
            duration: 2000,
            repeat: 0
        });

        this.input.on('pointerdown', () => this.scene.start('title'));
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