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

    append(value){
        let newNode = new Node(value);
        if(this.isEmpty()){
            this.head = newNode;
            this.size++;
        }else{
            let currentNode = this.head;
            while(currentNode.next){
                currentNode = currentNode.next
            }
            currentNode.next = newNode
            this.size++
        }
    }

    printNodes(){
        let allNodes = [];
        let current = this.head;
        while(current){
            current = current.next
            if(current){
                 allNodes.push(current.value);
            }
        }
        return allNodes
    }
}

const firstList = new LinkedList();
firstList.append(1);
firstList.append(2);
firstList.append(3);
firstList.append(4);
firstList.append(5);
console.log(firstList.head)

function reorderList(head){
    let slow = head;
    let fast = slow.next;
    while(fast && fast.next){
        slow = fast;
        fast = fast.next.next
    }
}