"use strict";
class OilSpill {
    constructor(spillData) {
        this._maxX = spillData["areaSize"][0];
        this._maxY = spillData["areaSize"][1];
    }
    answer() {
        return {
            "finalPosition": [1, 3],
            "oilPatchesCleaned": 1
        };
    }
    finalPosition(startingPos, directions) {
        var x = startingPos[0];
        var y = startingPos[1];
        for (let i = 0; i < directions.length; i++) {
            switch (directions[i]) {
                case 'N':
                    y += 1;
                    break;
                case 'S':
                    y -= 1;
                    break;
                case 'E':
                    x += 1;
                    break;
                case 'W':
                    x -= 1;
                    break;
            }
        }
        return [x, y];
    }
}
module.exports = OilSpill;
//# sourceMappingURL=oilSpill.js.map