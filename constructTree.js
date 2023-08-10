//construct dfs tree

class treeNode{
    val
    left = null;
    right= null;
                                                                              
constructor(v){   // here tree will construct and get stored in newNode below

    this.val = v;
    this.left = null;
    this.right =  null;
}
}
let treeValues = [6,16,26,-1,-1,-1 , 36,44,-1,-1,56,-1,-1]

let i = 0;
function treeConstruct(treeValues){
if(treeValues[i] == -1){
    i++
    return null;    //base case
}




let newNode = new treeNode(treeValues[i])    // when base case will not run means when -1 will not there then new node will be created with new value and i++ will continue
i++       // calling contructor of treenode  
let leftChild_Node = treeConstruct(treeValues)   
let rightChild_Node = treeConstruct(treeValues)

newNode.left = leftChild_Node  
newNode.right =  rightChild_Node
return newNode;   
}

let root = treeConstruct(treeValues)  // this will return root of tree 
let preOrder = [];
let inOrder = [];
let postOrder = [];
function dfs(node){
    if(node == null )
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