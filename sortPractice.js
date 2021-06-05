class Node {
    constructor(value) {
        this.root = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor(value) {
        this.root = new Node(value);
        this.count = 1;
    }

    size() {
        return this.count;
    }

    min() {
        let currentNode = this.root;

        while(currentNode.left) {
            currentNode = currentNode.left;
        }

        return currentNode.value;
    }

    max() {
        let currentNode = this.root;

        while(currentNode.right) {
            currentNode = currentNode.right;
        }
    }

    insert(value) {
        this.count++;

        let newNode = new Node(value);
    }

    contains() {}

    dfsInOrder() {
        let result = [];

        const traverse = node => {
            if (node.left) {
                traverse(node.left);
            }

            result.push(node.value);

            if (node.right) {
                traverse(node.right)
            }
        }

        traverse(this.root);

        return result;
    }

    dfsPreOrder() {}

    dfsPostOrder() {}

    bfs() {
        let result = [];
        let queue = [];

        queue.push(this.root);

        while (queue.length) {
            let currentNode = queue.shift();

            result.push(currentNode.value);

            if(currentNode.left) {
                queue.push(currentNode.left)
            }
            if (currentNode.right) {
                queue.push(currentNode.right)
            }
        }

        return result;
    }
}