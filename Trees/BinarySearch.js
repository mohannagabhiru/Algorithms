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
}

const newTree = new BinarySearchTree();
newTree.insert(3);
console.log(newTree.isEmpty())