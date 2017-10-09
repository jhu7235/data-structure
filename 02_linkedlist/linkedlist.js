function LinkedList() {
	this.head = null
	this.tail = null
}



LinkedList.prototype.addToTail = function (val) {
	if(this.head === null) {
		this.tail = new Node(val);
		this.head = this.tail;
	} else {
		var temp = this.tail;
		this.tail = new Node(val);
		this.tail.previous = temp;
		temp.next = this.tail;
	}
}

LinkedList.prototype.removeHead = function () {
	if(this.head === this.tail && this.head !== null) {
		var temp = this.head
		this.head = null
		this.tail = null
		return temp.value;
	} else if (this.head !== null) {
		var temp =this.head
		this.head = this.head.next;
		this.head.previous = null;
		return temp.value;
	} else {
		return undefined;
	}

}

LinkedList.prototype.removeTail = function () {
	if(this.head === null) {
		return undefined
	} else if(this.head === this.tail) {
		var temp = this.head
		this.head = null
		this.tail = null
		return temp.value;
	} else {
		var temp = this.tail;
		this.tail = this.tail.previous;
		this.tail.next = null;
		return temp.value;
	}
}

LinkedList.prototype.addToHead = function (val) {
	if(this.head === null) {
		this.tail = new Node(val);
		this.head = this.tail;
	} else {
		var temp = this.head;
		this.head = new Node(val);
		this.head.next = temp;
		temp.previous = this.head;
	}
}

LinkedList.prototype.search = function (str) {

	var compareString = function (crawlValue) {
		if(typeof str === 'function') {
			return str(crawlValue)
		}
		return str === crawlValue;
	}
	var crawl = this.head
	while(crawl !== null) {
		if(compareString(crawl.value)) {
			return crawl.value
		} else {
			crawl = crawl.next;
		}
	}
	return null
}

function Node (val) {
	this.value = val
	this.next = null
	this.previous = null
}