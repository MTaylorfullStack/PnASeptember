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
    // remove front
    removeFront(){
        this.head = this.head.next;
        return this
    }
    // front
    front(){
        if(this.head !== null){
            return this.head.value
        } else {
            return "This is an empty list"
        }
    }
    // contains; given a value, return true if the value is in your list. else, return false
    contains(val){
        var monkey = this.head
        while(monkey){
            if(monkey.value == val){
                return true
            }
            monkey=monkey.next
        }
        return false
    }
    // length; return # of nodes in list
    length(){
        var monkey = this.head
        var count = 1;
        while(monkey){
            monkey = monkey.next;
            count +=1;
        }
        return count
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
        return count
    }
    max(){
        var max = this.head.value
        var monkey = this.head.next
        while(monkey){
            if(max<monkey.value){
                max = monkey.value
            }
            monkey=monkey.next
        }
        return max
    }
    min(){
        var min = this.head.value
        var monkey = this.head.next
        while(monkey){
            if(min>monkey.value){
                min = monkey.value
            }
            monkey=monkey.next
        }
        return min
    }
    average(){
        var sum = 0;
        var monkey=this.head;
        while(monkey){
            sum += monkey.value
            monkey=monkey.next
        }
        return sum/this.length()
    }
    // return a dictionary containing max, min, avg and length
    ultimateAnalysis(){
        return {
            'max': this.max(),
            'min': this.min(),
            'average': this.average(),
            'length': this.length()
        }
    }
    // back
    back(){
        var monkey = this.head
        while(monkey.next){
            monkey=monkey.next
        }
        return monkey.value
    }
    // remove back
    removeBack(){
        var monkey=this.head;
        while(monkey.next.next){
            monkey=monkey.next;
        }
        monkey.next = null;
        return this
    }
    // add back
    addBack(value){
        var monkey=this.head
        while(monkey.next){
            monkey=monkey.next
        }
        monkey.next = new Node(value);
        return this
    }
}

var first_sll = new SLL(2);
console.log(first_sll.addFront(4).addFront(5).addFront(6).addFront(8).addFront(10));
// console.log(first_sll.removeFront().display_list())

console.log(first_sll.addBack(99).back())
