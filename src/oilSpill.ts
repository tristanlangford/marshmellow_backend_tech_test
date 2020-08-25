class OilSpill {
    _oilTiles: number[][]
    _cleanedTiles: number
    _startingPos: number[]
    _directions: string

    constructor(spillData: any) {
        this._oilTiles = spillData["oilPatches"]
        this._cleanedTiles = 0
        this._startingPos = spillData["startingPosition"]
        this._directions = spillData["navigationInstructions"]

    }

    answer() {
        console.log(this.finalPosition(this._startingPos, this._directions))
        return {
            "finalPosition" : this.finalPosition(this._startingPos, this._directions),
            "oilPatchesCleaned" : this._cleanedTiles
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
            this.cleanedTile([x, y])
        }
        return [x, y]
    }

    oilCheck(position: number[]) {
        let oilTile = false
        for(let i = 0; i < this._oilTiles.length; i++) {
            if (position[0] === this._oilTiles[i][0] && position[1] === this._oilTiles[i][1]) {
                oilTile = true
                this._oilTiles.splice(i, 1)
            }
        }
        return oilTile
    }

    cleanedTile(postion: number[]) {
        if(this.oilCheck(postion)) { 
            this._cleanedTiles ++ 
        }
    }

}


    module.exports = OilSpill
