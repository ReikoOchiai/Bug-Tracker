export default bug;

function bug(bug) {
  this._id = bug._id;
  this.name = bug.name;
  this.details = bug.detail;
  this.steps = bug.steps;
  this.version = bug.version;
  this.priority = bug.priority;
  this.assigned = bug.assigned;
  this.creator = bug.creator;
  this.time = bug.time;
}
