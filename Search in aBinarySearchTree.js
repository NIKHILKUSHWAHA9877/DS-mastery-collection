var searchBST = function(root, target) {
if(root == null) return null;
if(root.val == target )return val;

if(target < root.val){
    return searchBST(root.left , target)
}
else{
    return searchBST(root.right , target)
}

}