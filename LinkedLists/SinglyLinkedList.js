class Node {
    constructor(value) {
        this.value=value;
        this.next = null;
    }
}
class Linkedlist {
    constructor(value) {
        const NewNode = new Node(value);
        this.head = NewNode;
        this.tail = this.head;
        this.length = 1;
    }
    Push(value){
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    Pop()
    {
        if (!this.head) {
            return undefined;
        }
        let temp = this.head;
        let prev = this.head;

        while (temp.next) 
        {
            prev= temp;
            temp = temp.next;
        }
        this.tail = prev;
        this.tail.next = null;
        this.length--;
        if(this.length === 0)
        {
            this.head = null;
            this.tail = null;
        }
        return temp;
    }
    UnShift(value){
        const newNode = new Node(value)
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
           newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    Shift()
    {
        if (!this.head) {
            return undefined;
        }
        let temp= this.head;
        this.head= this.head.next;
        temp.next = null;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return temp;
    }
    Get(index){
        if (index<0 || index >= this.length) {
            return undefined;
        }
        let temp = this.head;
        for (let i = 0; i < index; i++) {
            temp = temp.next;
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
    Insert(index, value)
    {
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
        let temp = this.Get(index-1);
        newNode.next=temp.next;
        temp.next = newNode;
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
       
        const before = this.Get(index-1);
        const temp = before.next;
        before.next = temp.next;
        temp.next = null;
        this.length--;
        return temp;
    }
    Reverse(){
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;
        let next = temp.next;
        let prev = null;
        for (let i = 0; i < this.length; i++) {
            next = temp.next;
            temp.next = prev;
            prev = temp;
            temp = next;
        }
    }
    PrintList() {
        let arr = [];
        let temp = this.head;
        while (temp) {
            arr.push(temp.value);
            temp = temp.next;
        }
        console.log(arr.join(" -> "));
    }
}

let myLinkedlist = new Linkedlist(1);
// myLinkedlist.Push(1);
myLinkedlist.Push(2);
myLinkedlist.Push(3);
// myLinkedlist.Pop();
// myLinkedlist.get(2);
// myLinkedlist.set(2,5);
// myLinkedlist.Insert(1,1);
// myLinkedlist.Remove(0);
myLinkedlist.Reverse();
myLinkedlist.PrintList();