

export function useOverwriteCategories(xaxis: string[]) {
    const newXaxisFormat: number[] = [];
    const first = 1
    const last = xaxis.length ;

    const getXaxisDivider = (x: number) => {
        return Math.ceil(xaxis.length / x)
    }

    if(xaxis.length === 2){
        newXaxisFormat.push(first, last);
    } else if(xaxis.length === 3){
        newXaxisFormat.push(first, 2, last);
    } else if(xaxis.length > 3 && xaxis.length <= 5){
        newXaxisFormat.push(first, 4 , last);
    } else if (xaxis.length > 5){
        newXaxisFormat.push(first, getXaxisDivider(5), getXaxisDivider(3), getXaxisDivider(2), last)
    }
    console.log(newXaxisFormat)
    return newXaxisFormat;
}   
  