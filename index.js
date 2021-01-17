
var readlineSync=require('readline-sync');
var chalk=require('chalk');
score=0;


console.log(chalk.yellow.underline.bold("( ♛ ‿ ♛ ) GAME OF THRONES ( ♛ ‿ ♛ )"))
console.log("");

function throne(que,ans){
  var userAnswer=readlineSync.question(que);
  if(userAnswer.toLowerCase()===ans){
  console.log(chalk.green("You've just earned a throne."))
  console.log("========================================");
  score+=5;
}
else{
  console.log(chalk.red("You lost the throne."));
  console.log("========================================");
  score=score-2;
}
}

//Question1
throne("Who was responsible for the creation of the Night King?\n1.The Lord of Light\n2.The Children of the Forest\n3.The Drowned God\n4.The First Men\n","2");

//Question2
throne("What is the Iron Bank’s representative played by Mark Gatiss called?\n 1.Quorin Halfhand\n 2.Xaro Xhoan Daxon\n3.Howard from the Halifax\n4.Tycho Nestoris\n","4");

//Question3
throne("In the TV show, what was Hodor called before he got his tragic door-holding nickname?\n1.Wylis\n2.Horys\n3.Myrys\n4.Gladys\n","1");

//Question4
throne("Who was the leader of the Golden Company sellswords when Dany ransacked King’s Landing?\n1.Wes Borland\n2.HarryStrickland\n3.KieferSutherland\n4.Robert Westland\n","2");

//Question5
throne("Dany’s dragons are (or were) called Drogon, Viserion and ____?\n1.Dougal\n2.Vhagar\n3.Rhaegal\n4.Balerion\n","3");

//Question6
throne("Iwan Rheon, who played Ramsay Bolton, was almost cast as which character?\n1.Jon Snow\n2.Gendry\n3.Podrick Payne\n4.Robb Stark\n","1");

//Question7
throne("Who said: 'I don’t plan on knitting by the fire while men fight for me'?\n1.Lyanna Mormont\n2.Sansa Stark\n3.Ser Brienne of Tarth\n4.Olenna Tyrell\n","1");

//Question8
throne(" Which UK drama had Hannah Murray (Gilly) and Joe Dempsie (Gendry) appeared in together before Game of Thrones?\n1.Misfits\n2.Skins\n3.Hollyoaks\n4.Sugar Rush\n","2");

console.log("You have earned: "+score+" thrones.");
