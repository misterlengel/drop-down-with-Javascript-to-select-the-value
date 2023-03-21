
// Pre-populate the text field on the HTML page
var dog = "Dog breed"
document.getElementById('dogType').setAttribute('value', dog);


function dogPicker(){
	var dogTest = "none";
// Assign values to the variables by capturing the HTML value
  	var energy = document.getElementById('energy').value;
  	var trait = document.getElementById('trait').value;
  	var size = document.getElementById('size').value;
    
// Display the selections in the CONSOLE
    console.log(energy, trait, size);

// Compute the dog type based on the selections
    if (energy == "run"){
    	dogTest = "Greyhound";
    }


// Display the dog type in the text field on the page.
	document.getElementById('dogType').setAttribute('value', dogTest);
}


