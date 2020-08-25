"use strict";
(function (exports) {
    let finalPos;
    let cleanedCount = 0;
    let oilTiles;
    function getOilSpillData(data) {
        oilTiles = data["oilPatches"];
        cleanedCount = 0;
        movement(data['startingPosition'], data['navigationInstructions']);
        return {
            "finalPosition": finalPos,
            "oilPatchesCleaned": cleanedCount
        };
    }
    function movement(startingPos, directions) {
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
            countCleanedTiles([x, y]);
            console.log(oilTiles, cleanedCount);
        }
        finalPos = [x, y];
    }
    function countCleanedTiles(position) {
        for (let i = 0; i < oilTiles.length; i++) {
            if (position[0] === oilTiles[i][0] && position[1] === oilTiles[i][1]) {
                cleanedCount++;
                oilTiles.splice(i);
            }
        }
    }
    module.exports = getOilSpillData;
})(this);
//# sourceMappingURL=getOilSpillData.js.map