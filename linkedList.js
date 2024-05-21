class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.count = 0;
  }

  //   appends new node to the end of ll
  append(value) {
    let newNode = new Node(value);

    if (this.head == null) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.nextNode) {
        currentNode = currentNode.nextNode;
      }
      currentNode.nextNode = newNode;
    }
    this.count++;
  }

  prepend(value) {
    let newNode = new Node(value);

    if (this.head == null) {
      this.head = newNode;
    } else {
      let startNode = this.head;
      this.head = newNode;
      newNode.nextNode = startNode;
    }
    this.count++;
  }

  size() {
    return this.count;
  }

  header() {
    return this.head;
  }

  tailer() {
    if (this.head == null) {
      return null;
    } else {
      let currentNode = this.head;
      while (currentNode.nextNode) {
        currentNode = currentNode.nextNode;
      }
      return currentNode;
    }
  }

  at(index) {
    if (this.head == null) {
      return null;
    } else {
      let counter = 0;
      let currentNode = this.head;
      while (currentNode.nextNode && counter < index) {
        currentNode = currentNode.nextNode;
        counter++;
      }
      if (counter == index) {
        return currentNode;
      } else {
        return null;
      }
    }
  }

  pop() {
    // if ll is empty
    if (this.head == null) {
      return null;
    }
    // if ll has only one node (head node)
    if (this.head.nextNode == null) {
      let deletedNode = this.head;
      this.head = null;
      this.count--;
      return deletedNode;
    }
    // traverse this ll and delete the lst node
    else {
      let currentNode = this.head;
      while (currentNode.nextNode.nextNode) {
        currentNode = currentNode.nextNode;
      }
      let deletedNode = currentNode.nextNode;
      currentNode.nextNode = null;
      this.count--;
      return deletedNode;
    }
  }

  contains(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value == value) {
        return true;
      }
      currentNode = currentNode.nextNode;
    }
    return false;
  }

  find(value) {
    let index = 0;
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value == value) {
        return index;
      }
      currentNode = currentNode.nextNode;
      index++;
    }
    return null;
  }

  toString() {
    let st = "";
    let currentNode = this.head;
    while (currentNode) {
      st += "( ";
      st += currentNode.value;
      st += " )";
      st += " -> ";
      currentNode = currentNode.nextNode;
    }
    st += "null";
    return st;
  }
}

let ll = new LinkedList();

ll.append(11);
ll.append(22);
ll.append(33);
ll.append(44);

console.log(ll.toString());
