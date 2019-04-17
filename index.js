// Code your solution in this file!
const logDriverNames = function(drivers) {
  drivers.forEach(function(driver) {
    console.log(driver.name);
  });
};

const logDriversByHometown = function(drivers, location) {
  drivers.forEach(function(driver) {
    if (driver.hometown === location) {
      console.log(driver.name)};
  });
};

const driversByRevenue = function(drivers) {
  let newDrivers = [...drivers] //divers.slice(0)
  return newDrivers.sort(function(a,b) {
    return a.revenue - b.revenue;
  });
};

const driversByName = function(drivers) {
  return drivers.slice(0).sort(function(a,b){
    return a.name.localeCompare(b.name);
  });
};

const totalRevenue = function(drivers) {
  return drivers.reduce(function(agg, el, i, arr){
    return agg + el.revenue;}, 0)
};

const averageRevenue = function(drivers) {
  return average = totalRevenue(drivers) / drivers.length;  
};
