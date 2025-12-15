let age = 10;
let citizen = true;
let registeredToVote = true;

if (age >= 18 && citizen == true && registeredToVote == true) {
  console.log("you are eligible to vote");
  //18 year or older , a citizen , registerd to vote
} else if (age >= 18 && citizen !== true) {
  console.log("not able due to citizenship status");
  // 18 year or older, but not citizenship.
} else if (age >= 18 && registeredToVote !== true) {
  console.log("you are not eligible due to registration ");
  //not registered to vote.
} else if (age < 18) {
  console.log("you are not eligible to vote"); // below 18 .
}
