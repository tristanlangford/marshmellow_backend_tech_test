var OilSpill = require('../dist/oilSpill.js')
var mockInput = require('./mockInput.json')
var mockInput2 = require('./mockInput2.json')

describe('oilSpillAnswer', function() {
    let oilSpill

    beforeEach(function() {
        oilSpill = new OilSpill(mockInput)
    })

    test('outputs json', function() {
        var jsonAnswer = 
            {
                "finalPosition" : [1, 3],
                "oilPatchesCleaned" : 1
              }
        
        expect(oilSpill.answer()).toEqual(jsonAnswer)
    })

    test('gets final position', function() {
        expect(oilSpill.finalPosition([1, 2], "NNESEESWNWW")).toEqual([1, 3])
    })

    test('checks if current tile is oil', function() {
        expect(oilSpill.oilCheck([1, 1])).toEqual(false)
        expect(oilSpill.oilCheck([1, 0])).toEqual(true)
    })

    test('returns correct result on different input', function() {
        oilSpill = new OilSpill(mockInput2)
        var jsonAnswer = 
            {
                "finalPosition" : [1, 2],
                "oilPatchesCleaned" : 2
              }
        expect(oilSpill.answer()).toEqual(jsonAnswer)
    })

})