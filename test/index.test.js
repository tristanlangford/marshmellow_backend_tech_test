var OilSpill = require('../dist/getOilSpillData')
var mockInput1 = require('./mockInput.json')
var mockInput2 = require('./mockInput2.json')
const getOilSpillData = require('../dist/getOilSpillData')

describe('oilSpillAnswer', function() {

    test('outputs json', function() {
        var jsonAnswer = 
            {
                "finalPosition" : [1, 3],
                "oilPatchesCleaned" : 1
              }
        
        expect(getOilSpillData(mockInput1)).toEqual(jsonAnswer)
    })

    test('returns correct result on different input', function() {
        var jsonAnswer = 
            {
                "finalPosition" : [1, 2],
                "oilPatchesCleaned" : 2
              }
        expect(getOilSpillData(mockInput2)).toEqual(jsonAnswer)
    })

})