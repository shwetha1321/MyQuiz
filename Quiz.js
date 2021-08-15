class Quiz {
constructor(){

}

getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
       console.log(gameState)
    })
}

update(state){
    database.ref("/").update({
        gameState:state
    })
}

async start(){
    //if(gameState == 0){
        participant = new Participant()
        var participantRef = await database.ref("participantCount").once("value");
        if(participantRef.exists())  {
            participantCount = participantRef.val();
            participant.getCount();
        }  
        question = new Question();
        question.display();
        
    //}
}

}

