const schedule = require("node-schedule");

const { newData } = require("./newData");

const rule = new schedule.RecurrenceRule();
rule.dayOfWeek = [new schedule.Range(0, 6)];
rule.hour = 13;
rule.minute = 42;
rule.second = 30;

module.exports = () => {
  schedule.scheduleJob(rule, function () {
    newData();
  });
};
