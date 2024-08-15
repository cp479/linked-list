class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

class LinkedList {
    constructor() {
        this.headNode = null;
    }

    append(value) {
        const newNode = new Node(value);
        if (!this.headNode) {
            this.headNode = newNode;
        } else {
            let currentNode = this.headNode;
            while (currentNode.nextNode) {
                currentNode = currentNode.nextNode;
            }
            currentNode.nextNode = newNode;
        }
    }

    prepend(value) {
        const newNode = new Node(value, this.headNode);
        this.headNode = newNode;
    }

    size() {
        let count = 0;
        let currentNode = this.headNode;
        while (currentNode) {
            count++;
            currentNode = currentNode.nextNode;
        }
        return count;
    }

    head() {
        return this.headNode;
    }

    tail() {
        let currentNode = this.headNode;
        while (currentNode && currentNode.nextNode) {
            currentNode = currentNode.nextNode;
        }
        return currentNode;
    }

    at(index) {
        let count = 0;
        let currentNode = this.headNode;
        while (currentNode && count < index) {
            count++;
            currentNode = currentNode.nextNode;
        }
        return currentNode;
    }

    pop() {
        if (!this.headNode) return null;
        if (!this.headNode.nextNode) {
            this.headNode = null;
            return;
        }
        let currentNode = this.headNode;
        while (currentNode.nextNode.nextNode) {
            currentNode = currentNode.nextNode;
        }
        currentNode.nextNode = null;
    }

    contains(value) {
        let currentNode = this.headNode;
        while (currentNode) {
            if (currentNode.value === value) {
                return true;
            }
            currentNode = currentNode.nextNode;
        }
        return false;
    }

    find(value) {
        let index = 0;
        let currentNode = this.headNode;
        while (currentNode) {
            if (currentNode.value === value) {
                return index;
            }
            currentNode = currentNode.nextNode;
            index++;
        }
        return null;
    }

    toString() {
        let result = '';
        let currentNode = this.headNode;
        while (currentNode) {
            result += `( ${currentNode.value} ) -> `;
            currentNode = currentNode.nextNode;
        }
        result += 'null';
        return result;
    }
}
