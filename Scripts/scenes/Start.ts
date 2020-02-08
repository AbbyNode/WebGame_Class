module scenes {
    export class Start extends objects.Scene {
        startLabel:objects.Label;
        startButton:objects.Button;
        player:objects.Player;

        constructor() {
            super();

            this.startLabel = new objects.Label();
            this.startButton = new objects.Button();
            this.player = new objects.Player();
        }

        public Start(): void {
            this.startLabel = new objects.Label("The Game", "40px", "Consolas", "#000000", 320, 240, true);
            this.startButton = new objects.Button("./Assets/images/startButton.png", 350, 300, true);
            this.player = new objects.Player();
        }

        public Update(): void {
            this.player.update();

            // managers.Collision.squaredRadiusCheck(player, startButton);
            managers.Collision.AABBCheck(this.player, this.startButton);
        }

        public Main(): void {

            this.addChild(this.startLabel);

            this.addChild(this.startButton);
            this.startButton.on("click", function () {
                console.log("Clicked button");
            });

            this.addChild(this.player);

        }
    }
}