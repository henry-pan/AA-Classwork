const DOMNodeCollection = requre("./dom_node_collection");

window.$l = function (arg) {
  if (arg instanceof HTMLElement) {
    return new DOMNodeCollection([arg]);
  } else {
    let nodeList = document.querySelectorAll(arg);
    let nodes = Array.from(nodeList);
    return new DOMNodeCollection(nodes);
  }
}