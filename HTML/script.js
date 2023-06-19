let inpi;
let str1 = '';
let from = '';
let str2 = '';
function add()
{
    inpi = document.querySelector('.ini');
    str1 = inpi.value;
}
function cm(){
    document.querySelector('.inpuin').innerHTML = 'cm'
    from = 'cm'
}
function mm()
{
    document.querySelector('.inpuin').innerHTML = 'mm'
    from = 'mm'
}
function m()
{
    document.querySelector('.inpuin').innerHTML = 'm'
    from = 'm'
}
function feet()
{
    document.querySelector('.inpuin').innerHTML = 'ft'
    from = 'ft'
}
function inch(){
    document.querySelector('.inpuin').innerHTML = 'inch'
    from = 'in'
}
function check(usrclk)
{
    if(from==='cm')
    {
        if(usrclk==='cm')
        {
            document.querySelector('#out').value = Number(str1);
        }
        else if(usrclk==='mm')
        {
            document.querySelector('#out').value = Number(str1)*10;
        }
        else if(usrclk==='m')
        {
            document.querySelector('#out').value = Number(str1)/100;
        }
        else if(usrclk==='ft')
        {
            document.querySelector('#out').value = Number(str1)*0.0328084;
        }
        else if(usrclk==='in')
        {
            document.querySelector('#out').value = Number(str1)*0.393701;
        }
    }
    if(from==='mm')
    {
        if(usrclk==='cm')
        {
            document.querySelector('#out').value = Number(str1)/10;
        }
        else if(usrclk==='mm')
        {
            document.querySelector('#out').value = Number(str1);
        }
        else if(usrclk==='m')
        {
            document.querySelector('#out').value = Number(str1)/1000;
        }
        else if(usrclk==='ft')
        {
            document.querySelector('#out').value = Number(str1)*0.00328084;
        }
        else if(usrclk==='in')
        {
            document.querySelector('#out').value = Number(str1)*0.03937008;
        }
    }
    
}
