function produceDrivingRange(blockRange) {
  return function(starttBlock, endBlock) {
    let start = parseInt(starttBlock)
    let end = parseInt(endBlock)
    let distance = Math.abs(end - start)
    let range = blockRange - distance

    if (range > 0) {
      return `within range by ${range}`
    } else {
      return `${Math.abs(range)} blocks out of range`
    }
  };
}

function produceTipCalculator(percentage) {
  return function(tip) {
    return tip * percentage;
  };
}

function createDriver() {
  let driverId = 0;
  return class {
    constructor(name) {
      this.name = name;
      this.id = ++driverId;
    }
  };
}
