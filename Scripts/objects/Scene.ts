module objects {
    export abstract class Scene extends createjs.Container {
        
        private _state : scenes.State = scenes.State.NO_SCENE;
        public get state() : scenes.State {
            return this._state;
        }
        public set state(v : scenes.State) {
            this._state = v;
        }
        
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