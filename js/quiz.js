class Quiz{
    constructor(){

    }
    display(){
        //var question = createElement('h2');
        this.fetchAllQuestion();
        
        //question.html()
       // question.position(displayWidth / 2, displayHeight / 2);
        var display_position = 200;

        for(var q in allQuestions){
            var question = allQuestions[q].QText;
            console.log(allQuestions[q].QText);
            text(question, 200, display_position);
            display_position = display_position + 100;
        }

    }
    fetchAllQuestion(){
 var questionFetchRef = database.ref("Marvel");
 questionFetchRef.on("value",(data)=>{
     allQuestions = data.val();
     //console.log(data.val());
 })
    }
}