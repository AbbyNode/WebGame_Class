module objects {
	export class Plane extends GameObject {
		constructor() {
			super(config.Game.ASSETS.getResult("plane"), 0, 0, true);

			this.Start();
		}

		protected _checkBounds(): void {
		}

		private _move(): void {
			let mouseX = config.Game.STAGE.mouseX;
			let mouseY = config.Game.STAGE.mouseY;

			this.position = new Vector2(mouseX, 430);
		}

		public Start(): void {
		}

		public Update(): void {
			this._move();
		}

		public Reset(): void {
		}
	}
}