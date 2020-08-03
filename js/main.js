'use strict';
{
    /*----------------
     *idの取得
     -----------------*/
    const dealer = document.getElementById('dealer');
    const player = document.getElementById('player');
    const higher = document.getElementById('higher');
    const lower = document.getElementById('lower');
    const wrapper = document.getElementById('wrapper');
    const result = document.getElementById('result');
    const retry = document.getElementById('retry');
    const one = document.getElementById('one');
    const five = document.getElementById('five');
    const ten = document.getElementById('ten');
    const twentyfive = document.getElementById('twenty-five');
    const onehandred = document.getElementById('one-handred');   
    const money = document.getElementById('money');
    const plus = document.getElementById('plus');
    
    const min = 1;
    const max = 13;
    let dealer_value = 0;
    let player_value = 0;
    
    /*-------
     * tip管理
     --------*/
    let value = 1500;
    money.innerHTML = value;


    /*------------------
     *乱数発生
     -------------------*/
    function getRandom(){
        return Math.floor(Math.random() * (max + 1 - min)) + min;
    }
    
    /*------------------
     *カードセット
     -------------------*/
    function init(){
        if(wrapper.className === 'open'){
            return ;
        }
        dealer_value = getRandom();
        dealer.innerHTML = dealer_value;
        player_value = getRandom();
        player.innerHTML = player_value;
    }

    /*-------------------
     *playerのカードオープン
     ---------------------*/
    function check(guess){
        var str;
        wrapper.classList.add('open');
        if(dealer_value === player_value){
            str = 'tie';
        } else {
            str = 'you' + getResult(guess);
        }
        result.innerHTML = str;
        result.classList.remove('hidden');
    }
    /*--------------------
     *判定関数
     ---------------------*/
    function getResult(guess){
        if(guess === 'higer' && player_value > dealer_value 
         ||guess === 'lower' && player_value < dealer_value){
            return ' win!!!';
         } else {
            return ' lose...';
         }
    }
    
    init();
    /*---------------------
     *higherイベント処理
     ----------------------*/
    higher.addEventListener('click', function() {
        check(higher);
    });
    
    /*---------------------
     *lowerイベント処理
     ----------------------*/
    lower.addEventListener('click', function() {
        check(lower);
    });
    
    retry.addEventListener('click', function() {
        wrapper.classList.remove('open');
        result.classList.add('hidden');
        wrapper.addEventListener('transitionend', function() {
            init();   
        });
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
                    
}