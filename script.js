function talk(){
    var know={
        "Hello": "Hi, how are you?",
        "Im fine": " Great, my name is Joshua",
        "Who are you":"My name is Joshua",
        "Rock":"Paper",
        "Paper":"Scissor",
        "Scissors":"Rock",
        "What are you": "I am a Chatbox created to entertain you",
        "Can we play a game": "yes of course, lets play rock paper scissors, you go first",
        "Nice meeting you":" You too, i had lots of fun",
        "Bye": " Bye, have a good day!",

    };
    var user=document.getElementById("userBox").value;
    document.getElementById("chatLog").innerHTML=user+"<br>";
    if(user in know){
        document.getElementById("chatLog").innerHTML=know[user]+"<br>";

    }
    else
    {
        document.getElementById("chatLog").innerHTML="Sorry, I couldn't understand you <br>";
    }
}