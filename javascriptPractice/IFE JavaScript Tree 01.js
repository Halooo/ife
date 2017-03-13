/**
 * Created by hsun on 2017-03-13.
 */
class BTNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BT {
    *search(node) {
        if (node === undefined) {
            node = this.root;
        } else if (node === null) {
            return;
        }
        yield *search(node.left);
        yield node.value;
        yield *search(node.right);
    }
    push(value) {
        const newNode = new BTNode(value);
        if (!this.root) {
            this.root.value = newNode;
        }
        let curr = this.root;
        while (curr) {
            if (!curr.left) {
                curr.left = newNode;
                break;
            } else if (curr.left) {
                curr = curr.left;
            } else if (!curr.right) {
                curr.right = newNode;
                break;
            } else {
                curr = curr.right;
            }
        }
    }
    [Symbol.iterator]() {
        return this.search();
    }
}

let sampleTree = new BT();
for (let i = 0; i < 20; i++) {
    BT.push(i)
}
let arr = [];
for (let item of sampleTree) {
    arr.push(item)
}
console.log(arr);