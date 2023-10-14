
// Mobile Menu

document.getElementById("hamburguer-icon").onclick = function(){
  document.getElementById("sliding-header-menu-outer").style.right = "0";


document.getElementById("sliding-header-menu-close-button").onclick = function(){
  document.getElementById("sliding-header-menu-outer").style.right = "-320px";

}

}

// About us Tab

var aboutUs = {
  "Mission": " Accelerate digital disruption by helping unicorns of tomorrow as well as enterprises of today in their digital journey by being the sought-after digital catalyst. We do this by using our unique and value-driven service offerings, differentiated and patented service delivery processes & operations, enabled by a highly qualified, motivated, and enthusiastic digital workforce. We not only help our customers fly into their vision of tomorrow but also provide a platform for our employees to fulfil their professional career and their learning/earning aspirations. We also help with the socio-economic causes in the communities we operate in..",
  "Vision": "Praesent ut lacinia neque, faucibujcyfam  kihi kjhihoy8t  ikugif sssuis sed nunc rutrum, tempor mi at, euismod nibh.",
  "Values": "<ul><li>Nunc iaculis</li><li>Donec dictum fringilla</li><li>Duis convallis tortor ultrices</li><li>Curabitur in est lectus</li><li>Maecenas condimentum elit</li></ul>"
};

var unseletectedColor = "#646872";
var seletectedColor = "#2A2D34";

var aboutUsTabs = document.getElementById("single-tab");

for (var a=0;a<aboutUsTabs.length; a++) {

  aboutUsTabs[a].onclick = function() {
    var clickedValue = this.innerHTML;
   

    document.getElementById("box-text").innerHTML = aboutUs[clickedValue];
    
    for (var b=0;b<aboutUsTabs.length; b++) {
      aboutUsTabs[b].style["background-color"]  = unseletectedColor;
      aboutUsTabs[b].style["font-weight"]  = "normal";






    }

    this.style["background-color"]=seletectedColor;
    this.style["font-weight"]="bold";
    
  

  }

  }




// Service slider

var ourServices = [
  {
    'title': 'Harrier',
    'text': 'Harrier Information Systems Pvt. Ltd. Specializes in providing perfect digital solutions in different business domain verticals, predominantly in Global Financial services and Healthcare industries We have our operations in India and UK.'
  },

  {
    'title': 'Branding',
    'text': 'Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi.'
  },

  {
    'title': 'Digital Marketing',
    'text': 'Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus.'
  }
  
];

var previousArrow = document.getElementById("service-previous");
var nextArrow = document.getElementById("service-next");
var  serviceTitleArea = document.getElementById("service-title");
var  serviceTextArea = document.getElementById("service-text");


var currentService = 0;

nextArrow.onclick = function() {
  currentService +=1;
  var title = ourServices[currentService].title;
  var text = ourServices[currentService].text;
  serviceTitleArea.innerHTML = title;
  serviceTextArea.innerHTML = text;





}

previousArrow.onclick = function() {
  currentService -=1;
  var title = ourServices[currentService].title;
  var text = ourServices[currentService].text;
  serviceTitleArea.innerHTML = title;
  serviceTextArea.innerHTML = text;

}










// Footer



  
   


   