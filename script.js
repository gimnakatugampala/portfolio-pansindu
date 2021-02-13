console.log('Its working')

let theme = localStorage.getItem('theme')

if(theme == null){
	setTheme('light')
}else{
	setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')


for (var i=0; themeDots.length > i; i++){
	themeDots[i].addEventListener('click', function(){
		let mode = this.dataset.mode
		console.log('Option clicked:', mode)
		setTheme(mode)
	})
}

function setTheme(mode){
	if(mode == 'light'){
		document.getElementById('theme-style').href = 'default.css'
	}

	if(mode == 'blue'){
		document.getElementById('theme-style').href = 'blue.css'
	}

	if(mode == 'green'){
		document.getElementById('theme-style').href = 'green.css'
	}

	if(mode == 'purple'){
		document.getElementById('theme-style').href = 'purple.css'
	}

	localStorage.setItem('theme', mode)
}

//get the ontact info to the db
const submitFrom = document.getElementById('contact-form').addEventListener('submit',function(e){
    e.preventDefault();
    const name = document.getElementById('name');
    const subject = document.getElementById('subject');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    
    db.collection('contact').add({
        name:name.value,
        subject:subject.value,
        email:email.value,
        message:message.value
    })
    name.value = '';
    subject.value = '';
    email.value = '';
    message.value = '';

})