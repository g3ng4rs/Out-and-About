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
    var isSingleOccupantBathroomsChecked = document.querySelector("#single-occupant-bathrooms").checked;
    var isWheelchairAccessibilityChecked = document.querySelector("#wheelchair-accessibility").checked;
    var isSignLanguageInterpretersChecked = document.querySelector("#sign-language-interpreters").checked;
    var isBrailleAndLargePrintChecked = document.querySelector("#braille-and-large-print").checked;
    var isCommunicationAssistanceChecked = document.querySelector("#communication-assistance").checked;
    var isLegalAndAdvocacyResourcesChecked = document.querySelector("#legal-and-advocacy-resources").checked;
    var isRecreationalSafeSpacesChecked = document.querySelector("#recreational-safe-spaces").checked;
    var isHomeHealthServicesChecked = document.querySelector("#home-health-services").checked;

    // You can now use these variables as needed
    // For example, to check the status of a checkbox:
    console.log(isClinicsChecked);
            
  }