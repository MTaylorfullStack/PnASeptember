class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

var first_node = new Node("Duy");
var second_node = new Node("Brian");
var third_node = new Node("Alex");

first_node.next = second_node
second_node.next = third_node

// console.log(first_node);
// console.log(first_node.next);
// console.log(first_node.next.next);

class SLL{
    constructor(value){
        this.head = new Node(value);
    }
    // add to front
    addFront(value){
        var restOfList = this.head;
        this.head = new Node(value);
        this.head.next = restOfList;
        return this
    }
    // display
    display_list(){
        var monkey = this.head
        var count = 1;
        while(monkey){
            console.log(`Current Node: ${monkey}, Current Value: ${monkey.value}, Count: ${count}`)
            monkey = monkey.next;
            count +=1;
        }
        return this
    }
}

var first_sll = new SLL(2);
console.log(first_sll.addFront(4).addFront(6).addFront(8).addFront(10).display_list());
