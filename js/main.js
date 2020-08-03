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
    
    const min = 1;
    const max = 13;
    let dealer_value = 0;
    let player_value = 0;


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

}