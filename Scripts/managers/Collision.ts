module managers {
    export class Collision {
        public static squaredRadiusCheck(gObj1: objects.GameObject, gObj2: objects.GameObject): void {
            let sqrDistance = objects.Vector2.sqrDistance(gObj1.position, gObj2.position);
            let radii = gObj1.halfWidth + gObj2.halfWidth;

            if (sqrDistance <= (radii * radii)) {
                if (!gObj2.isColliding) {
                    console.log("Collision square radius");
                    gObj2.isColliding = true;
                }
            } else {
                gObj2.isColliding = false;
            }
        }

        public static AABBCheck(gObj1: objects.GameObject, gObj2: objects.GameObject) {
            let gObj1Offset:objects.Vector2 = new objects.Vector2(0, 0);
            let gObj2Offset:objects.Vector2 = new objects.Vector2(0, 0);

            if (gObj1.isCentered) {
                gObj1Offset.x = gObj1.halfWidth;
                gObj1Offset.y = gObj1.halfHeight;
            }
            if (gObj2.isCentered) {
                gObj1Offset.x = gObj2.halfWidth;
                gObj1Offset.y = gObj2.halfHeight;
            }

            let gObj1TopLeft = objects.Vector2.subtract(gObj1.position, gObj1Offset);
            let gObj2TopLeft = objects.Vector2.subtract(gObj2.position, gObj2Offset);

            if (gObj1TopLeft.x < gObj2TopLeft.x + gObj2.width &&
                gObj1TopLeft.x + gObj1.width > gObj2TopLeft.x &&
                gObj1TopLeft.y < gObj2TopLeft.y + gObj2.height &&
                gObj1TopLeft.y + gObj1.height > gObj2TopLeft.y) {
                console.log("Collision AABB");
            }
        }
    }
}

// https://tutorialedge.net/gamedev/aabb-collision-detection-tutorial/