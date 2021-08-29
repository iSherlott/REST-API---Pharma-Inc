const schedule = require("node-schedule");

const { newData } = require("./newData");

const rule = new schedule.RecurrenceRule();
rule.dayOfWeek = [new schedule.Range(0, 6)];
rule.hour = 00;
rule.minute = 00;
rule.second = 01;

module.exports = () => {
  schedule.scheduleJob(rule, function () {
    newData();
  });
};
