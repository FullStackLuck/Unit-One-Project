//Set Variablaes 
const $input =$("input")
const $button =$("button")
const $aside =$("aside")

// //Make API Call 

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
//Assign to elements in the html

$($aside).html(`
<h3 First Name>First Name: ${response.data[0].first_name}</h3>
<h3 Last Name>Last Name: ${response.data[0].last_name}</h3>
<h3 Position>Position: ${response.data[0].position}</h3>
<h3 Feet>Ft: ${response.data[0].height_feet}</h3> 
<h3 Inches>In: ${response.data[0].height_inches}</h3>
<h3 Weight>Weight: ${response.data[0].weight_pounds}</h3>
<h3 Team>Team: ${response.data[0].team.city}</h3>
<h3 Team>: ${response.data[0].team.name}</h3>
<h3 Team>: ${response.data[0].team.abbreviation}</h3>


`)
$input.val()=""
})
	});
	




