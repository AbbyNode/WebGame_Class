module scenes {
	export class Play extends objects.Scene {
		// PRIVATE INSTANCE MEMBERS
		// private _playLabel: objects.Label;
		// private _nextButton: objects.Button;

		private _ocean: objects.Ocean;
		private _plane: objects.Plane;

		// PUBLIC PROPERTIES

		// CONSTRUCTOR
		constructor() {
			super();

			// initialization
			// this._playLabel = new objects.Label("Place Scene", "80px", "Consolas", "#ffff00", 320, 200, true);
			// this._nextButton = new objects.Button(config.Game.ASSETS.getResult("nextButton"), 320, 400, true);

			this._ocean = new objects.Ocean();
			this._plane = new objects.Plane();

			this.Start();
		}

		// PUBLIC METHODS

		public Start(): void {
			this.Main();
		}

		public Update(): void {
			this._ocean.Update();
			this._plane.Update();
		}

		public Main(): void {
			this.addChild(this._ocean);
			this.addChild(this._plane);

			// this.addChild(this._playLabel);

			// this.addChild(this._nextButton);

			// this._nextButton.on("click", function () {
			// 	config.Game.SCENE_STATE = scenes.State.END;
			// });
		}


	}
}