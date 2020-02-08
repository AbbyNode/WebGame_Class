module objects {
    export abstract class Scene extends createjs.Container {
        constructor() {
            super();

            this.Start();
        }

        /**
         * Initialization method
         *
         * @abstract
         * @memberof Scene
         */
        public abstract Start():void;

        /**
         * Update method
         *
         * @abstract
         * @memberof Scene
         */
        public abstract Update():void;
    }
}