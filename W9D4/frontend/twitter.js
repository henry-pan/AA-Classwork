const FollowToggle = require("./follow_toggle.js");
const UsersSearch = require("./users_search.js");

$(() => {
  $("button.follow-toggle").each((index, element) => new FollowToggle(element));
  $("nav.users-search").each((index, element) => new UsersSearch(element));
});
