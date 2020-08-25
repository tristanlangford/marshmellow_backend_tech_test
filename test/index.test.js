var oilSpillAnswer = require('../dist/oilSpill.js')

describe('oilSpillAnswer', function() {

    test('outputs json', function() {
        var jsonAnswer = 
            {
                "finalPosition" : [1, 3],
                "oilPatchesCleaned" : 1
              }
        
        expect(oilSpillAnswer()).toEqual(jsonAnswer)
    })

})