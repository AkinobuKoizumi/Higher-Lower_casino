'use strict';
{
    /*----------------
     *idの取得
     -----------------*/
    const dealerCard = document.getElementById('dealer_card');
    const playerCard = document.getElementById('player_card');
    var higher = document.getElementById('higher');
    var lower = document.getElementById('lower');
    const wrapper = document.getElementById('wrapper');
    var result = document.getElementById('result');
    const retry = document.getElementById('retry');
    const one = document.getElementById('one');
    const five = document.getElementById('five');
    const ten = document.getElementById('ten');
    const twentyfive = document.getElementById('twenty-five');
    const onehandred = document.getElementById('one-handred');   
    const money = document.getElementById('money');
    const show = document.getElementById('show');
    const hide = document.getElementById('hide');
    


    var dealerValue;
    var playerValue;
    
    /*-------
     * tip管理
     --------*/
    let value = 1500;
    money.innerHTML = value;


    /*------------------
     *乱数発生
     -------------------*/
    function getRandom(){
        return Math.floor(Math.random() * 13 + 1);
    }
    
    /*------------------
     *カードセット
     -------------------*/
    function init() {
        dealerValue = getRandom();
        dealerCard.textContent = dealerValue;
        playerValue = getRandom();
        playerCard.textContent = playerValue;
        wrapper.removeEventListener('transitionend', init);
     }

    /*-------------------
     *playerのカードオープン
     ---------------------*/
  function check(guess) {
    var str;
    if (wrapper.classList.contains('open')) {
      return;
    }
    wrapper.classList.add('open');
    higher.classList.add('disabled');
    lower.classList.add('disabled');
    if (playerValue === dealerValue) {
      str = 'draw';
    } else {
      str = 'You ' + getResultStr(guess);
    }
    result.textContent = str;
    result.classList.remove('hidden');
  }
    /*--------------------
     *判定関数
     ---------------------*/
  function getResultStr(guess) {
    if (
      playerValue > dealerValue && guess === 'higher'
      || playerValue < dealerValue && guess === 'lower'
    ) {
      return 'win!';
    } else {
      return 'lose...';
    }
  }
    
    init();
    /*---------------------
     *higherイベント処理
     ----------------------*/
    higher.addEventListener('click', function() {
        check('higher');
    });
    
    /*---------------------
     *lowerイベント処理
     ----------------------*/
    lower.addEventListener('click', function() {
        check('lower');
    });
    
    retry.addEventListener('click', function() {
        if (result.classList.contains('hidden')) {
          return;
        }
        result.classList.add('hidden');
        wrapper.classList.remove('open');
        higher.classList.remove('disabled');
        lower.classList.remove('disabled');
        wrapper.addEventListener('transitionend', init);
    });    
    /*---------------------
     *oneイベント処理
     ----------------------*/
    one.addEventListener('click', function() {
        value = value - 1;
        money.innerHTML =  value;
    
    });
    /*---------------------
     *fiveイベント処理
     ----------------------*/
    five.addEventListener('click', function() {
        value = value - 5;
        money.innerHTML =  value;        
    });
    /*---------------------
     *tenイベント処理
     ----------------------*/
    ten.addEventListener('click', function() {
        value = value - 10;
        money.innerHTML =  value;
    });
    /*---------------------
     *twenty-fiveイベント処理
     ----------------------*/
    twentyfive.addEventListener('click', function() {
        value = value -25;
        money.innerHTML = value;

    });
    /*---------------------
     *one-handredイベント処理
     ----------------------*/
    onehandred.addEventListener('click', function() {
        value = value -100;
        money.innerHTML = value;
    });
    
    /*---------------------
     *bank menuイベント処理
     ----------------------*/
    show.addEventListener('click', function() {
      document.body.className = 'bank-open';
    });

    hide.addEventListener('click', function() {
      document.body.className = '';
    });     
                    
}