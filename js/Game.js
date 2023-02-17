class Game {
    constructor() {}

    getState() {
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        });
    }
    update(state) {
        database.ref("/").update({
            gameState: state,
        });
    }
    start() {
        player = new Player();
        playerCount = player.getCount();

        form = new Form();
        form.display();

        car1 = createSprite(width / 2 - 300, height - 100);
        car1.addImage("car1", car1_img);
        car1.scale = 0.07;

        car2 = createSprite(width / 2 - 100, height - 100);
        car2.addImage("car2", car2_img);
        car2.scale = 0.07;

        car3 = createSprite(width / 2 + 200, height - 100);
        car3.addImage("car3", car3_img);
        car3.scale = 0.17;

        car4 = createSprite(width / 2 + 70, height - 150);
        car4.addImage("car4", car4_img);
        car4.scale = 0.5;
    }

    handleElements() {
        form.hide();
        form.titleImg.position(40, 50);
        form.titleImg.class("gameTitleAfterEffect");
    }

    play() {
        this.handleElements();
        Player.getPlayersInfo();
        if (allPlayers !== undefined) {
            image(track, 0, -height * 5, width, height * 6);
            drawSprites();
        }
    }
}
