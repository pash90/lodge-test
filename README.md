# Solution Design

After a getting a sense of how each log is structured, I first generated JSDoc typedef(in `types.js`) so that I no longer have to worry about what is defined or not in the log object.

After that, its pretty straight forward:

## Steps

1. I started off by sorting the list of logs by their timestamp. Therefore I know exactly the order in which each log took place. I used Iterative Merge Sort for sorting the array of logs. As low time complexity(nlogn) as possible was what I aiming for.
2. Once sorted, I separated the child and parent logs since I was asked to group the child logs under the respective parent log.
3. Once I had two different list of parent and child logs, the rest was simple - going through each log and check if it has got an error or not:
   - Parent Logs : I checked the `msg` attribute to see if the log had an error or not
   - Child Logs : I checked if the `error` attribute was defined and if defined, it was false.
4. Then, its a simple matter of logging to the console.
5. Also, it logs the run time taken in total to process the logs at the end.
