module objects {
    class GameObject extends createjs.Bitmap {
        constructor(imagePath:string, x:number, y:number, isCentered:boolean) {
            super(imagePath);
        }
    }
}