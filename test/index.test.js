var OilSpill = require('../dist/oilSpill.js')
var mockInput = require('./mockInput.json')

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



})