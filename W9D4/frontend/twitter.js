const FollowToggle = require("./follow_toggle.js");

$(() => {
  $("button.follow-toggle").each((index, element) => new FollowToggle(element));
});
