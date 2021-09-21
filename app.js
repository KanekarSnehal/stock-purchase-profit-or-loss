const initialPrice=document.querySelector("#initial-price");
const stockQuantity=document.querySelector("#stock-quantity");
const currentPrice=document.querySelector("#current-price");
const submitButton=document.querySelector("#submit-button");
const output=document.querySelector("#output");

submitButton.addEventListener("click",calculateProfitOrLoss);

 
function calculateProfitOrLoss()
{
        const initial=Number(initialPrice.value);
        const current=Number(currentPrice.value);const quantity=Number(stockQuantity.value);

        if(initial<current)
        {
            const profit=calculateProfit(initial,current,quantity);
            const profitPercentage=(profit/initial)*100;

            output.innerText="The profit is "+profit.toFixed(2)+" and profit-percentage is "+profitPercentage.toFixed(2)+"%";
        }
        else if(current<initial)
        {
            const loss=calculateLoss(initial,current,quantity);
            const lossPercentage=(loss/initial)*100;

            output.innerText="The loss is "+loss
            +" and loss-percentage is "+lossPercentage.toFixed(2)+"%";
        }
        else
        {
            output.innerText="No profit no loss";
        }

    
}


function calculateLoss(initial,current,quantity)
{
    var loss=(initial-current)*quantity;
    return loss;
}

function calculateProfit(initial,current,quantity)
{
   
    var profit=(current-initial)*quantity;
    console.log(profit);
    return profit;
}