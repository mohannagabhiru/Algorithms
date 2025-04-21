class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }
    
    isEmpty(){
        return this.root === null
    }
    
    insert(value){
        let node =  new Node(value);
        if(!this.isEmpty()){
              this.insertNode(this.root, node)
        }else{
             this.root = node
        }
    }
    insertNode(rootNode, newNode ){
        if(newNode.value < rootNode.value){
                if(rootNode.left === null){
                    rootNode.left = newNode
                    console.log(rootNode.left, "left")
                }else{
                    this.insertNode(rootNode, newNode)
                }
        }else{
                 if(rootNode.right === null){
                    rootNode.right = newNode
                    console.log(rootNode.right, "right")
                }else{
                    this.insertNode(rootNode.right, newNode)
                }
        }
    }
    
    search(root, value){
        if(root.value === null){
            return false
        }else{
            if(root.value === value){
                 console.log(value, "in equal")
                return true
            }else if(value < root.value){
                if(value === root.left.value){
                    return true
                }else{
                    this.search(root.left, value)
                }
            }else{
                if(value === root.right.value){
                    console.log(value, "in right")
                    return true
                }else{
                    this.search(root.right, value)
                }
        }
        return false
    }
}}

const bst = new BinarySearchTree();
console.log(bst.isEmpty());
bst.insert(2);
bst.insert(5);
bst.insert(3);
bst.insert(7);
console.log(bst.search(9));