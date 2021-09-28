let Parent = {
	name: 'Ivan',
	country: 'Ukraine',
	getInfo() {
		return `Hello, my name ${this.name}. I am from ${this.country}`
	}
}

console.log(Parent.getInfo());

let Child = Object.create(Parent);
Child.name = 'Oleg';
console.log(Child.name);

console.log(Child.getInfo());