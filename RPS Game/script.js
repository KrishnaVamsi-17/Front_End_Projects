let cmpmv = '';
      let var1 = JSON.parse(localStorage.getItem('var1'))||{
        Win:0,
        Loose:0,
        Tie:0
      };
      score();
     
      function ComputeMove()
      {
        let rm = Math.random();
        if(rm>=0 && rm<1/3) cmpmv = 'rock';
        else if(rm>=1/3&&rm<2/3) cmpmv = 'paper';
        else cmpmv = 'scissors';
      }
      function result(usermv)
      {
        let outcome = '';
        if(usermv === 'rock')
        {
          if(cmpmv === 'rock')
            outcome = 'Tie';
           
          else if(cmpmv === 'paper')
            outcome = 'You Loose';
          else 
            outcome = 'You Win';
        }
        else if(usermv === 'paper')
        {
          if(cmpmv === 'rock')
            outcome = 'You Win';
          else if(cmpmv === 'paper') 
            outcome = 'Tie';
          else
            outcome = 'You Loose';
     
        }
        else
        {
          if(cmpmv === 'rock'){
            outcome = 'You Loose.';
          } 
          else if(cmpmv === 'paper') 
            outcome = 'You Win';
          else 
            outcome = 'Tie';
        }
        if(outcome==='You Win')
        var1.Win+=1;
        else if(outcome==='Tie')
        var1.Tie+=1;
        else
        {
          var1.Loose+=1;
        }

        localStorage.setItem('var1',JSON.stringify(var1));
        score();
        document.querySelector('.js-result').innerHTML = outcome;
        document.querySelector('.js-moves').innerHTML = `You
        <img class="img" src="thumbnails/${usermv}-emoji.png">
        <img class="img" src="thumbnails/${cmpmv}-emoji.png">
        Computer`;
      }
      function reset()
      { 
        var1.Win=0;
        var1.Loose=0;
        var1.Tie=0;
        localStorage.removeItem('var1');
        document.querySelector('.js-result').innerHTML = '';
        score();
        document.querySelector('.js-moves').innerHTML = '';
        localStorage.removeItem('var1');
      }
      function score(){
        document.querySelector('.js-score').innerHTML =  `Win: ${var1.Win}, Loose: ${var1.Loose}, Tie: ${var1.Tie}`;
      }