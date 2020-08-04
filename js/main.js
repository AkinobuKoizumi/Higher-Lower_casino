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
    const moneyBtn1 = document.getElementById('moneyBtn1');
    const moneyBtn2 = document.getElementById('moneyBtn2');
    const moneyBtn3 = document.getElementById('moneyBtn3');
    const moneyBtn4 = document.getElementById('moneyBtn4');
    const moneyBtn5 = document.getElementById('moneyBtn5');
    const moneyBtn6 = document.getElementById('moneyBtn6');

　　/*---------
　　 *手札管理
　　 ----------*/
    var dealerValue;
    var playerValue;
    
    /*-------
     * tip管理
     --------*/
    let value = 0;
    money.innerHTML = value;
    
    /*-------
     *クリックカウント初期化
     --------*/
    var count_one=0;
    var count_five=0;
    var count_ten=0;
    var count_twentyfive=0;
    var count_onehandred=0;
    
    /*---------
     * charge金額初期化
     ----------*/
     var charge1 = 100000;
     var charge2 = 1250000;
     var charge3 = 500000;
     var charge4 = 200000;
     var charge5 = 30000;
     var charge6 = 5000;

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
    addDisabled();
    if (playerValue === dealerValue) {
      str = 'draw';
      value = value + sumMoney();
    } else {
      str = 'You ' + getResultStr(guess);
      value = value + getMoney(guess);
    }
    result.textContent = str;
    result.classList.remove('hidden');
    money.textContent = value;
    
  }
  /*----------------------
   * disabled関数
   ----------------------*/
  function addDisabled() {
    one.classList.add('disabled');
    five.classList.add('disabled');
    ten.classList.add('disabled');
    twentyfive.classList.add('disabled');
    onehandred.classList.add('disabled');
  }
  function removeDisabled() {
    one.classList.remove('disabled');
    five.classList.remove('disabled');
    ten.classList.remove('disabled');
    twentyfive.classList.remove('disabled');
    onehandred.classList.remove('disabled');    
  }
  
    /*--------------------
     *result(win or lose)判定関数
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
    /*--------------------
     *報酬判定関数
     ---------------------*/    
  function sumMoney() {
    return 1*count_one+5*count_five+10*count_ten+25*count_twentyfive+100*count_onehandred;
  }
  function getMoney(guess){
    if(
      playerValue > dealerValue && guess === 'higher'
      || playerValue < dealerValue && guess === 'lower'      
      ){
        return 2 * sumMoney();
      } else {
        return 0;
      }
  }   
     
    /*--------------------
     *リロード時の初期化
     ---------------------*/
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
    
    /*---------------------
     * retryイベント処理
     ----------------------*/
     
    retry.addEventListener('click', function() {
        if (result.classList.contains('hidden')) {
          return;
        }
        result.classList.add('hidden');
        wrapper.classList.remove('open');
        higher.classList.remove('disabled');
        lower.classList.remove('disabled');
        removeDisabled();
        wrapper.addEventListener('transitionend', init);
        count_one=0;
        count_five=0;
        count_ten=0;
        count_twentyfive=0;
        count_onehandred=0;
    });  
    
    
    /*---------------------
     *oneイベント処理
     ----------------------*/
    one.addEventListener('click', function() {
      if(one.classList.contains('disabled') == true ){
        return ;
      }
        count_one++;
        console.log(count_one);
        value = value - 1;
        money.innerHTML =  value;
    
    });
    /*---------------------
     *fiveイベント処理
     ----------------------*/
    five.addEventListener('click', function() {
      if(one.classList.contains('disabled') == true ){
        return ;
      }
        count_five++;
        console.log(count_five);
        value = value - 5;
        money.innerHTML =  value;        
    });
    /*---------------------
     *tenイベント処理
     ----------------------*/
    ten.addEventListener('click', function() {
      if(one.classList.contains('disabled') == true ){
        return ;
      }
        count_ten++;
        console.log(count_ten);
        value = value - 10;
        money.innerHTML =  value;
    });
    /*---------------------
     *twenty-fiveイベント処理
     ----------------------*/
    twentyfive.addEventListener('click', function() {
      if(one.classList.contains('disabled') == true ){
        return ;
      }
        count_twentyfive++;
        console.log(count_twentyfive);
        value = value -25;
        money.innerHTML = value;

    });
    /*---------------------
     *one-handredイベント処理
     ----------------------*/
    onehandred.addEventListener('click', function() {
      if(one.classList.contains('disabled') == true ){
        return ;
      }
        count_onehandred++;
        console.log(count_onehandred);
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
    
    /*---------------------
     * money イベント処理 money-btn-1
     ----------------------*/
    moneyBtn1.addEventListener('click', function() {
       value = value + charge1;
       money.innerHTML = value;
    });  
    /*---------------------
     * money イベント処理 money-btn-2
     ----------------------*/
    moneyBtn2.addEventListener('click', function() {
       value = value + charge2;
       money.innerHTML = value;
    });  
    /*---------------------
     * money イベント処理 money-btn-3
     ----------------------*/
    moneyBtn3.addEventListener('click', function() {
       value = value + charge3;
       money.innerHTML = value;
    });  
    /*---------------------
     * money イベント処理 money-btn-4
     ----------------------*/
    moneyBtn4.addEventListener('click', function() {
       value = value + charge4;  
       money.innerHTML = value;
    });  
    /*---------------------
     * money イベント処理 money-btn-5
     ----------------------*/
    moneyBtn5.addEventListener('click', function() {
       value = value + charge5;
       money.innerHTML = value;
    });  
    /*---------------------
     * money イベント処理 money-btn-6
     ----------------------*/
    moneyBtn6.addEventListener('click', function() {
       value = value + charge6;
       money.innerHTML = value;
    }); 
  }
  
  
  
  
  