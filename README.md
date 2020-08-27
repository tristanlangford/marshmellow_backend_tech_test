# Oil Spill Clean up - Marshmallow Backend Test (JS)

A programme designed to calculate the final position of a sea cleaner, and count the oil spills cleaned. Takes in a json file with information on the size of the sea, positions of the spills, starting position of the cleaner, and directions the cleaner will take.

This is a backend tech test for Marshmallow Insurance. Built using TDD, JavaScript, Node.js, Typescript, & Jest for testing.

## Challenge

 [Original Challenge](https://github.com/marshmallow-insurance/java-backend-test)

 ## To run 

1. Clone this repo.

2. Install dependencies with:

   ```shell
   npm install
   ```

3. Run tests with:

   ```shell
   npm test
   ```

4. Run the Node REP:

   ```js
   node
   ```

5. Require `getOilSpillData.js`:

   ```js
   const getOilSpillData = require("./dist/getOilSpillData.js")
   ```

6. Create the input data:

   ```js
   const oilSpill = {
        "areaSize" : [5, 5],
        "startingPosition" : [1, 2],
        "oilPatches" : [
        [1, 0],
        [2, 2],
        [2, 3]
        ],
        "navigationInstructions" : "NNESEESWNWW"
    }
    ```

7. Get the final position and oil spills cleaned with the following method:

   ```js
   getOilSpillData(oilSpill)
   ```
