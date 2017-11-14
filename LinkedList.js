//linkedlist example

var LinkedList=function(e){

var that={}, first, last;

that.push=function(value){
var node=new Node(value);
if(first==null){
first=last=node;
}else{
last.next=node;
last=node;
}
};

that.pop=function(){
var value=first;
first=first.next;
return value;
};

that.remove=function(index){
var i =0
var current=first, previus;
if(index===0){
//handle special case-first node
first=current.next;
}else{
while(i++<index){
//set previus to first node
previus=current;
//set current to the next one
current=current.next
}
//skip to the next node
previus.next=current.next;
}
return current. value;
};

var Node=function(value){
this.value=value;
var next={};
};

return that;
};


var linkedlist=new LinkedList();
linkedlist.push(1);
linkedlist.push(2);
linkedlist.push(3);
linkedlist.push(4);

linkedlist.remove(0);

console.log(linkedlist.pop());
console.log(linkedlist.pop());
console.log(linkedlist.pop());