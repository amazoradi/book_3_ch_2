
let campaign = {
  district: "Tennesee's 5th Congressional District.",
  platformIssue: {
    taxes: "None of those!",
    jobs: "More and higher paying!",
    infastructure: "Time for new roads!",
    healthCare: "Free for everyone, and the best we've ever seen!",
    crimeEnforcement: "Jail for serious offenders not minor offenders"
  },
  donationLink: "https://www.linkedin.com/in/austin-malde-zoradi-516864b1/",
  calendar: {
    october14: "Envelope stuffing.",
    october21: "Door to door canvasing.",
    october22: "Cold calls.",
    october30: "Puppy give-away.",
    November4: "Name sign planting."
  },
  volunteerInfo: [{
    name: "Ausitn",
    Address: "123 Fake Street",
    email: "real@email.com",
    phone: 1234567890,
    availability: "Day and Night",
    activities: "Phone calls"
  }, {
    name: "Paul M",
    Address: "An Octopus's Garden in the Sea",
    email: "ram_on@email.com",
    phone: 1112223333,
    availability: "Eight Days a week",
    activities: "Canvasnig"
  }, {
    name: "Marcus Mariota",
    Address: "1 Titans Way, Nashville, TN 37213",
    email: "passing_pineapple@email.com",
    phone: 1112229999,
    availability: "Not sundays, unless injured",
    activities: "taking polls"
  }],
  biography: "Elizabeth Sanger was born into a single parent home in the heart of Nashville. Her mother worked three jobs in order to send Sanger to the prestigious private school Harpeth Hall. There she excelled in evrything she did, proving herself worthy of the full-ride scholorship sh recieved to Vanderbilt. At Vandy she studied Political Science and interened at the state capitol. After graduation, she worked in the former congressman's office as a junior advisor. Sanger is ready to step into this role and change the world for the better.",
  imageGallery: {
    headshot: "https://www.paulmccartney.com/",
    familyPhoto: "https://awkwardfamilyphotos.com/",
    constituentsPhoto: "https://www.nhl.com/predators"
  },
  missionStatement: "Give a voice to the voiceless, defend the helpless, protect the people.",
  registration: "https://ovr.govote.tn.gov/"
}

// functions

function appendDistrict (fact) {
  campaign.district += fact;
};

appendDistrict(" The Best district in the World!");
console.log(campaign.district);


function newIssues () {
  
}
