function formatNumber(qtdays: number){
    if(qtdays <= 9){
        return `0` + qtdays
    }
    return qtdays
}

export const useFormatFilter = (qtDays: number) => {
    const date = new Date();
    const listLastDays = qtDays;

    const end_date = 
    `${date.getFullYear()}-${formatNumber(date.getMonth() + 1)}-${formatNumber(date.getDate())}`;
    date.setDate(date.getDate() - listLastDays);
    
    const start_date = 
    `${date.getFullYear()}-${formatNumber(date.getMonth() + 1)}-${formatNumber(date.getDate())}`;
    console.log(`https://api.coindesk.com/v1/bpi/historical/close.json?start=${start_date}&end=${end_date}`)
    return `https://api.coindesk.com/v1/bpi/historical/close.json?start=${start_date}&end=${end_date}`;
}