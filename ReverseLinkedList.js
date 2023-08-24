// 206. Reverse Linked List


var reverseList = function(head){
if(head == null) return null;  // base cases
if(head.next == null) return head;


let previous = null;  // firestly previous will be at -0 position means 1 before head
let current = head; // current will be at 1st index 
let next = current.next; // next will be at one ather current means on 2nd index
while( current != null){   //until current will not reach to null position
current.next = previous; // here current.next = previous is done because the arrow that is pointing at next after current will start pointing at backwrd at previous on -0 index 
previous = current;  // previous will come on current at 1st index both will be on each other 
 
next = current.next;  

if(next != null) next = next.next

}
return previous;
}