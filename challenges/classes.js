// 1. Copy and paste your prototype in here and refactor into class syntax.

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

console.log("*****************************CLASSES*******************************************");

/* ===== Prototype Practice ===== */

// Task: You are to build a cuboid maker that can return values for a cuboid's volume or surface area. Cuboids are similar to cubes but do not have even sides. Follow the steps in order to accomplish this challenge.

/* == Step 1: Base Constructor ==
  Create a constructor function named CuboidMaker that accepts properties for length, width, and height
*/
/*function CuboidMaker (cuboidAttributes) {
    this.length = cuboidAttributes.length;
    this.width = cuboidAttributes.width;
    this.height = cuboidAttributes.height;
  
}*/

//===changed the name to CuboidMakerClass because it was giving me an error: 'CuboidMaker' has already been declared
class CuboidMakerClass {
    constructor(cuboidAttributes) {
        this.length = cuboidAttributes.length;
        this.width = cuboidAttributes.width;
        this.height = cuboidAttributes.height;
    }

    volume() {
        return (this.length * this.width * this.height);
    }

    surfaceArea() {
        return (2 * (this.length * this.width + this.length * this.height + this.width * this.height));
    }
}

  
  
  /* == Step 2: Volume Method ==
    Create a method using CuboidMaker's prototype that returns the volume of a given cuboid's length, width, and height
    
    Formula for cuboid volume: length * width * height
  */
  /*CuboidMaker.prototype.volume = function () {
    return (this.length * this.width * this.height);
  
  }*/
  
  
  /* == Step 3: Surface Area Method ==
    Create another method using CuboidMaker's prototype that returns the surface area of a given cuboid's length, width, and height. 
  
    Formula for cuboid surface area of a cube: 2 * (length * width + length * height + width * height)
  */
  /*CuboidMaker.prototype.surfaceArea = function() {
  
    return (2 * (this.length * this.width + this.length * this.height + this.width * this.height));
  
  };*/
  
  /* == Step 4: Create a new object that uses CuboidMaker ==
    Create a cuboid object that uses the new keyword to use our CuboidMaker constructor
    Add properties and values of length: 4, width: 5, and height: 5 to cuboid.   
  */

  //===changed the name to cuboidClass because it was giving me an error: 'CuboidMaker' has already been declared
  const cuboidClass = new CuboidMakerClass({
    length: 4,
    width: 5,
    height: 5
  });
  
  
  // Test your volume and surfaceArea methods by uncommenting the logs below:
  console.log(`Cuboid Volume: ${cuboidClass.volume()}`); // 100
  console.log(`Cuboid surface area: ${cuboidClass.surfaceArea()}`); // 130

  /*Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for 
  volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  
  Test your work by logging out your volume and surface area.*/

  class CubeMaker extends CuboidMakerClass{
      constructor(cuboidMakerClassAttributes) {
          super(cuboidMakerClassAttributes);

      }
      

      surfaceArea() {
          return 6 * (this.length * this.length); //formula: 6s(squared)
      }

  }

  //a cube's length, width, and height is exactly the same
  const cube = new CubeMaker({
    length: 5,
    width: 5,
    height: 5
  });

  console.log(`Cube Volume: ${cube.volume()}`);//formula: l * w * h = 125
  console.log(`Cube Surface Area: ${cube.surfaceArea()}`);//formula: 6s(squared) = 150
  
  
  
  
  