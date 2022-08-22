// stack :
// create a function that takes a string as a parameter and return true if the string has
// Balanced Brackets and false if it hasn't (using stack)
// ex :
// "ab(cd{ef}gh)" => true
// "ab(cd{ef)" => false

console.log("stack********************************");

let testArr = [];
let lastEle = testArr.length - 1;

function checking(input) {
  for (let x = 0; x < input.length; x++) {
    if (input[x] == "[" || input[x] == "{" || input[x] == "(") {
      testArr.push(input[x]);
    }
  }
  for (let x = 0; x < input.length; x++) {
    if (input[x] == "]" || input[x] == "}" || input[x] == ")") {
      testArr.pop();
    }
  }
  if (testArr.length == 0) {
    console.log("true");
  } else {
    console.log("false");
  }
}
checking("ab(cd{ef}gh)");
console.log(testArr);
checking("ab(cd{ef)");
console.log(testArr); 





/*queue:
write a function that takes an integer K and a queue of integers you have to reverse the order 
of the first K elements of the queue, leaving the other elements in the same relative order.
ex:
k=3
1 2 3 4 5 ====> 3 2 1 4 5 */
console.log("Queue *******************************");
////////////////////////////////////////////////////////////

function reverseQueueFirstKElements(k,Queue)
{
	if (Queue.length == 0 || k > Queue.length)
		return;
	if (k <= 0)
		return;

	let Stack = [];

	/* Push the first K elements
	into a Stack*/
	for (let i = 0; i < k; i++) {
		Stack.push(Queue.shift());
	}

	/* Enqueue the contents of stack
	at the back of the queue*/
	while (Stack.length > 0) {
		Queue.push(Stack.pop());
	}

	/* Remove the remaining elements and
	enqueue them at the end of the Queue*/
	for (let i = 0; i < Queue.length - k; i++) {
		Queue.push(Queue.shift());
	}
}

/* Utility Function to print the Queue */
function Print(Queue)
{
	while (Queue.length > 0) {
	document.write(Queue.shift()," ");
	}
}

// Driver code

let Queue = [];
Queue.push(10);
Queue.push(20);
Queue.push(30);
Queue.push(40);
Queue.push(50);
Queue.push(60);
Queue.push(70);
Queue.push(80);
Queue.push(90);
Queue.push(100);

let k = 5;
reverseQueueFirstKElements(k, Queue);
console.log("[10,20,30,40,50,60,70,80,90,100");
console.log("k=5");
console.log(Queue);

// This code is contributed by shinjanpatr







/*LinkedList:
create a function that takes a linkedlist of letters as a parameter and check if it is palindrome or not 
"A palindrome is a word or phrase that reads the same backward as forward"
ex:
m => o => o => m  ..... true 
m => o => o => n  ..... false
 */


console.log("LinkedList********************************");





class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	insert(value) {
		this.length++;
		let node = new Node(value);

		if (this.tail) {
			this.tail.next = node;
			this.tail = node;
			return node;
		}

		this.head = this.tail = node;
		return node;
	}

	insertHead(value) {
		this.length++;
		let node = new Node(value);

		if (this.head) {
			node.next = this.head;
			this.head = node;
			return node;
		}

		this.head = this.tail = node;
		return node;
	}
}

// function to add linked list words
function newLinkedListWord(word) {
	let listWord = new LinkedList();
	listWord.insertHead(word[0]);
	for (let x = 1; x < word.length; x++) {
		listWord.insert(word[x]);
	}
	return listWord;
}
// manually adding words
let wordOne = new LinkedList();
wordOne.insertHead("m");
wordOne.insert("o");
wordOne.insert("o");
wordOne.insert("n");
let wordTwo = new LinkedList();
wordTwo.insertHead("m");
wordTwo.insert("o");
wordTwo.insert("o");
wordTwo.insert("m");

function palindrome(llist) {
	let head = llist.head;
	let letterList = [];
	while (head) {
		letterList.push(head.value);
		head = head.next;
	}

	let left = 0;
	let right = letterList.length - 1;
	while (left <= right) {
		if (letterList[left] !== letterList[right]) {
			return false;
		}
		left++, right--;
	}

	return true;
}

console.log(palindrome(newLinkedListWord("Yasmen")));
console.log(palindrome(newLinkedListWord("MUM")));






/*recursion:
1- create a function that takes a number and return an array of Fibonacci numbers of this number 
Note: The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, . . . Each subsequent number is the sum of the previous two.
ex:
8
[0,1,1,2,3,5,8,13,21] */
///////////////////////////////////////////////////////////////////
console.log("recursion Fibonacci Sequence *****************************");

var fibonacci_series = function (n) 
{
  if (n===1) 
  {
    return [0, 1];
  } 
  else 
  {
    var s = fibonacci_series(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};

console.log(fibonacci_series(8));
 
/* *//////////////////////////////////////////////////////////////


console.log("factorialize");

function factorialize(num) {
  if (num < 0) 
        return -1;
  else if (num == 0) 
      return 1;
  else {
      return (num * factorialize(num - 1));
  }
}
console.log(factorialize(5));





// console.log("Implement a Queue using 2 stacks s1 and s2 ");

// var Stack1 = [];
// var Stack2 = [];

// // implement enqueue method by using only stacks
// // and the push and pop functions
// function Enqueue(element) {
//   Stack1.push(element);
// }

// // implement dequeue method by pushing all elements
// // from stack 1 into stack 2, which reverses the order
// // and then popping from stack 2
// function Dequeue() {
//   if (Stack2.length === 0) {
//     if (Stack1.length === 0) { return 'Cannot dequeue because queue is empty'; }
//     while (Stack1.length > 0) {
//       var p = Stack1.pop();
//       Stack2.push(p);
//     }
//   }
//   return Stack2.pop();
// }

// Enqueue('a');
// Enqueue('b');
// Enqueue('c');
// Dequeue(); 







