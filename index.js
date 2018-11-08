/** Libraries */
const Lodash = require("lodash");
const { performance } = require("perf_hooks");

/** Helpers */
const { mergeSort } = require("./helpers");

/** Data */
const { data } = require("./log-data");

const t1 = performance.now();
/** Sorting */
const logsSortedByTime = mergeSort(data, data.length);

const childLogs = logsSortedByTime.filter(log => log.parent_span_id);
const parentLogs = logsSortedByTime.filter(log => !log.parent_span_id);

const groupedParentLogs = Lodash.groupBy(parentLogs, item => item.trace_id),
  groupedChildLogs = Lodash.groupBy(childLogs, item => item.trace_id);

const traceIds = Object.keys(groupedParentLogs);

traceIds.forEach(traceId => {
  groupedParentLogs[traceId].forEach(log => {
    // Parent Log
    if (log.msg.indexOf("fail") >= 0) {
      console.log(`- ${log.time} ${log.app} ${log.component} ${log.msg}`);

      // Child Logs
      if (groupedChildLogs[traceId]) {
        groupedChildLogs[traceId].forEach(childLog => {
          if (childLog.error || childLog.msg.indexOf("fail") >= 0) {
            console.log(
              `    - ${childLog.time} ${childLog.app} ${childLog.component} ${
                childLog.msg
              }`
            );
          }
        });
      }
    }
  });
});

const t2 = performance.now();

console.log(`\n\nIt took ${t2 - t1} milliseconds to parse through the logs.`);
