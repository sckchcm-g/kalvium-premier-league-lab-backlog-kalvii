//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(managerName, managerAge, currentTeam, trophiesWon){
  let managerinfo=[
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  ];

  return managerinfo;
}



// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];


//write your function here
function createFormation(formation){
  if(formation.length==0){
    return null
  }
  let object={
    defender : formation[0],
    midfield : formation[1],
    forward : formation[2],
  }
  return object;
}

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year){
   let arrOfPlayers=[]
   players.forEach(function(item){
    if(item.debut===year){
       arrOfPlayers.push(item)
    }
  })
  return arrOfPlayers

}

//Progression 4 - Filter players that play at the position _______
function filterByPosition(position){
   let playerPosition=[]
   players.forEach(function(item){
    if(item.position===position){
      playerPosition.push(item)
    }
   })
   return playerPosition
}

//Progression 5 - Filter players that have won ______ award
function filterByAward(awardname){
  let playerAward=[]
  players.forEach(function(item){
   item.awards.forEach(function(e){
    if(e.name===awardname){
      playerAward.push(item)
    }
   })
  })
  return playerAward
}

//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(awardname,noOfTimes){
  let noOfAwardTimes=[];
  players.forEach(function(item){
  let awardCount=0;
  item.awards.forEach(function(e){
    if(e.name===awardname){
      awardCount++
    }
  })

    if(awardCount==noOfTimes){
       noOfAwardTimes.push(item)
    }
  })
  return noOfAwardTimes
}



//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxCountry(awardName, country){
  let playersCountry=[];
  players.forEach(function(item){
    let isCountry=false;
    if(item.country===country){
      isCountry=true
    }
    let hasAward=false

    item.awards.forEach(function(e){
      if(e.name===awardName){
        hasAward=true;
      }
    })
    if(isCountry && hasAward){
      playersCountry.push(item)
    }
  })
  return playersCountry
}

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age) {
  let isEligible = [];
  players.forEach(function (item) {
    if (item.age < age && item.team === team && item.awards.length >= noOfAwards) {
      isEligible.push(item);
    }
  });
  return isEligible;
}

//Progression 9 - Sort players in descending order of their age

function SortByAge() {
  players.sort(function(a, b) {
    return b.age - a.age;
  });
  return players
}

// //Progression 10 - Sort players beloging to _____ team in descending order of awards won

function FilterByTeamxSortByNoOfAwards(team) {
  const filteredPlayers = players.filter(function(item) {
    return item.team === team;
  });

  filteredPlayers.sort(function(a, b) {
    return b.awards.length - a.awards.length;
  });

  return filteredPlayers;
}





//                  Challenges


//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names
// function SortByNamexAwardxTimes(awardName, noOfTimes, country){
//     const desiredAward=players.filter(function(item){
//       item.awards.forEach(function(e){
//         return e.name=== awardName && item.awards.length===noOfTimes && item.country===country;
//       })
//       desiredAward.sort()
//    })
// }
function SortByNamexAwardxTimes(awardName, noOfTimes, country) {
  const desiredAwardPlayers = players.filter(function(item) {
      // Check if the player has the desired award a specific number of times and belongs to the specified country
      return item.awards.filter(e => e.name === awardName).length === noOfTimes && item.country === country;
  });

  desiredAwardPlayers.sort((a, b) => {
      // Sort by names in alphabetical order
      const nameA = a.name.toUpperCase(); // ignore case
      const nameB = b.name.toUpperCase();

      if (nameA > nameB) {
          return 1;
      }
      return 0;
  });

  return desiredAwardPlayers;
}


//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
function SortByNamexOlderThan(age) {
  const olderPlayers = players.filter(player => player.age > age);

  olderPlayers.sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();

      if (nameA > nameB) {
          return 1;
      }
      return 0;
  });

  return olderPlayers;
}