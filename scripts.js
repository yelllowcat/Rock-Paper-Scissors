let computer =["scissor","paper","rock"];
let random =Math.floor(Math.random() * 3);
console.log(computer[random])

function playerChoice ()  {
    let response =prompt("select a option 0:scissor 1:paper, 3:rock");
    let election = computer[response];
    console.log(election);;
}

playerChoice()
