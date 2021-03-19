const APIUtil = require("./api_util.js");

class UsersSearch {
  constructor(el) {
    this.$el = $(el);
    this.input = $(".users-input");
    this.ul = $(".users");
    $(".users-input").on("input", this.handleInput.bind(this));
  }

  handleInput(e) {
    e.preventDefault();
    const input = this.input.val();
    APIUtil.searchUsers(input).then(res => {
      this.renderResults(res);
    });
  }

  renderResults(res) {
    this.ul.empty();
    for (let i = 0; i < res.length; i++){
      this.ul.append(`<li><a href="/users/${res[i].id}">${res[i].username}</a></li>`);
    }
  }
}

module.exports = UsersSearch;
