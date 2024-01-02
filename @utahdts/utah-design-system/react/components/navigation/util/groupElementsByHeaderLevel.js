/** @typedef {import('@utahdts/utah-design-system').HierarchyNode} HierarchyNode */
/**
 * @param {Element[]} headers
 * @returns {HierarchyNode[]}
 */
export function groupElementsByHeaderLevel(headers) {
  if (!headers?.length) {
    return [];
  }

  const nodesHierarchy = /** @type {HierarchyNode[]} */ ([]);
  const nodesHierarchyStack = [{ children: nodesHierarchy, level: -1 }];

  headers.forEach((currentHeader) => {
    const newNode = { node: currentHeader, children: /** @type {HierarchyNode[]} */ ([]), level: Number(currentHeader.tagName.substring(1)) };
    const parentNode = nodesHierarchyStack[nodesHierarchyStack.length - 1];

    if (newNode.level === parentNode?.level) {
      // sibling of last node so pop last node from parent stack and create a new parent as this node
      nodesHierarchyStack.pop();
      nodesHierarchyStack[nodesHierarchyStack.length - 1]?.children.push(newNode);
    } else if (newNode.level > (parentNode?.level ?? NaN)) {
      // child of previous node
      parentNode?.children.push(newNode);
    } else if (newNode.level < (parentNode?.level ?? NaN)) {
      // going back up a level (multi-level hop is possible if adding more than just h2/h3)
      while ((nodesHierarchyStack[nodesHierarchyStack.length - 1]?.level ?? NaN) >= newNode.level) {
        nodesHierarchyStack.pop();
      }
      nodesHierarchyStack[nodesHierarchyStack.length - 1]?.children.push(newNode);
    }

    // the newNode is the new potential parent for the next node
    nodesHierarchyStack.push(newNode);
  });

  return nodesHierarchy;
}
