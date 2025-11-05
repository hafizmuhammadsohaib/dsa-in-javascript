class Node{
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}
class DoublyLinkedList{
    constructor(value){
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }
    Push(value){
         const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else
        {
            this.tail.next = newNode;
            newNode.prev = this.tail; 
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    Pop()
    {
        if (this.length === 0) {
            return undefined;
        }
        let temp = this.tail;
        if(this.length === 1)
        {
            this.head = null;
            this.tail = null;
        }
        else{
            this.tail = this.tail.prev;
            this.tail.next = null;
            temp.prev = null;
        }
        this.length--;
        return temp;
    }
    UnShift(value){
        const newNode = new Node(value);
         if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            newNode.next = this.head;
            this.head.prev = newNode
            this.head = newNode;  
        }
        this.length++;
        return this;

    }
    Shift(){
        if (this.length === 0) return undefined;
         let temp = this.head;
          if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        else{
            this.head = this.head.next;
            this.head.prev = null;
            temp.next = null;
        }
        this.length--;
        return temp;
    }
    Get(index){
        if (index<0 || index>= this.length) {
            return undefined;
        }
        let temp = this.head;
        if (index < this.length/2) {
             for (let i = 0; i < index; i++) {
            temp = temp.next;
        }  
    }
    else{
        temp = this.tail;
        for (let i = this.length-1; i > index; i--) {
            temp = temp.prev;
        }
    }
        return temp;
    }
    Set(index, value){
         let temp = this.Get(index);
        if (temp) {
            temp.value = value;
            return true;
        }
        return false;
    }
    Insert(index, value){
        if (index === 0) {
            return this.UnShift(value);
        }
        if (index === this.length) {
            return this.Push(value);
        }
        if (index < 0 || index > this.length) {
            return false;
        }
        const newNode = new Node(value);
        const before = this.Get(index-1);
        const after = before.next;
        before.next = newNode;
        newNode.prev = before;
        newNode.next = after;
        after.prev = newNode;
        this.length++;
        return true;
    }
    Remove(index){
         if (index < 0 || index >= this.length) {
            return undefined;
        }
        if (index === 0) {
            return this.Shift();
        }
        if (index === this.length -1) {
            return this.Pop();
        }
        const temp = this.Get(index);
        temp.prev.next = temp.next;
        temp.next.prev = temp.prev;
        temp.next=null;
        temp.prev=null;
        this.length--;
        return temp;
    }
      Print() {
        if (!this.head) {
            console.log("List is empty");
            return;
        }

        // Forward direction
        let forwardStr = "";
        let temp = this.head;
        while (temp) {
            forwardStr += temp.value;
            if (temp.next) forwardStr += " -> ";
            temp = temp.next;
        }

        // Backward direction
        let backwardStr = "";
        temp = this.head;
        while (temp) {
            backwardStr += temp.value;
            if (temp.next) backwardStr += " <- ";
            temp = temp.next;
        }

        console.log(forwardStr);
        console.log(backwardStr);
    }
}
let myDoublyLinkedlist = new DoublyLinkedList(0);
myDoublyLinkedlist.Push(1);
myDoublyLinkedlist.Push(2);
// myDoublyLinkedlist.Push(3);
// myDoublyLinkedlist.Get(2);
// myDoublyLinkedlist.Set(2,99);
// myDoublyLinkedlist.UnShift(1);
// myDoublyLinkedlist.Shift();
// myDoublyLinkedlist.Insert(2,100);
myDoublyLinkedlist.Remove(1);
myDoublyLinkedlist.Print();