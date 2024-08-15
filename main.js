const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString()); // Output: ( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null

console.log(list.size()); // Output: 6
console.log(list.head().value); // Output: dog
console.log(list.tail().value); // Output: turtle
console.log(list.at(2).value); // Output: parrot
console.log(list.contains("cat")); // Output: true
console.log(list.contains("elephant")); // Output: false
console.log(list.find("snake")); // Output: 4
console.log(list.find("elephant")); // Output: null

list.pop();
console.log(list.toString()); // Output: ( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> null
