export const getPercentage = (bar:number, limit:number) => {

  limit = limit === 0 ? 100 : limit;

  const percentage = Math.round(bar/limit*10000)/100;
  
  return percentage;
}
