"use strict";
(function (exports) {
    let currentPos;
    let cleanedCount = 0;
    let oilTiles;
    function getOilSpillData(data) {
        clearData(data);
        movement(data['navigationInstructions'], data['areaSize']);
        return {
            "finalPosition": currentPos,
            "oilPatchesCleaned": cleanedCount
        };
    }
    function clearData(data) {
        currentPos = data['startingPosition'];
        cleanedCount = 0;
        oilTiles = data["oilPatches"];
    }
    function movement(directions, seaSize) {
        for (let i = 0; i < directions.length; i++) {
            move(directions[i], seaSize);
        }
    }
    function move(direction, seaSize) {
        switch (direction) {
            case 'N':
                var newPos = [currentPos[0], currentPos[1] + 1];
                countCleanedTiles(newPos);
                return canMove(newPos, seaSize);
            case 'S':
                var newPos = [currentPos[0], currentPos[1] - 1];
                countCleanedTiles(newPos);
                return canMove(newPos, seaSize);
            case 'E':
                var newPos = [currentPos[0] + 1, currentPos[1]];
                countCleanedTiles(newPos);
                return canMove(newPos, seaSize);
            case 'W':
                var newPos = [currentPos[0] - 1, currentPos[1]];
                countCleanedTiles(newPos);
                return canMove(newPos, seaSize);
        }
    }
    function canMove(newPos, seaSize) {
        if (newPos[0] >= 0 && newPos[0] <= seaSize[0] && newPos[1] >= 0 && newPos[1] <= seaSize[1]) {
            currentPos = newPos;
        }
        else {
            throw new Error('moved outside of sea');
        }
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