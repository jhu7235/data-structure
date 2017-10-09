'use strict';

function BinarySearchTree(val){
    this.value = val;
    this.currSize = 1;
}


BinarySearchTree.prototype.insert = function(val){
    this.currSize++;

    let direction = val < this.value ? "left" : "right";

    if(!this[direction]){this[direction] = new BinarySearchTree(val);} 
    else{this[direction].insert(val);}

};

BinarySearchTree.prototype.contains = function(val){

    let inBST = false;
    let direction = val < this.value ? "left" : "right";

    if(this.value === val){inBST = true;} 
    else if (this[direction]){inBST = this[direction].contains(val);}
    
    return inBST;
};

BinarySearchTree.prototype.depthFirstForEach = function(iterator, order){

    if (order === 'pre-order'){iterator(this.value);} 
    if(this.left){this.left.depthFirstForEach(iterator, order);}
    if(!order || order === "in-order"){iterator(this.value);}
    if(this.right){this.right.depthFirstForEach(iterator, order);}
    if (order === "post-order"){iterator(this.value);}

};

BinarySearchTree.prototype.breadthFirstForEach = function(iterator){

    let queue = [this];
    let tree;

    while (queue.length){

        tree = queue.shift();
        iterator(tree.value);

        if(tree.left){ queue.push(tree.left);}
        if(tree.right){queue.push(tree.right);}
    }

};

BinarySearchTree.prototype.size = function(){
    return this.currSize;
};