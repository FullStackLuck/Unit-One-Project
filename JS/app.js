//Set Variablaes 
const $input =$("input")
const $button =$("button")
const $aside =$("aside")



//Create a function to get value from input( this goes somewhere not sure where)


//Make API Call 

$button.on("click", () => {



	const searchPlayer =$input.val()

	const data = {
		"url": `https://free-nba.p.rapidapi.com/players?&search=${searchPlayer}`,
		"method": "GET",
		"headers": {
			"X-RapidAPI-Host": "free-nba.p.rapidapi.com",
			"X-RapidAPI-Key": "2cc20d9a77msh1f6709770f552d4p19081ajsn96b3210eed57"
		}
	};
	
	$.ajax(data).done(function (response) {
		console.log(response);
//Player photo API blocked by cors
	// $.ajax(`https://api.sportradar.us/nba-images-t3/getty//schema/manifest-v2.5.xsd?api_key=g7zvf7ufe7mfx237ws6gxzdd

	// `).then((player) => {

	// console.log(player)

$($aside).html(`
<h4 First Name>First Name: ${response.data[0].first_name}</h4>
<h4 Last Name>Last Name: ${response.data[0].last_name}</h4>
<h4 Position>Position: ${response.data[0].position}</h4>
<h4 Feet>Ft: ${response.data[0].height_feet}</h4> 
<h4 Inches>In: ${response.data[0].height_inches}</h4>
<h4 Weight>Weight: ${response.data[0].weight_pounds}</h4>
<h4 Team>Team: ${response.data[0].team.city}</h4>
<h4 Team>: ${response.data[0].team.name}</h4>
<h4 Team>: ${response.data[0].team.abbreviation}</h4>


`)
$inputValue=""
})
	});
	$button.on("click", () => {

	const teamData = {
		"url": "https://free-nba.p.rapidapi.com/teams?page=0",
		"method": "GET",
		"headers": {
			"X-RapidAPI-Host": "free-nba.p.rapidapi.com",
			"X-RapidAPI-Key": "2cc20d9a77msh1f6709770f552d4p19081ajsn96b3210eed57"
		}
	};
	
	$.ajax(teamData).done(function (response) {
		console.log(response);
	});

})

//Code Grave Yard	
// After data is called
// .then((data) => {
// 	console.log(data)
    // let playerID =${data.id}

// console.log(data.data[0].first_name)
// console.log(data.data[0].last_name)
// console.log(data.meta.total_count)
    //Loop through the Array for the data

//     data.forEach((first_name)=>{
//         for (let first_name in data){
//         console.log(first_name)

//         }

//     $("aside").html(`
// <h1>${data.first_name}</h1>`)

   
// })
// .catch(err => {
// 	console.log(err);
// })

// After data is called
// .then((data) => {
// 	console.log(data)
    // let playerID =${data.id}

// console.log(data.data[0].first_name)
// console.log(data.data[0].last_name)
// console.log(data.meta.total_count)
    //Loop through the Array for the data

//     data.forEach((first_name)=>{
//         for (let first_name in data){
//         console.log(first_name)

//         }

//     $("aside").html(`
// <h1>${data.first_name}</h1>`)

   
// })
// .catch(err => {
// 	console.log(err);
// })
// })

