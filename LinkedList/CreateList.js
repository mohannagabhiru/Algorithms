class Node{
    constructor(value){
        this.value = value;
        this.next = null 
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    isEmpty(){
        return this.size == 0
    }

    getSize(){
        return this.size
    }

    prepend(val){
        const newNode = new Node(val);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }

    print(){
        let currNode = this.head;
        while(currNode !== null){
            console.log(currNode.value);
            currNode = currNode.next
        }
    }
}

const newList = new LinkedList();
newList.prepend(4);
newList.prepend(5);
newList.prepend(6);
console.log(newList.getSize());
newList.print()