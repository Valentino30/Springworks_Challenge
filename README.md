# Waypoints Challenge

This is a home assignment for recruitment candidates to [Springworks](https://www.springworks.se).

## Challenge

Write a program that reads the data from `waypoints.json` and categorizes it as per below:

- Distance Speeding
- Duration Speeding
- Total Distance
- Total Duration

## Solution

**Assumptions**

When solving the challenge it has been assumed that: 

- The waypoints are ordered so that waypoints[0] = origin and waypoints[waypoints.length - 1] = destination.
- The "Distance Speeding" will be computed only if at least two waypoints with speeds over the speed limits are provided.
- The "Duration Speeding" will be computed only if at least two waypoints with speeds over the speed limits are provided.

**Choices**

- The challenge has been solved using vanilla JavaScript, as this is the language I am most comfortable with.
- To keep things simple, the distances between waypoints are calculated using the great-circle distance formula and are directly logged to the console using meters and seconds as units of space and time.

**Run**

- Clone or download this repo and open it with your favorite IDE
- Open the terminal, navigate to the repo's folder and install dependencies using the command `yarn`
- Navigate to the index.js file and run it to see the results printed to the console
- Finally, run the command `yarn test` in the terminal to run the unit tests
