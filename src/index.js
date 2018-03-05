module.exports = function getZerosCount(number, base) {
var i = 0;
var thisNumb = 2;
var simple_Numbers = [];
while (thisNumb <= base)
{
 if ((base % thisNumb) == 0) 
 {
  simple_Numbers[i] = thisNumb;
  i++;
  base = base / thisNumb;
 }
 else
 {
  thisNumb++;
 }
}
var amountOfSt = [];
var AmountOfSimilarStepens = [];
var minSt = [];
var iter2 = -1;
for(var iter = 0; iter < simple_Numbers.length; iter++)
{
  amountOfSt[iter] = 0;
  thisNumb = simple_Numbers[iter];
  if(simple_Numbers[iter] == simple_Numbers[iter-1] && iter > 0)
  {
    amountOfSt[iter] = amountOfSt[iter-1];
    AmountOfSimilarStepens[iter2]++;
    continue;
  }
  else
  {
    iter2 ++;
    AmountOfSimilarStepens[iter2] = 1;
    while(thisNumb <= number)
    {

      var thisAmountOfStepen = Math.floor(number/thisNumb);
      thisNumb = thisNumb * simple_Numbers[iter];
      amountOfSt[iter] = amountOfSt[iter] + thisAmountOfStepen;
    }
  }
}
iter2 =-1;
for(var iter = 0; iter < AmountOfSimilarStepens.length; iter++)
{
  iter2 = iter2 + AmountOfSimilarStepens[iter];
  minSt[iter] = Math.floor(amountOfSt[iter2]/AmountOfSimilarStepens[iter]);
}
zeroAmount = minSt[0];
for(var it = 0; it<minSt.length; it++)
{
  if(minSt[it] < zeroAmount)
    zeroAmount = minSt[it];
}
return zeroAmount;
}
