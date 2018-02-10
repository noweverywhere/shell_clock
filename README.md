# Clock in the shell

## Description

A graphical representation of an anlog clock in the terminal. This repository
exists purely as a fun exercise.

### Setup

After downloading or cloning this repository and navigating into the
repository folder: To execute the program run `node index.js`. You can 
optionally provide a timestring in the format "hh:mm" or "h:mm". When no
timestring is provided the clock renders the current system time.

To run the tests first install the testing dependencies with the command
`npm i`. Once you have installed the dependencies you can run the tests
with `npm run test`.

## Project Logic Requirements
- the project must render in the console a representation of an analog 
  clock face indicating the time from a provided timestring
- shows a 'h' in the position where the hour hand of the clock would be
- shows a 'm' in the position where the minute hand would be
- shows a 'x' when the hand and minute are in the same position
- shows a 'o' in the positions where neither the hour nor minute hand of the clock would be
- a timestring must be provided in the format "h:mm" or "hh:mm"
- the minute hand is rounded down. For example 21:44 is rounded down to 21:40

## Examples

Input: `8:13`
Output:
```
8:13

          o
    o           o

 o                 m

o         +         o

 h                 o

    o           o
          o

```

Input: `19:39`
Output:
```
19:39

          o
    o           o

 o                 o

o         +         o

 o                 o

    x           o
          o

```

Input: `x:1`
Output:
```
"x:1" is not a valid time
  hours: "x" is not an integer
  mintes: "1" is ambiguous
```

Input: `-1:60`
Output:
```
"-1:60" is not a valid time
  hours: "-1" can not be smaller than 0
  mintes: "60" can not be greater than 59
```
