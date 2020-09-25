class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST{
    constructor(){
        this.root = null;
    }
    //     BST: Add
    // Create an add(val) method on the BST object to add new value to the tree. This entails creating a BTNode with this value and connecting it at the appropriate place in the tree. Unless specified otherwise, BSTs can contain duplicate values.
    add(val){
        // creating new node
        var new_node = new Node(val);
        if(this.root == null){
            this.root = new_node;
            return this
        }
        // set up a runner
        var runner = this.root
        while(runner){
            if(val > runner.value){
                if(runner.right){
                    runner = runner.right;
                } else {
                    runner.right = new_node;
                    return this
                }
            } else {
                if(runner.left){
                    runner = runner.left
                } else {
                    runner.left = new_node;
                    return this
                }
            }
        }
    }
    // BST: Contains
    // Create a contains(val) method on BST that returns whether the tree contains a given value. Take advantage of the BST structure to make this a much more rapid operation than SList.contains() would be.
    contains(val){
        if(this.root.value == val){
            return true
        }
        var monkey = this.root;
        while(monkey){
            if(val>monkey.value){
                if(monkey.right && monkey.right.value==val){
                    return true
                } else {
                    monkey = monkey.right;
                }
            } else {
                if(monkey.left && monkey.left.value==val){
                    return true
                } else {
                    monkey = monkey.left;
                }
            }
        }
        return false
    }
    // min
    min(){
        var monkey=this.root;
        while(monkey.left){
            monkey = monkey.left;
        }
        return monkey.value
    }
    max(){
        var monkey=this.root;
        while(monkey.right){
            monkey=monkey.right
        }
        return monkey.value
    }
    // BST: Size
    // Write a size() method that returns the number of nodes (values) contained in the tree.
    size(count=0, node=this.root){
        if(node){
            console.log("Current Node:", node.value)
            count++;
            console.log("Current count:", count)
            if(node.left){
                count++
                console.log("Node to the left:", node.left.value)
                this.size(count, node.left);
            }
            if(node.right){
                count++
                console.log("Node to the right:", node.right.value)
                this.size(count, node.right);
            }
        }
        // console.log("Count one", count_one, "Count two", count_two, "sum", );
        return count
    }
}


first_bst = new BST();
console.log(first_bst.add(10).add(11).add(9).add(10).add(3).add(22).add(5).add(99));
console.log(first_bst.size());









// class Location{
//     constructor(name){
//         this.name = name;
//         this.west = null;
//         this.south = null;
//         this.north = null;
//         this.east = null;
//     }
// }

// var library = new Location("library")

// library.south = new Location("spooky woods")

// library.south.east = new Location("manor")



