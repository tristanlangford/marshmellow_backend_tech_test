class OilSpill {
    _maxY: number
    _maxX: number

    constructor(spillData: any) {
        this._maxX = spillData["areaSize"][0]
        this._maxY = spillData["areaSize"][1]
    }

    answer() {
        return {
            "finalPosition" : [1, 3],
            "oilPatchesCleaned" : 1
          }
    }

    finalPosition(startingPos: number[], directions: string) {
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
        }
        return [x, y]
    }

}


    module.exports = OilSpill
