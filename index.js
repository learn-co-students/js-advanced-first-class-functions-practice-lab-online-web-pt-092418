const logDriverNames = function (driver) {
  return driver.forEach(function (driver) {
    console.log(driver.name)
  })
}

const logDriversByHometown = function (driver, hometown) {
  return driver.forEach(function (driver) {
    if (hometown === driver.hometown) {
      console.log(driver.name)
    }
  })
}

const driversByRevenue = function (drivers) {
  const driversCopy = [...drivers]
  return driversCopy.sort(function (driverOne, driverTwo) {
    return driverOne.revenue - driverTwo.revenue;
  });
};

const driversByName = function (drivers) {
  const driversCopy = [...drivers]
  return driversCopy.sort(function (driverOne, driverTwo) {
    return driverOne.name.localeCompare(driverTwo.name)
  });
};

const totalRevenue = function (drivers) {
  return drivers.reduce(function (accumulator, currentValue) {
    return currentValue.revenue + accumulator
  }, 0);
};

const averageRevenue = function (drivers) {
  return totalRevenue(drivers)/drivers.length
}
