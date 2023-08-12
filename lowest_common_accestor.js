// creting function to fin lowest common assestor in node also done and leetcode fully explained there with comments


//first creating function to take out left and right node

function GetNodePath(node, target){
    if( node == null ) return;
    if(node == target ) return [node.val];

    let leftPath = GetNodePath(node.left, target);

if(leftPath.length > 0){
    leftPath.push(node)
    return leftPath
}



    let rightPath = GetNodePath(node.right , target);
    if(rightPath.length > 0){
        rightPath.push(node)
        return rightPath
}
return [];
}

var lowestCommonAncestor = function(root, p, q) {

    let nodeToRootPathP =  GetNodePath(root,p.val)
 let nodeToRootPathQ =  GetNodePath(root,q.val)

let i = nodeToRootPathP.length-1;
let j = nodeToRootPathQ.length-1;

let ans = null;
while( i > 0 && j  >= 0 && nodeToRootPathP[i] == nodeToRootPathQ[j]){
ans = nodeToRootPathP[i];
i--;
j--;


}

return ans;
}