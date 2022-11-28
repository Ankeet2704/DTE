function  fn_saveData()
	{
    // 1.  Get data from input fields
		var txtName = document.getElementById("customer-name");
		var txtDate = document.getElementById("joining-date");
		var txtColor = document.getElementById("fav-color");
						
						// 2.  Create object with input fields values
		var  dataObj = {};
		dataObj.name = txtName.value;
		dataObj.date = txtDate.value;
		dataObj.color = txtColor.value;
						
		// alert(dataObj );
						
		// 3. Convert the object into JSON string
		var resultStr = JSON.stringify(dataObj);
												
		// 4.  Store the string in localStorage		
		localStorage.setItem("userData",resultStr);
		alert("Customer Details stored in localStorage");
	}

function fn_getData()
	{
    // 1.  Reading data from localStorage				
		var dataStr = localStorage.getItem("userData");	 

    // 2.  Convert JSON string into object	
		var dataObj = JSON.parse( dataStr);
    var headObj1 = document.getElementById("hobj1");
    var paraObj1 = document.getElementById("pobj1");

		if(dataObj.name == "" && dataObj.date == "")
		{
      document.body.style.background = 'black'
      document.body.style.color = 'white'
			headObj1.innerHTML = "Welcome to Guest User!";
      paraObj1.innerHTML = "Date is Empty";
			return;	// exit from the function 
		}
										
		// 4.  Show user details
    document.body.style.background = dataObj.color;
    document.body.style.color = 'black'
		headObj1.innerHTML = " Welcome " + dataObj.name + "!";
    paraObj1.innerHTML = " Joining Date: " + dataObj.date;

	}				
		