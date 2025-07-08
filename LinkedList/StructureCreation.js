class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.size = 0
    }

    isEmpty(){
        return this.size == 0
    }

    getSize(){
        return this.size
    }

    prepend(value){
        let newNode = new Node(value);
        if(this.isEmpty()){
            this.head = newNode
        }else{
            newNode.next = this.head
            this.head = newNode
        }
        this.size++
    }
}

const newItem = new LinkedList();
newItem.prepend(10);
newItem.prepend(20);
newItem.prepend(30);
console.log(newItem.getSize())