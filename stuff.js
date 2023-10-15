let loginForm = document.getElementById("loginForm");

console.log("JS linked");


function myFunction() {
    document.getElementById("button").style.color = "red";
    console.log("Worked");

    var isClinicsChecked = document.querySelector("#clinics").checked;
    var isTherapyChecked = document.querySelector("#therapy").checked;
    var isPsychiatryChecked = document.querySelector("#psychiatry").checked;
    var isGenderAffirmingCareChecked = document.querySelector("#gender-affirming-care").checked;

    var isLGBTQIACentersChecked = document.querySelector("#lgbtqia-centers").checked;
    var isLGBTQIAFamilyPlanningChecked = document.querySelector("#lgbtqia-family-planning").checked;
    var isLGBTQIAYouthServicesChecked = document.querySelector("#lgbtqia-youth-services").checked;
    var isMentalHealthSupportGroupsChecked = document.querySelector("#mental-health-support-groups").checked;

    var isLegalAndAdvocacyResourcesChecked = document.querySelector("#legal-and-advocacy-resources").checked;
    var isRecreationalSafeSpacesChecked = document.querySelector("#recreational-safe-spaces").checked;
    var isHomeHealthServicesChecked = document.querySelector("#home-health-services").checked;

    var isSingleOccupantBathroomsChecked = document.querySelector("#single-occupant-bathrooms").checked;
    var isWheelchairAccessibilityChecked = document.querySelector("#wheelchair-accessibility").checked;
    var isFamilyBathroomsChecked = document.querySelector("#family-bathrooms").checked;
    
    var isSignLanguageInterpretersChecked = document.querySelector("#sign-language-interpreters").checked;
    var isBrailleAndLargePrintChecked = document.querySelector("#braille-and-large-print").checked;
    var isCommunicationAssistanceChecked = document.querySelector("#communication-assistance").checked;
    var answer = -1; 

    

    var user = [isSingleOccupantBathroomsChecked, isFamilyBathroomsChecked, isWheelchairAccessibilityChecked, isSignLanguageInterpretersChecked, isBrailleAndLargePrintChecked, isCommunicationAssistanceChecked];
    // You can now use these variables as needed
    // For example, to check the status of a checkbox:
    var clinics = [[0, 1, 1, 1, 1, 1], [0, 1, 1, 1, 0, 0]];
    var therapy = [[0,0,1,1,1, 0],[0,0,0,0,1, 1],[1,1,1,0,1, 1]];
    var psychiatry = [[0,1,0,0,1, 1], [1, 0, 1, 1, 0, 0]];
    var gender = [[1,1,0,0,1, 1], [0,0,0,1,0, 0], [0,1,0,1,1, 0]]; 

    var center = [[1, 1, 0, 0, 1, 0], [0, 1, 1, 1, 0, 1], [1, 0, 0, 1, 0, 1]];
    var famPlanning = [[1, 0, 1, 0, 1, 0], [0, 1, 0, 1, 1, 1]];
    var youth = [[0, 1, 0, 1, 1, 1], [1, 1, 1, 1, 0, 0], [0, 0, 0, 0, 1, 1]];
    var mental = [[1, 1, 0, 1, 0, 1], [1, 0, 1, 0, 1, 0]];

    var legal = [[1, 0, 1, 1, 0, 1],[0, 0, 1, 0, 1, 0]];
    var recreational = [[1, 0, 1, 0, 1, 1], [1, 1, 1, 0, 0, 1], [1, 0, 1, 1, 0, 0]];
    var home = [[0, 1, 0, 1, 1, 0], [1, 0, 1, 1, 0, 0], [1, 0, 0, 0, 1, 0]];

    var compArray; 

    var answer; 
    
    if (isClinicsChecked){
        compArray = clinics;   
        console.log("Clinics");
    } else if (isTherapyChecked) {
        compArray = therapy;
        console.log("Therapy");
    } else if (isPsychiatryChecked) {
        compArray = psychiatry;
        console.log("Psychiatry");
    } else if (isGenderAffirmingCareChecked) {
        compArray = gender;
        console.log("Gender");
    } else if (isLGBTQIACentersChecked) {
        compArray = center;
        console.log("Center");
    } else if (isLGBTQIAFamilyPlanningChecked) {
        compArray = famPlanning;
        console.log("Family");
    } else if (isLGBTQIAYouthServicesChecked) {
        compArray = youth;
        console.log("Youth");
    } else if (isMentalHealthSupportGroupsChecked) {
        compArray = mental;
        console.log("Mental");
    } else if (isLegalAndAdvocacyResourcesChecked) {
        compArray = legal;
        console.log("Legal");
    } else if (isRecreationalSafeSpacesChecked) {
        compArray = recreational;
        console.log("Rec");
    } else {
        compArray = home;
        console.log("Home");
    }

    var num = -1;
    var max = -1; 
        
        
    for (var i = 0; i < compArray.length; i++){
        var similar = 0
        for (var j = 0; j < user.length; j++) {
            if (user[j] == compArray[i][j]) {
                similar++; 
                console.log(i + ", " + j);
            }
        }
        if (similar > max) {
            max = similar;
            num = i; 
        }
            

        }
        answer = num; 
        console.log(answer);
                
  }