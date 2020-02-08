module managers {
    export class Collision {
        public static squaredRadiusCheck(gObj1: objects.GameObject, gObj2: objects.GameObject): void {
            let sqrDistance = objects.Vector2.sqrDistance(gObj1.position, gObj2.position);
            let radii = gObj1.halfWidth + gObj2.halfWidth;

            if (sqrDistance <= (radii * radii)) {
                if (!gObj2.isColliding) {
                    console.log("Collision!");
                    gObj2.isColliding = true;
                }
            } else {
                gObj2.isColliding = false;
            }
        }
    }
}