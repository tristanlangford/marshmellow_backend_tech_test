(function(exports) {
    let finalPos: number[]
    let cleanedCount: number = 0
    let oilTiles: ([] |number[][]) 

    function getOilSpillData(data: any) {
        oilTiles = data["oilPatches"]
        cleanedCount = 0
        movement(data['startingPosition'], data['navigationInstructions'])
        return {
            "finalPosition" : finalPos,
            "oilPatchesCleaned" : cleanedCount
        }
    }

    function movement(startingPos: number[], directions: string) {
        var x = startingPos[0]
        var y = startingPos[1]
        for(let i = 0; i < directions.length; i++) {
            switch(directions[i]) {
                case 'N':
                    y +=1
                    break
                case 'S':
                    y -= 1
                    break
                case 'E':
                    x+=1
                    break
                case 'W':
                    x-=1
                    break
            }
            countCleanedTiles([x, y])
            console.log(oilTiles, cleanedCount)
        }
        finalPos = [x, y]
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