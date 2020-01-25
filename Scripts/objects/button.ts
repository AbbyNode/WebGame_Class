module objects {
    export class Button extends createjs.Bitmap {
        constructor(imgPath:string, x:number, y:number, isCentered:boolean) {
            super(imgPath);

            this.x = x;
            this.y = y;

            if (isCentered)  {
                this.regX = this.getBounds().width * 0.5;
                this.regY = this.getBounds().height * 0.5;
            }

            this.on("mouseover", this.mouseover);
            this.on("mouseout", this.mouseout);
        }

        // method
        mouseover():void {
            this.alpha = 0.7;
        }

        mouseout():void {
            this.alpha = 1;
        }
    }
}