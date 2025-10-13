class node{
    constructor(val){
         this.val = val;
         this.left = null;
         this.right = null;
    }
}

class tree{
    constructor(){
        this.root = null;
    }

    checkPlace(root, val){
        if(val < root.val ){
            if(root.val == null){
                 root.left = val
            }else{
                 this.checkPlace(root.left, val)
            }
        }else{
            if(root.right == null){
                 root.right = val
            }else{
                 this.checkPlace(root.right, val)
            }
        }
    }

    isSizeZero(){
        return this.size == 0
    }

    getSize(){
        return this.size
    }
    insert(val){
        if(this.root){
            this.checkPlace(this.root, val)
        }
    }
}

const newTree = new tree();
newTree.root = new node(7);
newTree.insert(5)

console.log(newTree.size)
