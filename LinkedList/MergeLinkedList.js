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

    printNodes(){
        let current = this.head;
        while(current){
            console.log(current.value)
            current = current.next
        }
    }
}

const newItem = new LinkedList();
const secondList = new LinkedList();
newItem.prepend(10);
newItem.prepend(20);
newItem.prepend(30);
newItem.printNodes();
// console.log(newItem.head);
secondList.prepend(1);
secondList.prepend(4);
secondList.printNodes();
// secondList.prepend(6);
// console.log(secondList.head);