/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/api_util.js":
/*!******************************!*\
  !*** ./frontend/api_util.js ***!
  \******************************/
/***/ ((module) => {

const APIUtil = {
  followUser: id => {
    return $.ajax({
      url: `/users/${id}/follow`,
      method: "POST",
      dataType: "JSON"
    });
  },

  unfollowUser: id => {
    return $.ajax({
      url: `/users/${id}/follow`,
      method: "DELETE",
      dataType: "JSON"
    });
  },

  searchUsers: queryVal => {
    return $.ajax({
      url: `/users/search`,
      method: "GET",
      data: {query: queryVal},
      dataType: "json"
    });
  }
};

module.exports = APIUtil;


/***/ }),

/***/ "./frontend/follow_toggle.js":
/*!***********************************!*\
  !*** ./frontend/follow_toggle.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const APIUtil = __webpack_require__(/*! ./api_util.js */ "./frontend/api_util.js");

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


/***/ }),

/***/ "./frontend/users_search.js":
/*!**********************************!*\
  !*** ./frontend/users_search.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const APIUtil = __webpack_require__(/*! ./api_util.js */ "./frontend/api_util.js");

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


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./frontend/twitter.js ***!
  \*****************************/
const FollowToggle = __webpack_require__(/*! ./follow_toggle.js */ "./frontend/follow_toggle.js");
const UsersSearch = __webpack_require__(/*! ./users_search.js */ "./frontend/users_search.js");

$(() => {
  $("button.follow-toggle").each((index, element) => new FollowToggle(element));
  $("nav.users-search").each((index, element) => new UsersSearch(element));
});

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map