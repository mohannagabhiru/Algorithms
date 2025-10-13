class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree{
    constructor(){
        this.root = null
    }
    isEmpty(){
        return this.root === null
    }
    insert(value){
        const newNode = new Node(value)
        if(this.isEmpty()){
            this.root = newNode
        }else{
            this.insertNode(this.root, newNode)
        }
    }
    insertNode(rootNode, newNode){
        if(newNode.value < rootNode.value){
            if(!rootNode.left){
                rootNode.left = newNode
            }else{
                this.insertNode(rootNode.left, newNode)
            }
        }else{
            if(!rootNode.right){
                rootNode.right = newNode
            }else{
                this.insertNode(rootNode.right, newNode)
            }
        }
    }
    preorderTraversal(root){
        if(root){
            console.log(root.value);
            this.preorderTraversal(root.left);
            this.preorderTraversal(root.right);
        }
    }
    inorderTraversal(root){
        if(root){
            this.preorderTraversal(root.left)
            console.log(root.value);
            this.preorderTraversal(root.right)
        }
    }
    postorderTraversal(root){
        if(root){
            this.postorderTraversal(root.left)
            this.postorderTraversal(root.right)
            console.log(root.value)
        }
    }
    bft(root){
        if(!root) false
        let queue =[];
        queue.push(root)
        let result = [];
        while(queue.length){
            let currentNode = queue.shift();
            result.push(currentNode.value);
            console.log(currentNode.value, "cn")
            if(currentNode?.left){
                            queue.push(currentNode.left)
            }
            if(currentNode?.right){
                queue.push(currentNode.right)
            }
        }
        return result
    }
    validbft(root){
        console.log(root);
        if(!root) return true
        let currentPointer = []
        currentPointer.push(root)
       while(currentPointer.length){
        let currentNode = currentPointer.shift();
        let leftPointer = currentNode.left;
        let rightPointer = currentNode.right;
        let currentValue = currentNode.value;
            if(leftPointer > currentValue || rightPointer < currentValue){
                    return false
            }
             if(currentValue?.left){
                            queue.push(currentValue.left)
            }
            if(currentValue?.right){
                queue.push(currentValue.right)
            }
       }
       return true
    }
    test() {
        console.log(null > 1)
    }
}

const newTree = new BinarySearchTree();
newTree.insert(10);
newTree.insert(5);
newTree.insert(15);
newTree.insert(8);
newTree.insert(7);
// newTree.preorderTraversal(newTree.root);
// console.log("break")
// newTree.inorderTraversal(newTree.root);
// console.log("break")
// newTree.postorderTraversal(newTree.root);
console.log(newTree.validbft(newTree.root));
// console.log(newTree.test())
// console.log(newTree.isEmpty())