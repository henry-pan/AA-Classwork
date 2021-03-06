const APIUtil = require("./api_util.js");

class FollowToggle {
  constructor(el) {
    this.$el = $(el);
    this.userId = this.$el.data("user-id");
    this.followState = this.$el.data("initial-follow-state");
    this.render();
    this.$el.on("click", this.handleClick.bind(this));
  }

  render() {
    if (this.followState === "unfollowed") {
      this.$el.text("Follow!");
      this.$el.prop("disabled", false);
    } else if (this.followState === "followed") {
      this.$el.text("Unfollow!");
      this.$el.prop("disabled", false);
    } else if (this.followState === "following") {
      this.$el.text("Following!");
      this.$el.prop("disabled", true);
    } else if (this.followState === "unfollowing") {
      this.$el.text("Unfollowing!");
      this.$el.prop("disabled", true);
    }
  }

  handleClick(e) {
    e.preventDefault();

    if (this.followState === "unfollowed") {
      this.followState = "following";
      this.render();

      APIUtil.followUser(this.userId).then(() => {
        this.followState = "followed";
        this.render();
      });
    } else if (this.followState === "followed") {
      this.followState = "unfollowing";
      this.render();
      
      APIUtil.unfollowUser(this.userId).then(() => {
        this.followState = "unfollowed";
        this.render();
      });
    }
  }

}

module.exports = FollowToggle;
