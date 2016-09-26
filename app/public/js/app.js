
var currentURL = 'http://localhost:7015'; 
$("#submit").on("click", function(){
    	// Form validation
    	function validateForm() {
		  var isValid = true;
		  $('.form-control').each(function() {
		    if ( $(this).val() === '' )
		        isValid = false;
		  });

		  $('.chosen-select').each(function() {

		  	if( $(this).val() === "")
		  		isValid = false
		  })
		  return isValid;
		}
		// If all required fields are filled
		if (validateForm() == true){
			// Create an object for the user's data
	    	var userData = {
	    		name: $("#name").val(),
	    		photo: $("#photo").val(),
	    		scores: [$("#q1").val(), $("#q2").val(), $("#q3").val(), $("#q4").val(), $("#q5").val(), $("#q6").val(), $("#q7").val(), $("#q8").val(), $("#q9").val(), $("#q10").val(), ]
	    	}

	    	// THIS WORKS SO JUST WORK ON LOGIC AND HOW TO SEPARATE ALL OF THESE INTO THE JS FILES
	    	$.post(currentURL + "/api/friends", userData, function(data){
             $('#results').append(JSON.stringify(data));
          if(data){
            console.log(data);
            $('#myModal').modal('show');
          }

	    
	    	});

		}else{
			alert("Please answer all questions");
		}
    	
    	return false;
    });
	

  // THIS ONE SHOWS ALL POSSIBLE FRIENDS, I THINK THIS SHOULD BE IN A DIFFERENT JS FILE
$("#show").on("click", function(){
        $.get(currentURL + "/api/show", function(data){
            console.log(data);
        });
});

