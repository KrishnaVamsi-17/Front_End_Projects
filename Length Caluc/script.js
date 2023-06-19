let inpi;
let str1 = '';
let from = '';

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
function cm1(){
  document.querySelector('.otp').innerHTML = 'cm'
}
function mm1()
{
  document.querySelector('.otp').innerHTML = 'mm'
  
}
function m1()
{
  document.querySelector('.otp').innerHTML = 'm'
  
}
function feet1()
{
  document.querySelector('.otp').innerHTML = 'ft'
  
}
function inch1(){
  document.querySelector('.otp').innerHTML = 'inch'
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
    else if(from==='mm')
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
    else if(from==='m')
    {
      if(usrclk==='cm')
        {
            document.querySelector('#out').value = Number(str1)*100;
        }
        else if(usrclk==='mm')
        {
            document.querySelector('#out').value = Number(str1)*1000;
        }
        else if(usrclk==='m')
        {
            document.querySelector('#out').value = Number(str1);
        }
        else if(usrclk==='ft')
        {
            document.querySelector('#out').value = Number(str1)*3.28084;
        }
        else if(usrclk==='in')
        {
            document.querySelector('#out').value = Number(str1)*39.3701;
        }
    }
    else if(from==='ft')
    {
      if(usrclk==='cm')
        {
            document.querySelector('#out').value = Number(str1)*30.48;
        }
        else if(usrclk==='mm')
        {
            document.querySelector('#out').value = Number(str1)*304.8;
        }
        else if(usrclk==='m')
        {
            document.querySelector('#out').value = Number(str1);
        }
        else if(usrclk==='ft')
        {
            document.querySelector('#out').value = Number(str1);
        }
        else if(usrclk==='in')
        {
            document.querySelector('#out').value = Number(str1)*12;
        }
    }
    else if(from==='in')
    {
      if(usrclk==='cm')
        {
            document.querySelector('#out').value = Number(str1)*2.54;
        }
        else if(usrclk==='mm')
        {
            document.querySelector('#out').value = Number(str1)*25.4;
        }
        else if(usrclk==='m')
        {
            document.querySelector('#out').value = Number(str1)*0.0254;
        }
        else if(usrclk==='ft')
        {
            document.querySelector('#out').value = Number(str1)*0.0833333;
        }
        else if(usrclk==='in')
        {
            document.querySelector('#out').value = Number(str1);
        }
    } 
}
function reset()
{
  str1 = '';
  from = '';
  document.querySelector('.inpuin').innerHTML = 'Units';
  document.querySelector('.ini').value = '';
  document.querySelector('.outp').value='';
  document.querySelector('.otp').innerHTML = 'Units';
  

}