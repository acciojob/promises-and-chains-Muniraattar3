//your JS code here. If required.
document.getElementById(btn).addEventListener('submit',function(event){
	event.preventDefault()
})

const ageInput = getElementById('age').value;
const nameInput = getElementById('name').value;

		if(!ageInput || ! nameInput){
			alert('Both fields are required!')
			return
		}

const age = parseInt(ageInput, 10)
const name = nameInput.trim();

const agePromise = new Promise ((resolve, reject) =>{
	setTimeOut(() => {
		if(age >18){
			resolve(`Welcome, ${name}. You can vote`)
		} else{
			reject(`Oh sorry ${name}. You aren't old enough)
		}
	}, 4000);
})

agePromise
.then(message)=>{
alert(message)
}
.catch(error)=>{
alert(error)
}