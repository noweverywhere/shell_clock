# Clock in the shell

## Description

- shows a 'h' in the position where the hour hand of the clock would be
- shows a 'm' in the position where the minute hand would be
- shows a 'x' when the hand and minute are in the same position
- shows a 'o' in the positions where neither the hour nor minute hand of the clock would be
- rounds the the minute hand down, for example if  21:44 is rounded downto 21:40

## Examples
```
8:13

          o
    o           o

 o                 m

o         +         o

 h                 o

    o           o
          o


---

19:39

          o
    o           o

 o                 o

o         +         o

 o                 o

    x           o
          o

---

x:1

"x:1" is not a valid time
  hours: "x" is not an integer
  mintes: "1" is ambiguous
---

-1:60

"-1:60" is not a valid time
  hours: "-1" can not be smaller than 0
  mintes: "60" can not be greater than 59
```
