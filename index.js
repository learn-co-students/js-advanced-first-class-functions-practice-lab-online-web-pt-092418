// Code your solution in this file!

const logDriverNames = function (driver) {
  driver.forEach( function (dname) {
    console.log(dname.name);
  });
};

const logDriversByHometown = function (driver, location) {
  driver.forEach( function (dname) {
    if (dname.hometown === location) {
      console.log(dname.name);
    }
  });
};

const driversByRevenue = function (driver) {
  const revd = [];
  driver.forEach( function (dr) {
    revd.push(dr);
    revd.sort(function (a, b) {
      return a.revenue - b.revenue;
    })
  });
  return revd
};

const driversByName = function (driver) {
  const named = [];
  driver.forEach( function (dr) {
    named.push(dr);
    named.sort(function (a, b) {
      return a.name.localeCompare(b.name);
    })
  });
  return named
};

const totalRevenue = function (driver) {
  const driverRev = function (agg, el){
    return agg + el.revenue;
  };
  return driver.reduce(driverRev, 0);
};

const averageRevenue = function (driver) {
  const driverRev = function (agg, el){
    return (agg + el.revenue);
  };
  return driver.reduce(driverRev, 0) / driver.length;
};
