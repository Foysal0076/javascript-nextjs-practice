
class LinkedList {
  constructor(head = null) {
    this.head = head
  }

  appendNode(newNode) {
    let node = this.head
    if (node == null) {
      this.head = newNode
      return
    }

    while (node.next) {
      node = node.next
    }
    node.next = newNode
  }

  getNodeByIndex(index) {
    let node = this.head

    if (index === 0) {
      return this.head
    }

    while (index--) {
      if (node.next !== null) {
        node = node.next
      } else {
        throw new Error('Index out of bound')
      }
    }

    return node
  }

  length() {
    let node = this.head
    let count = 1
    if (this.head === null) return 0

    while (node.next) {
      ++count
      node = node.next
    }

    return count
  }

  reverse() {
    let prevNode = null
    let currentNode = this.head
    if (currentNode === null) return this.head

    let nextNode
    while (currentNode) {
      // this is for next iteration purpose
      nextNode = currentNode.next

      //changing reference to previous node instead of next node
      currentNode.next = prevNode

      // Go to next iteration
      prevNode = currentNode
      currentNode = nextNode
    }
    this.head = prevNode
  }

  printList() {
    let list = []
    let node = this.head
    while (node) {
      list.push(node.val)
      node = node.next
    }
    console.log(`HEAD -> ${list.join(' -> ')} NULL`)
  }
}

class Node {
  constructor(val, next) {
    this.val = val ? val : null
    this.next = next ? next : null
  }
}

const createLinkedList = (list) => {
  const newLinkedList = new LinkedList()
  list.forEach((value => newLinkedList.appendNode(new Node(value))))
  return newLinkedList
}

// const testLinkedList1 = createLinkedList([1, 3, 5, 6, 8, 9])
// testLinkedList1.printList()

const traverseLinkedList = (head) => {
  while (head.next) {
    console.log(head.val)
    head = head.next
  }
}

const mergeTwoLinkedList = (l1, l2) => {
  let { head: linkedList1 } = createLinkedList(l1)
  let { head: linkedList2 } = createLinkedList(l2)

  let mergedLinkedList = new LinkedList()
  const headOfNewLinkedList = mergedLinkedList

  while (!!linkedList1 && !!linkedList2) {
    if (linkedList1.val < linkedList2.val) {
      mergedLinkedList.next = linkedList1
      linkedList1 = linkedList1.next
    } else {
      mergedLinkedList.next = linkedList2
      linkedList2 = linkedList2.next
    }
    mergedLinkedList = mergedLinkedList.next
  }

  //If linkedList1 is empty
  linkedList1 === null
    ? mergedLinkedList.next = linkedList2
    : mergedLinkedList.next = linkedList1

  return headOfNewLinkedList
}

const detectCycle = (head) => {
  let slow = head
  let fast = head

  while (fast && fast.next && fast.next.next) {
    slow = slow.next
    fast = fast.next.next

    if (slow === fast) {
      slow = head
      while (slow !== fast) {
        slow = slow.next
        fast = fast.next
      }
      return slow
    }
  }
  return null
}

const testLinkedList1 = [1, 3, 11, 18]
const testLinkedList2 = [10, 12, 31, 4]
// console.log(createLinkedList(testLinkedList2).head)
// const merged = mergeTwoLinkedList(testLinkedList1, testLinkedList2)
// merged.printList()


/**
 * Reverse linked list
 */

const list = createLinkedList(testLinkedList1)
list.reverse()
// list.printList()

/**
 * Get Node by index
 */

// console.log(list.getNodeByIndex(2))

/**
 * List lengtha
 */
const countTest = new LinkedList()
console.log(countTest.length())

