// in this finction we had to count numbers of nodes present in tree 

//creating tree first 

class TreeNode{
    val;
    left =  null;
    right =  null;


constructor(valueOf_root_node){
    this.val = valueOf_root_node;
    this.left = null;
    this.right = null;
}
}
let treeValues = [6,16,26,-1,-1,-1 , 36,44,-1,-1,56,-1,-1]
let i = 0;
function constructTree(treeValues){  //base case
if(treeValues[i] == -1){
    i++
    return null;
}

let newNode = new TreeNode(treeValues[i])
    i++
let leftChild = constructTree(treeValues);
let rightChild = constructTree(treeValues);

newNode.left = leftChild;
newNode.right = rightChild;
return newNode; 
}

let root = constructTree(treeValues);
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

 
// now writing function to count numbers of nodes
function countNodes(node){
    if(node == null ){
        return 0;
    }   // base case
let leftCount = countNodes(node.left);
let rightCount = countNodes(node.right);
return leftCount + rightCount + 1
}

console.log("Total count of nodes are :" , countNodes(root))

