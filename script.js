document.getElementById('userForm').addEventListener('submit',function(event){
		event.preventDefault();

	const ageInput = getElementById('age');
	const nameInput = getElementById('name');

		if(!ageInput || !nameInput){
			alert('Both fields are required')
			return;
		}
	const age =parseInt(ageInput, 10);
	const name =nameInput,trim();

	const agePromise = new Promise((resolve,reject)=>{
		setTimeout(()=>{
			if(age>18){
				resolve(`Welcome, ${name}. You can vote.`);
					  }else{
				reject(`Oh sorry ${nmae}. You aren't old enough.`)
					  }
		},4000)
	});
	agePromise
		.then((message)=>{
			alert(message);
		})
	.catch((error)=>{
		alert(error);
	});
});
