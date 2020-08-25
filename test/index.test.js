var OilSpill = require('../dist/oilSpill.js')

describe('oilSpillAnswer', function() {
    let oilSpill

    beforeEach(function() {
        oilSpill = new OilSpill
    })

    test('outputs json', function() {
        var jsonAnswer = 
            {
                "finalPosition" : [1, 3],
                "oilPatchesCleaned" : 1
              }
        
        expect(oilSpill.answer()).toEqual(jsonAnswer)
    })



})