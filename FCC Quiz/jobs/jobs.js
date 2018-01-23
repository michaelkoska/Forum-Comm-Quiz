const url = "https://api.stagingjobshq.com/madgexWidgetJobs.php?callback=displayJobs&city=Moorhead&state=Minnesota";


function getWidget(){
	var jobs = [];
	$.ajax({
	    url: "https://api.stagingjobshq.com/madgexWidgetJobs.php?callback=displayJobs&city=Moorhead&state=Minnesota",
	    jsonp: "callback",
	    dataType: "jsonp",
	    data: {
	        format: "json"
	    },
	    success: function(response){
	    	var jobFrag = document.createDocumentFragment();
	        var fiveJobs = response.Job.slice(0,5);
	        fiveJobs.forEach(function(job){
	        	var jobTitle = document.createElement("h4");
	        	jobTitle.innerHTML = `${job.Title}`;
	        	var jobDescription = document.createElement("p");
	        	jobDescription.innerHTML = `${job.ShortDescription}`;
	        	var jobRecruiterName = document.createElement("li");
	        	jobRecruiterName.innerHTML = `${job.RecruiterName}`;
	        	var jobLocationDescription = document.createElement("li");
	        	jobLocationDescription.innerHTML = `${ job.LocationDescription }`;
	        	var jobUrl = document.createElement("a");
	        	jobUrl.innerHTML = `<a href="${job.DetailsUrl}">${ job.DetailsUrl }</a>`;
	        	jobFrag.appendChild(jobTitle);
	        	jobFrag.appendChild(jobDescription);
	        	jobFrag.appendChild(jobRecruiterName);
	        	jobFrag.appendChild(jobLocationDescription);
	        	jobFrag.appendChild(jobUrl);
	        });
	        document.getElementById("widget").appendChild(jobFrag);

	    }
	});
}
