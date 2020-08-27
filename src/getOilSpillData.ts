(function(exports) {
    let currentPos: number[]
    let cleanedCount: number = 0
    let oilTiles: ([] | number[][]) 

    function getOilSpillData(data: any) {
        clearData(data)
        movement(data['navigationInstructions'], data['areaSize'])
        return {
            "finalPosition" : currentPos,
            "oilPatchesCleaned" : cleanedCount
        }
    }

    function clearData(data: any) {
        currentPos = data['startingPosition']
        cleanedCount = 0
        oilTiles = data["oilPatches"]
    }

    function movement(directions: string, seaSize: number[]) {
        for(let i = 0; i < directions.length; i++) {
                move(directions[i], seaSize)
        }
    }

    function move(direction: string, seaSize: number[]) {
        switch(direction) {
            case 'N':
                var newPos: number[] = [currentPos[0], currentPos[1] + 1]
                countCleanedTiles(newPos)
                return canMove(newPos, seaSize)
            case 'S':
                var newPos: number[] = [currentPos[0], currentPos[1] - 1]
                countCleanedTiles(newPos)
                return canMove(newPos, seaSize)
            case 'E':
                var newPos: number[] = [currentPos[0] + 1, currentPos[1]]
                countCleanedTiles(newPos)
                return canMove(newPos, seaSize)
            case 'W':
                var newPos: number[] = [currentPos[0] - 1, currentPos[1]]
                countCleanedTiles(newPos)
                return canMove(newPos, seaSize)
        }
    }

    function canMove(newPos: number[], seaSize: number[]) {
        if (newPos[0] >= 0 && newPos[0] <= seaSize[0] && newPos[1] >= 0 && newPos[1] <= seaSize[1]) {
            currentPos = newPos
        } else {
            throw new Error('moved outside of sea')
        }
    }

    function countCleanedTiles(position: number[]) {
        for(let i = 0; i < oilTiles.length; i++) {
            if (position[0] === oilTiles[i][0] && position[1] === oilTiles[i][1]) {
                cleanedCount ++
                oilTiles.splice(i)
            }
        }
    }

    module.exports = getOilSpillData
})(this)