const storeOwners = [
  {
    name: 'charles',
    stores: 1,
    location: "AZ",
  },
  {
    name: 'sally',
    stores: 1,
    location: "NJ",
  },
  {
    name: 'cassandra',
    stores: 1,
    location: "DE",
  },
  {
    name: 'Danny Shavez',
    stores: 1,
    location: "NM",
  },
];


const listNumberOfStores = function () {
  let totalLocations = 0; 
  for (let i = 0; i < storeOwners.length; i++) {
    totalLocations += storeOwners[i].stores; 
  }
  return totalLocations; 
};


let locations = listNumberOfStores();


function tellMeMyStores() {
  console.log('Hey, can you tell me who owns stores?');
}


function hasStore() {
  for (let i = 0; i < storeOwners.length; i++) {
    let person = storeOwners[i].name; 
    let location = storeOwners[i].location; 

    if (person === 'Danny Shavez' && location === 'NM') {
      console.log(`Yes, ${person} that lives in NM owns one too.`);
    } else {
      console.log(`Yes, ${person} has one`);
    }
  }
}

tellMeMyStores();
hasStore();

// The corrections made ensure proper iteration over the array.
// Corrected accurate property access, and the correct output format
