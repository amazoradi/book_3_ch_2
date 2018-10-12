// The object
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
  calendar: [{
    event: "Envelope stuffing.",
    date: "October 14"
  },
  {
    event: "Door to door canvasing.",
    date: "October 21"
  },
  {
    event: "Cold calls.",
    date: "October 22"
  },
  {
    event: "Name sign planting.",
    date: "Novemeber 4"
  },
  {
    event: "Puppy give-away.",
    date: "October 30"
  }]
  ,
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

function appendDistrict(fact) {
  campaign.district += fact;
};
appendDistrict(" The Best district in the World!");


function newIssues(topic, value) {
  campaign.platformIssue[topic] = value;
};
newIssues("Guns", "None.");


let donationUpdate = (udatePerecent) => {
  campaign.donationLink += ". Our goal is " + udatePerecent + " complete!";
};
donationUpdate("90%");


function newEvent(event, day) {
  let anotherEvent = { "event": event, "date": day }
  campaign.calendar.push(anotherEvent);
};

newEvent("Meet and greet", "Novemeber 1");

function compare(a, b) {
  if (a.date < b.date)
    return -1;
  if (a.date > b.date)
    return 1;
  return 0;
}
campaign.calendar.sort(compare);



function newMeat (name, address, email, phone, availability,activities) {
  let volunteerSignUp = {"name":name, "address":address, "email":email, "phone":phone, "availability":availability, "activities":activities};
  campaign.volunteerInfo.push(volunteerSignUp);
  };
newMeat("sam", "lame st", "haha@email.com", 99999999, "never", "many things");


function moreBio (info) {
  campaign.biography += info;
};

moreBio (" One day all you serfs will bow down! Muwhahaha!");


function addImage (title, link) {
  campaign.imageGallery[title] = link;
};

 addImage("side passion","https://github.com/nashville-software-school/client-side-mastery/blob/master/book-3-the-neophyte/chapters/JS_FUNCTION_BASICS.md");

 function moreMission (statement) {
   campaign.missionStatement += statement;
 };

 moreMission(" WORLD DOMINATION!");
 
 function register (words) {
   campaign.registration += words;
 };

 register(". Vote for me or else!")
 

