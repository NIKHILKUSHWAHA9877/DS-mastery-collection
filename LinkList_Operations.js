class ListNode{
val = Number;
next = LinkedList;

constructor (v){
this.val = v;
this.next =  null;

}
}

class LinkedList{
size = Number;
head = ListNode;
tail = ListNode;

constructor(){
this.size = 0;
this.head = null;
this.tail = null;
}



display = function (){
let s = "";
let temp = this.head;

while(temp != null){
    s += temp.val+"-> ";
    temp = temp.next;

}

console.log(s+"null");

}



AddLast = function (val){
let newNode = new ListNode(val)
if(this.size == 0){
    this.head = newNode;
    this.tail = newNode;
}
else{
    this.tail.next = newNode;
    this.tail = newNode;
}
this.size++
}

AddFirst = function (val){
    let newNode = new ListNode(val) 
    if(this.size == 0){
        this.head = newNode;
        this.tail = newNode;
    }
    else{

        newNode.next =  this.head;
        this.head = newNode;
    }
    this.size++
}

removeFirst = function (){
if(this.size == 0){
    console.log("list is empty")
    return -1;
}else if(this.size == 1){
    let ret = this.head.val;
    this.head = null;
    this.tail = null;
    this.size--;
    return   ret
}else{
    let ret = this.head.val
this.head = this.head.next;
this.size--;
 return ret;
}
}

removeLast = function (){
    if(this.size == 0){
        console.log("list is empty")
        return -1;
    }else if(this.size == 1){
        let ret = this.tail.val;
        this.head = null;
        this.tail = null;
        this.size--;
        return ret
    }else{
        let ret = this.tail.val;
        let temp = this.head;
while(temp.next != this.tail){
    temp = temp.next; //this will move temp to second node 
}
    temp.next = null; 
    this.tail = temp;
    this.size--; 
    return ret

    }
}
getAt = function( target){
    if(target<0 || target >= this.size){
        return null;
    }

    let temp = this.head;
    let i = 0;

    while(i<target){
        temp = temp.next;
        i++;
    }

    return temp;
}

add_At_idx = function(val , targetIdx){
if(targetIdx == 0){
    this.AddFirst(val);
    return;
}else if(targetIdx = this.size){
    this.AddLast(val)
    return;
}else if(targetIdx < 0 && targetIdx > this.size){
    console.log("Invalid")
    return;
}else{
let previous = this.getAt(targetIdx - 1)
let current = this.getAt(targetIdx);

let newNode = new ListNode(val)
previous.next = newNode;
newNode.next = current;
this.size++;

}

}


removeAt_idx = function( targetIdx){
    if(targetIdx == 0){
        this.AddFirst(val);
        return;
    }else if(targetIdx = this.size){
        this.AddLast(val)
        return;
    }else if(targetIdx < 0 && targetIdx > this.size){
        console.log("Invalid")
        return;
    
}else{

let previous = this.getAt(targetIdx - 1)
let current = previous.next // here previous.next because 
let ret = current.val;
previous.next = current.next;  // here we write previous.next = current.next;  because previous next was earlier next after previous but now it will leave one node and next of previous will become current.next 
this.size--;
return ret

}
}
}

let ll = new LinkedList();
ll.AddLast(10);
ll.AddLast(200);
ll.AddLast(30);
ll.AddLast(40);
ll.AddLast(50);
ll.add_At_idx(40, 3);
// console.log(ll.removeFirst()); // 20
// console.log(ll.removeLast()); // 10
console.log(ll.getAt(0).val);

ll.display();//5->