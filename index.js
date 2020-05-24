const waypoints = require("./waypoints.json");

const getDistanceBetweenTwoWayointsInMeters = (waypoint1, waypoint2) => {
  let lat1 = waypoint1.position.latitude;
  let lon1 = waypoint1.position.longitude;
  let lat2 = waypoint2.position.latitude;
  let lon2 = waypoint2.position.longitude;

  // Great-circle distance formula
  const avgEarthRadiusInMeters = 6371 * 1000;
  let latDistance = convertAngleFromDegToRad(lat2 - lat1);
  let longDistance = convertAngleFromDegToRad(lon2 - lon1);
  let a =
    Math.sin(latDistance / 2) * Math.sin(latDistance / 2) +
    Math.cos(convertAngleFromDegToRad(lat1)) *
      Math.cos(convertAngleFromDegToRad(lat2)) *
      Math.sin(longDistance / 2) *
      Math.sin(longDistance / 2);
  let angleInRad = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  let distanceBetweenTwoWaypointsInMeters = avgEarthRadiusInMeters * angleInRad;

  return distanceBetweenTwoWaypointsInMeters;
};

const convertAngleFromDegToRad = (angleInDeg) => {
  const angleInRad = angleInDeg * (Math.PI / 180);
  return angleInRad;
};

const getTotalDistanceInMeters = (waypoints) => {
  let totalDistanceInMeters = 0;
  for (let i = 0; i < waypoints.length - 1; i++) {
    totalDistanceInMeters += getDistanceBetweenTwoWayointsInMeters(
      waypoints[i],
      waypoints[i + 1]
    );
  }

  return Math.floor(totalDistanceInMeters);
};

const getDistanceSpeedingInMeters = (waypoints) => {
  let distanceSpeedingInMeters = 0;
  for (let i = 0; i < waypoints.length - 1; i++) {
    if (waypoints[i].speed > waypoints[i].speed_limit) {
      if (waypoints[i + 1].speed > waypoints[i + 1].speed_limit) {
        distanceSpeedingInMeters += getDistanceBetweenTwoWayointsInMeters(
          waypoints[i],
          waypoints[i + 1]
        );
      }
    }
  }

  return Math.floor(distanceSpeedingInMeters);
};

const getDurationSpeedingInSecs = (waypoints) => {
  let durationSpeedingInSecs = 0;
  for (let i = 0; i < waypoints.length - 1; i++) {
    if (waypoints[i].speed > waypoints[i].speed_limit) {
      if (waypoints[i + 1].speed > waypoints[i + 1].speed_limit) {
        durationSpeedingInSecs +=
          (new Date(waypoints[i + 1].timestamp) -
            new Date(waypoints[i].timestamp)) /
          1000;
      }
    }
  }

  return Math.floor(durationSpeedingInSecs);
};

const getTotalDurationInSecs = (waypoints) => {
  const totalDurationInSecs =
    (new Date(waypoints[waypoints.length - 1].timestamp) -
      new Date(waypoints[0].timestamp)) /
    1000;

  return totalDurationInSecs;
};

const distanceSpeedingInMeters = getDistanceSpeedingInMeters(waypoints);
const durationSpeedingInSecs = getDurationSpeedingInSecs(waypoints);
const totalDistanceInMeters = getTotalDistanceInMeters(waypoints);
const totalDurationInSecs = getTotalDurationInSecs(waypoints);

console.log(`Peter's distance speeding is ${distanceSpeedingInMeters} meters`);
console.log(`Peter's duration speeding is ${durationSpeedingInSecs} seconds`);
console.log(`Peter's total distance is ${totalDistanceInMeters} meters`);
console.log(`Peter's total duration is ${totalDurationInSecs} seconds`);

module.exports = {
  getDistanceSpeedingInMeters,
  getDurationSpeedingInSecs,
  getTotalDistanceInMeters,
  getTotalDurationInSecs,
};
