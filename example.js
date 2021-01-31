class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        // linked list has a head to indicate the beginning of the list.
        // the head always contains the 1st node
        this.head = null;
    }

    // there are three different implementations of the insert operation in a list.
    // insertFirst: beginning of the list
    // insertLast: end of the list
    // insert: anywhere in the list
    // insertAt: between 2 nodes
    insertFirst(item) {
        // inserts at the beginning of the list can be achieved by:
        // creating a new node item
        // point the head to the new node
        this.head = new _Node(item, this.head)
    }

    insertLast(item) {
        // create a new node item
        // checks to see if the list is empty 
        // if it is insert the new item as the only item in the list
        if (this.head === null) {
            this.insertFirst(item);
        }
        // start at the beginning of the list and move through the list until you reach the end of the list
        // set the end node's next pointer to the new node
        // the new node's next pointer is null
        else {
            let tempNode = this.head;
            while (tempNode.next !== null) {
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, null);
        }
    }

    find(item) { 
        // Start at the head
        let currNode = this.head;
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // Check for the item 
        while (currNode.value !== item) {
            /* Return null if it's the end of the list 
               and the item is not on the list */
            if (currNode.next === null) {
                return null;
            }
            else {
                // Otherwise, keep looking 
                currNode = currNode.next;
            }
        }
        // Found it
        return currNode;
    }

    // when deleting an item you can cosider
    // delete from the beginning of the list
    // delete from the end of the list
    // delete a node between 2 other nodes

    remove(item){ 
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // If the node to be removed is head, make the next node head
        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }
        // Start at the head
        let currNode = this.head;
        // Keep track of previous
        let previousNode = this.head;

        while ((currNode !== null) && (currNode.value !== item)) {
            // Save the previous node 
            previousNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log('Item not found');
            return;
        }
        previousNode.next = currNode.next;
    }
    
}