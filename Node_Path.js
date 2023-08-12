//in this question we had to print path of target node 

//first we had ti create tree then we will write node path function

class treeNode{
val;
left= null;
right = null;


constructor(v){
this.val = v;
this.left =  null;
this.right = null;
}

}
let treeValues = [6,16,26,-1,-1,-1 , 36,44,-1,-1,56,-1,-1]
let i = 0;
function constructTree(treeValues){
if(treeValues[i] == -1){
    i++
    return null;
}



let newNode = new treeNode(treeValues[i])
    i++
    let leftChild = constructTree(treeValues)
let rightChild = constructTree(treeValues)

newNode.left = leftChild;
newNode.right = rightChild; 
return  newNode;
}

let root = constructTree(treeValues)  // this will return root of tree 
let preOrder = [];
let inOrder = [];
let postOrder = [];

function dfs(node){
        if(node == null)
         return; 
        preOrder.push(node.val)
    dfs(node.left)
    inOrder.push(node.val)
    dfs(node.right)
    postOrder.push(node.val)
    
    
}
    dfs(root)
    console.log(preOrder)
    console.log(inOrder )
    console.log(postOrder)



    function Give_node_path(node , target){
if(node == null) return;
if(node.val == target){
    return (node.val);
}
let leftPath = Give_node_path(node.left , target)
if(leftPath != 0){
    leftPath.push(node.val);
    return leftPath;

}


let rightPath = Give_node_path(node.right , target)
if( rightPath !=0){
    rightPath.push(node.val);
    return rightPath;
}
return [];
    }