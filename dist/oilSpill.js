"use strict";
class OilSpill {
    constructor(spillData) {
        this._oilTiles = spillData["oilPatches"];
        this._cleanedTiles = 0;
        this._startingPos = spillData["startingPosition"];
        this._directions = spillData["navigationInstructions"];
    }
    answer() {
        return {
            "finalPosition": this.finalPosition(this._startingPos, this._directions),
            "oilPatchesCleaned": this._cleanedTiles
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
            this.cleanedTile([x, y]);
        }
        return [x, y];
    }
    oilCheck(position) {
        let oilTile = false;
        for (let i = 0; i < this._oilTiles.length; i++) {
            if (position[0] === this._oilTiles[i][0] && position[1] === this._oilTiles[i][1]) {
                oilTile = true;
                this._oilTiles.splice(i, 1);
            }
        }
        return oilTile;
    }
    cleanedTile(postion) {
        if (this.oilCheck(postion)) {
            this._cleanedTiles++;
        }
    }
}
module.exports = OilSpill;
//# sourceMappingURL=oilSpill.js.map