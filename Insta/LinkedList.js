class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    isEmpty(){
        return this.size === 0
    }

    getSize(){
        return this.size
    }

    prepend(value){
        let node = new Node(value);
        if(!this.isEmpty()){
            node.next = this.head;
        }
        this.head = node;
        console.log(this.head);
        this.size++
    }

    print(){
        if(this.isEmpty()){
            console.log("list is empty")
        }else{
            let curr = this.head;
            let arr = []
            console.log(" in else", curr);
            while(curr){
                arr.push(curr.value)
                console.log(curr.next,"check");
                curr = curr.next;
            }
            console.log(arr);
        }
    }

    insert(value, index){
        if(index < 0 || index > this.size){
            return
        }

        if(index == 0){
            this.prepend(value);
        }else{
            const node = new Node(value);
            let prevNode = this.head;
            for(let i = 0; i < index - 1; i++){
                prevNode = prevNode.next;
            }
            node.next = prevNode;
            prevNode.next = node;
            this.size++;
        }
    }

    remove(index){
        if(index < 0 || index > this.size){
            return null
        }

        let currentNode = this.head;
        let prevNode;
        for(let i = 0; i < index - 1; i++){
            currentNode = currentNode.next
        }
        prevNode = currentNode.next;
        console.log("remo", prevNode);
        currentNode.next = prevNode;
        this.size--
    }
}

const list = new LinkedList();
// list.prepend(8);
// // list.print();
// list.prepend(10);
// list.prepend(15);
// list.print();
list.insert(25, 0);
// list.print()
list.insert(20, 0);
// list.print()
list.insert(11, 1);
// list.print()
list.insert(40, 2);

console.log(list.getSize());

list.remove(1);

console.log(list.getSize());
list.print()

