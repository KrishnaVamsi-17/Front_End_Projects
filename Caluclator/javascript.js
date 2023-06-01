let expression='';
function myfunc1(usrclk)
{
  if(usrclk==='=')
  {
    expression=eval(expression);
  }
  else if(usrclk==='C')
  {
    expression = expression.slice(0,-1);
  }
  else if(usrclk==='AC')
  {
    expression='';
  }
  else
  {
    expression+=usrclk;
  }
}
function View()
{
  document.getElementById("display").value=expression;
}