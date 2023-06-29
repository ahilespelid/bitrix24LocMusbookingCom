"use strict"

let hasClass = (typeof document.documentElement.classList == "undefined") ?
    function(el, clss){return el.className && new RegExp("(^|\\s)" + clss + "(\\s|$)").test(el.className);} :
    function(el, clss){return el.classList.contains(clss);};

function curDateTime(){
    var d = new Date();
    
    var year = d.getFullYear(), month = d.getMonth()+1, day = d.getDay();
    var hours = d.getHours(), minutes = d.getMinutes(), seconds = d.getSeconds(); 
    var date = d.getDate(), ms = d.getMilliseconds();   

    var curDateTime = year;
    curDateTime += ((month>9) ? '-': '-0')+month;
    curDateTime += ((date>9) ? '-': '-0')+date;
    
    curDateTime += ((hours>9) ? ' ': ' 0')+hours;
    curDateTime += ((minutes>9) ? ':': ':0')+minutes;
    curDateTime += ((seconds>9) ? ':': ':0')+seconds;

return curDateTime;}

document.addEventListener('DOMContentLoaded', () => {
    //*/ День -> Месяц//*/
    let span = document.createElement("span");

    document.querySelectorAll('.head_el__button_day').forEach((i, k) => {
        i.addEventListener('click', function(e){
            let button_day = this.querySelectorAll('.button_day')[0],
                button_mon = this.querySelectorAll('.button_mon')[0];
            if(undefined != button_day){
                span.className = 'button_mon'; 
                span.innerText = 'Месяц';
                button_day.remove();
                this.insertBefore(span, this.firstChild);
            }else
            if(undefined != button_mon){
                span.className = 'button_day'; 
                span.innerText = 'День';
                button_mon.remove();
                this.insertBefore(span, this.firstChild);
            }
        //console.log(this.querySelectorAll('.button_day')[0].innerHTML = curDateTime()); 
        });
    });
    
    document.querySelectorAll('.body__tb_block_empty').forEach((i, k) => {
        i.addEventListener('click', function(e){
            let issetNew = document.querySelectorAll('.body__tb_block_new');
            if(0 == issetNew.length || issetNew[0] === this || this.classList[1] === issetNew[0].classList[1]){
                this.classList.toggle('body__tb_block_new');
            }            
            //this.style.background = 'rgb(0,191,255)';

        });
    });
    
});

/* BX24.init(function(){
   
    BX24.callMethod(
        "crm.deal.fields", {},  
        function(result) {
            if(result.error()) console.error(result.error());
            else console.log(result.data()['ID']);
        }
    );
    console.log(BX24.getDomain(), BX24.placement.info());
    ///* / Сформируем запрос на встраивание ///* /
});
*/
 