

const fs = require("fs")


fs.readFile(process.argv[2],'utf8',(err,data)=>{
	if(err){
		console.err(err)
		return
	}
	const services = data.split("\n")
	const duplicatedServices = []
	services.forEach( (service) =>{
		// statements
		const entries = services.filter(s=>s == service)
		if (entries.length >= 2) {
			duplicatedServices.push(service)
		}
	});
	console.log(duplicatedServices)
})

