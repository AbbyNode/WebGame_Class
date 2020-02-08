module objects {
    export class Player extends GameObject {
        constructor() {
            // super();
            super("./Assets/images/default.png", 0, 0, true);
        }

        protected _checkBounds(): void {
            // throw new Error("Method not implemented.");
        }
        public start(): void {
            // throw new Error("Method not implemented.");
            // this.isCentered = true;
        }
        public update(): void {
            let stage = config.Game.STAGE;
            this.position = new Vector2(stage.mouseX, stage.mouseY);

            // TODO: Check Tom's GitHub for mouse fix
            // https://github.com/CentennialCollege/COMP397-W2020-Lesson5B

        }
        public reset(): void {
            // throw new Error("Method not implemented.");
        }
    }
}