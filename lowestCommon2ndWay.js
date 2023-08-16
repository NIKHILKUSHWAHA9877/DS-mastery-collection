//235. Lowest Common Ancestor of a Binary Search Tree
// 279
// Companies
// Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.

// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”
var lowestCommonAncestor = function(node, p, q){
if(node == null)return null;
if(p.val < node.val && q.val < node.val){  
    //if smaller node.left because in binary search tree small values are at left side  and same opposite in right side
    return lowestCommonAncestor(node.left , p,q)
}else if(p.val > node.val && q.val > node.val){
    return lowestCommonAncestor(node.right , p,q)
}
return node;
}

