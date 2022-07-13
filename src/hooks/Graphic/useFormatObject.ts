export function useFormatObject(values: number[], dates: string[]) {
  let data = [];

  for (let i = 0; i <= values.length; i++) {
      if(typeof dates[i] === 'string'){
        data.push({
            date: dates[i].split('-').reverse(). join('/'),
            value: values[i].toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD'
            }),
        });
      } 
  }
  return data.reverse();
}