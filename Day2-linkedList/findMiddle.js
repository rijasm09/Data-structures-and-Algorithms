class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }
    getLen() {
        let current = this.head;
        let length = 1;
        while (current) {
            length++
            current = current.next;
        }
        return length;
    }
    printMiddle() {
        let length = this.getLen();
        let current = this.head;
        let count = 1;
        while (count < parseInt(length / 2)) {
            current = current.next;
            count++;
        }
        console.log("middle element is",current);
    }
}

const myList = new LinkedList;
myList.append(1)
myList.append(2)
myList.append(3)
myList.append(4)
myList.printMiddle()
