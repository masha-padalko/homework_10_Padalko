Array.protoype.renderArray = function(folder) {
	console.log(this);

	let trs = this
		.map(function(product){
			return `<tr>
				<td>${product.type}</td>`
		})

	let table = `<table>
		<thead>
			<tr>
				<th></th>
				<th></th>
				<th></th>
			</tr>`

	return table;
}

document.write(kitchenProducts.renderArray('kitchen'));