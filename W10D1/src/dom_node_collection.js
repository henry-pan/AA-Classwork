class DOMNodeCollection {
  constructor (nodes) {
    this.nodes = nodes;
  }

  html (str) {
    if (str) {
      this.nodes.forEach(el => {
        el.innerHTML = str;
      });
    } else {
      return this.nodes[0].innerHTML;
    }
  }

  empty () {
    this.html("");
  }

  append (child) {
    if (this.nodes.length === 0) return;
  }
}

module.exports = DOMNodeCollection;
