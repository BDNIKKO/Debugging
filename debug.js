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

// Define a function to count the total number of stores owned by all store owners.
const listNumberOfStores = function () {
const listNumberOfStores = function () 
  let totalLocations = 0; 
  for (let i = 0; i < storeOwners.length; i++) {  // Loop through each store owner
    totalLocations += storeOwners[i].stores; // Add the number of stores owned by the current owner to the total
  }
  return totalLocations; 
};

// Call the function and store the result in the variable 'locations'.
let locations = listNumberOfStores();


function tellMeMyStores() {
  console.log('Hey, can you tell me who owns stores?');
}


function hasStore() {
  for (let i = 0; i < storeOwners.length; i++) {
    let person = storeOwners[i].name; // Get the name of the current store owner
    let location = storeOwners[i].location; 

    if (person === 'Danny Shavez' && location === 'NM') { // Check if the current owner is Danny Shavez and located in NM
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
