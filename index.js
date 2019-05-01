const logDriverNames = function (drivers) {
  drivers.forEach(function (driver) {
    console.log(driver.name);
  });
}

const logDriversByHometown = function (drivers, location){
  drivers.forEach(function(driver) {
    console.log(driver);
    if (driver.hometown === location) {
      console.log(driver.name)};
  });
}

const driversByRevenue = function (drivers){
  let newDrivers = [...drivers]
  return newDrivers.sort(function (a, b) {
    return a.revenue - b.revenue;
  });
}

const driversByName = function(drivers) {
  return drivers.slice(0).sort(function(a,b){
    return a.name.localeCompare(b.name);
  });
}

const totalRevenue = function(drivers) {
  const driverRevenues = drivers.map(obj => obj.revenue)
  return driverRevenues.reduce((accumulator, currentValue) => {
    return accumulator + currentValue});
}

const averageRevenue = function(drivers) {
  return totalRevenue(drivers)/drivers.length
}
