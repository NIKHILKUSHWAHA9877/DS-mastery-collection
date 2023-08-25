//21. Merge Two Sorted Lists
  
// so here first thing to keep in mind is that link list always should be in ascending order small to big other wise like i made stack diaghram then answer was coming wrong..



 // here if value of list1 is smaller than value of list2 then smaller value will be removed so thats why we had written list1.next so that if value is small then next value of smaller value will come below 
//like when we compare list1 1st element from list2 first element 1<1 here both are equal so its our wish which one we want to remove , so lets remove 1 from list1 and the final list after removing element from list1 will be like this 2,4,1,3,4 and will get stored below here (list1.next, list2)   so basically list1.next means if value is small then start from next element after smaller one
// lets take another example like previously 1<1 both were equal so we removed 1 from list1.
// now if we will compare list1 second element with list2 1st element because list1 1st element was already removed  ,so 2<1 here list1 element is not smaller than list2 element now (else statement will execute) and list2.next will run and smaller element of list2 will be removed and final output that will be stored in (list1, list2.next)   will be like 2,4,3,4.
var ShortedMergeList = function (list1 , list2){
if(list1 == null){
    return list2;
}
if(list2== null ){
    return list1;
}
if(list1.val < list2.val){
    list1.next = ShortedMergeList(list1.next , list2)
    return list1;
}else{
    list2.next = ShortedMergeList(list1,list2.next)
    return list2;
}

}