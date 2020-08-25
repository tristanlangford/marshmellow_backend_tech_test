"use strict";
class OilSpill {
    constructor(spillData) {
        this._oilTiles = spillData["oilPatches"];
        this._cleanedTiles = 0;
        this._startingPos = spillData["startingPosition"];
        this._directions = spillData["navigationInstructions"];
        this._finalPos = this._startingPos;
    }
    getData() {
        this.movement();
        return {
            "finalPosition": this._finalPos,
            "oilPatchesCleaned": this._cleanedTiles
        };
    }
    movement() {
        var x = this._startingPos[0];
        var y = this._startingPos[1];
        for (let i = 0; i < this._directions.length; i++) {
            switch (this._directions[i]) {
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
            this.countCleanedTiles([x, y]);
        }
        this._finalPos = [x, y];
    }
    countCleanedTiles(position) {
        for (let i = 0; i < this._oilTiles.length; i++) {
            if (position[0] === this._oilTiles[i][0] && position[1] === this._oilTiles[i][1]) {
                this._cleanedTiles++;
                this._oilTiles.splice(i);
            }
        }
    }
}
module.exports = OilSpill;
//# sourceMappingURL=oilSpill.js.map