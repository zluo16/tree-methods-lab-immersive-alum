function inOrder(currentNode) {
  if (currentNode.left) {
    inOrder(currentNode.left)
  }
  console.log(currentNode.data);

  if (currentNode.right) {
    inOrder(currentNode.right)
  }
}

function findOrAdd(rootNode, newNode) {
  if (rootNode.data == newNode.data) {
    return true
  }
  let currentNode = rootNode
  if (newNode.data < currentNode.data) {
    currentNode = rootNode.left
    if (currentNode) {
      return findOrAdd(currentNode, newNode)
    } else {
      return rootNode.left = newNode
    }
  } else if (newNode.data > rootNode.data) {
    currentNode = rootNode.right
    if (currentNode) {
      return findOrAdd(currentNode, newNode)
    } else {
      return rootNode.right = newNode
    }
  }
}

function max(tree) {
  
}
