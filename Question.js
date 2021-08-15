class Question{
    constructor(){
        this.title = createElement('h1')
        this.input1 = createInput('Enter your name here')
        this.input2 = createInput('Enter correct option no.')
        this.button = createButton('Submit')
        this.question = createElement('h3');
        this.option1 = createElement('h4');
        this.option2 = createElement('h4');
        this.option3 = createElement('h4');
        this.option4 = createElement('h4');
    }

    hide(){
        this.title.hide();
        this.input1.hide();
        this.input2.hide();
        this.button.hide();
    }

    display(){

        this.title.html("My Quiz Game")
        this.title.position(425,10)

        this.question.html("Question:- What starts and ends with the letter ‘E’, but has only one letter? " )
        this.question.position(150,100);

        this.option1.html("1: Everyone " )
        this.option1.position(150,120);
        this.option2.html("2: Envelope" );
        this.option2.position(150,150);
        this.option3.html("3: Estimate " );
        this.option3.position(150,190);
        this.option4.html("4: Example" );
        this.option4.position(150,220);

        this.input1.position(150,250)
        this.input2.position(250,250)

        this.button.position(250,300);

        this.button.mousePressed(()=>{
            this.title.hide();
            this.input1.hide();
            this.input2.hide();
            this.button.hide();
            participant.name = this.input1.value();
            participant.answer = this.input2.value();
            participantCount+=1;
            participant.index = participantCount;

            participant.update();
            participant.updateCount(participantCount);
        })

    }

}