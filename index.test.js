const waypoints = require("./waypoints.json");

const {
  getDistanceSpeedingInMeters,
  getDurationSpeedingInSecs,
  getTotalDistanceInMeters,
  getTotalDurationInSecs,
} = require("./index.js");

test("should output the correct Peter's distance speeding in km", () => {
  const distanceSpeedingInMeters = getDistanceSpeedingInMeters(waypoints);
  expect(distanceSpeedingInMeters).toBe(67);
});

test("should output the correct Peter's duration speeding in min", () => {
  const distanceSpeedingInMeters = getDurationSpeedingInSecs(waypoints);
  expect(distanceSpeedingInMeters).toBe(5);
});

test("should output the correct Peter's total distance in km", () => {
  const distanceSpeedingInMeters = getTotalDistanceInMeters(waypoints);
  expect(distanceSpeedingInMeters).toBe(201);
});

test("should output the correct Peter's total duration in min", () => {
  const distanceSpeedingInMeters = getTotalDurationInSecs(waypoints);
  expect(distanceSpeedingInMeters).toBe(20);
});
