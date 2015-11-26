function createJSON(x1,x2,x3,x4,x5,x6,x7,x8,x9,x10)
	{
	try{
		theJson={
				"fName":x1,
				"lName":x2,
				"email":x3,
				"address":x4,
				"city":x5,
				"state":x6,
				"zip":x7,
				"cnty":x8,
				"phone":x9,
				"comment":x10
				}
		return theJson
		}
	catch(e)
		{
		console.log("Failed createJSON("+e+")")
		return false}
	}

function verifyData(fName,lName,emailAdd)
	{	
	try{
		var dataCheck=true
		var dataCheck1=true
		var dataCheck2=true
		var dataCheck3=true
		
		// Verifying data
		if(fName.length<2 || lName.length<2 || emailAdd.length==0)
			{alert("Missing Data! \nPlease make sure the following have values: \n   First Name\n   Last Name\n   Email Address!")
			dataCheck1=false}
			
		// Validating email Address 1
		for(i=0;i<emailAdd.length;i++)
			{// Verifying an asperand in the email address
			if(emailAdd.slice(i,i+1)=="@")
				{dataCheck2=true;i=emailAdd.length+1}
			else
				{dataCheck2=false}
			}
		// Validating email address 2
		if(emailAdd.slice(-3,emailAdd.length+1)=="com" || emailAdd.slice(-3,emailAdd.length+1)=="net" || emailAdd.slice(-3,emailAdd.length+1)=="gov")
			{
			dataCheck3=true
			}
		else
			{
			dataCheck3=false
			}
		// Error message for bad email
		if(dataCheck1==false || dataCheck2==false || dataCheck3==false)
			{alert("Bad email address.")
			dataCheck=false
			}	
		return dataCheck
	}
	catch(e)
		{dconsole.log("Failed verifiedData("+e+")")}
	}


function submitclick()
	{
	try{
		// Reading user input
		var x1 = document.getElementsByName("firstname")[0].value;
		var x2 = document.getElementsByName("lastname")[0].value;
		var x3 = document.getElementsByName("email")[0].value;
		var x4 = document.getElementsByName("stAddress")[0].value;
		var x5 = document.getElementsByName("city")[0].value;
		var x6 = document.getElementsByName("state")[0].value;
		var x7 = document.getElementsByName("zip")[0].value;
		var x8 = document.getElementsByName("country")[0].value;
		var x9 = document.getElementsByName("phone")[0].value;
		var x10 = document.getElementsByName("comment")[0].value;
		
		var dataValidate=verifyData(x1,x2,x3)
		if(dataValidate==false)
			{return}	
			
		// Creating JSON
		var theJSON=createJSON(x1,x2,x3,x4,x5,x6,x7,x8,x9,x10);
		if(theJSON==false)
			{alert("Your JSON is fucked up")
			return}
			
		// Listing Data
		for(i=1;i<11;i++)
			{
			switch(i){
				case 1: console.log("First Name: "+theJSON.fName);break
				case 2: console.log("Last Name: "+theJSON.lName);break
				case 3: console.log("Email Address: "+theJSON.email);break
				case 4: console.log("Street Address: "+theJSON.address);break
				case 5: console.log("City: "+theJSON.city);break
				case 6: console.log("State: "+theJSON.state);break
				case 7: console.log("Zip Code: "+theJSON.zip);break
				case 8: console.log("Country: "+theJSON.cnty);break
				case 9: console.log("Phone Number: "+theJSON.phone);break
				case 10: console.log("Comments: "+theJSON.comment);break
				}
			}
		}
	catch(e)
		{console.log("Failed submitclick("+e+")")}
	}