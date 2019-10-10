var data = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illnois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming"
  ];
  
  
  
          function boxischanged(){
              console.clear()
  
              var filterItems = [];
            var whatisintebox = document.getElementById("sb").value
            whatsinthebox = whatisintebox.toLowerCase();
            
            if (whatisintebox.length > 0){
              for(var x = 0; x<data.length;x++)
                  if (data[x].toLowerCase().search(whatisintebox) > -1)
                  {
                     filterItems.push(data[x])
                     
                  }
            
            }
  
            console.log(filterItems);
            
          }
           