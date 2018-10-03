// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
    const newArr = [];
    array.forEach(user => {
      let { username } = user;
      username += "!";
      newArr.push(username);
    });
    console.log(newArray);


//Create an array using map that has all the usernames with a "? to each of the usernames

    const mapArray = array.map(user => user.username + "?");
    console.log(mapArray);


//Filter the array to only include users who are on team: red
    const redTeam = array.filter(user => user.team === "red");
    console.log(redTeam);


//Find out the total score of all users using reduce
    // const totalScore = array.reduce((accumulator, user) => {
    //   return accumulator + user.score;
    // },0)
    // console.log(`Totat score: ${totalScore}`);

    const totalScore = array.reduce((accumulator, user) => accumulator + user.score ,0)
    console.log(`Totat score: ${totalScore}`);


// (1), what is the value of i?   ->  i = index in the array (0,1,2,3,4...)
// (2), Make this map function pure:
    const arrayNum = [1, 2, 4, 5, 8, 9];  
    const newArray = arrayNum.map((num, i) => { 
      console.log(num, i);
      alert(num);
      return num * 2;
    })

    const pureArray = arrayNum.map(num => num * 2);


//BONUS: create a new list with all user information, but add "!" to the end of each items they own. 


const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];


  const listOfUsers = array.map(user=> {
    const items = user.items.map(item => {
      item = item +"!";
      return item;
    });
    user.items = items;
    return user;
  });

  console.log(listOfUsers);

        //changed after look at solution
        const listOfUsers = array.map(user=> {
          user.items = user.items.map(item => {
            return item + "!";
          });
          return user;
        });

        console.log(listOfUsers);
  
  // SOLUTION
  const listOfUsers = array.map(user=> { 
    user.items = user.items.map(item => {
      return item+"!";
    });
    return user;
  });

  console.log(listOfUsers);

