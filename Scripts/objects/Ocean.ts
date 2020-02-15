module object {
	export class Ocean extends objects.GameObject {
		private _verticalSpeed?: number;

		constructor() {
			super("./Assets/images/ocean.gif");
		}

		protected _checkBounds(): void {
		}

		private _move(): void {

		}

		public Start(): void {
			this._verticalSpeed = 5;
		}

		public Update(): void {
			this._move();
			this._checkBounds();
		}

		public Reset(): void {
		}
	}
}