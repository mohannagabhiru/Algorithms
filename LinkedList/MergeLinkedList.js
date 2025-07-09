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
            // console.log(current.value)
            current = current.next
            if(current){
                 allNodes.push(current.value);
            }
        }
        return allNodes
    }
}

const newItem = new LinkedList();
const secondList = new LinkedList();
newItem.append(2);
newItem.append(6);
// newItem.append(30);
// newItem.printNodes();
// console.log(newItem.printNodes())
// console.log(newItem.head);
secondList.append(1);
secondList.append(4);
secondList.append(8);
// secondList.printNodes();
// console.log(secondList.printNodes())
// secondList.prepend(6);
// console.log(secondList.head);

function mergeTwoLists(list1, list2){
    let newListHead = new Node(0);
    // console.log(list1, )
    while(list1!= null && list2!= null){
        if(list1.value < list2.value){
            console.log("In if", list1);
            newListHead.next = list1;
            list1 = list1.next;
        }else{
            console.log("In  else", list2.value)
             newListHead.next = list2;
             list2 = list2.next;
        }
        newListHead = newListHead.next
    }
   if(list1 == null){
        newListHead.next = list2
   }else{
    newListHead.next = list1
   }
   return newListHead.next
}
// console.log(secondList, "test");
console.log("test", mergeTwoLists(newItem.head, secondList.head));