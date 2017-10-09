/*function Queue() {
	this.head = null;
	this.tail = null;
	this.top = 0;
}

Queue.prototype.size = function () {
	return this.top
}

Queue.prototype.enqueue = function (val) {
	if(this.top === 0) {
		this.head = new Node(val);
		this.tail = this.head;
		this.top ++;
	} else {
		var temp = this.head;
		this.head = new Node(val);
		this.head.next = temp;
		temp.prev = this.head;
		this.top ++;
	}
}

function Node (val) {
	this.val = val
	this.prev = null
	this.next = null;
}

Queue.prototype.dequeue = function () {
	var output = this.tail.val;
	this.tail = this.tail.prev;
	this.tail.next = null;
	if()
	this.top --;
	return output;
}*/

function Queue() {
	this.val = [];
	this.top = 0
}

Queue.prototype.size = function () {
	return this.top;
}

Queue.prototype.enqueue = function (val) {
	this.val = this.val.concat([val]);
	this.top++;
}

Queue.prototype.dequeue = function () {
	if(this.top === 0) {
		return undefined;
	}
	this.top--;
	return this.val.shift();
}