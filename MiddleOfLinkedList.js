//876. Middle of the Linked List
var middleOfList = function(head){// here tortoise and heir(rabbit) algorithm is used 
    // here we will take one slow and one fast elements and slow will run 1 step and fast will move 2 steps
        let slow = head;  // first both slow and fast will be at same level i.e at head (at first index)  
        let fast = head;
        while(  fast !== null && fast.next !== null){
            // slow and fast had to move until fast is not at last index(element) or fast is not at null
            slow = slow.next;  // it will move 1 step
            fast = fast.next.next; // it will move 2 steps
    
        }
                    return slow; // at last we had to return slow because slow will be always mid point where while loop will get break;
    
    }; 