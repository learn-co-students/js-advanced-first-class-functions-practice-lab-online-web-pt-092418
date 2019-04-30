// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(function (driver) {
    console.log(driver.name);
  });
}

function logDriversByHometown(drivers, location) {
  drivers
    .filter(driver => driver.hometown === location)
    .forEach(function (driver) {
      console.log(driver.name);
    });
}
function driversByRevenue(drivers) {
  const sortedDrivers = [...drivers];
  sortedDrivers.sort(function (a, b) {
    return a.revenue - b.revenue;
  });
  return sortedDrivers;
}

function driversByName(drivers) {
  const newarray = [...drivers];
  return newarray.sort(function (a, b) {
    return a.anme > b.name
  });
  return newarray
}

function totalRevenue() {
  
}