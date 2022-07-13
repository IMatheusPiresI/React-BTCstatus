export function useFormatXaxis(xaxis: string[]) {
  const newXaxisFormat: string[] = [];
  for (let i = 0; i < xaxis.length; i++) {
    const date = new Date(xaxis[i]);
    const day = date.getDate() + 1;
    const month = date.getMonth() + 1;

    const dateFormat = `${day <= 9 ? "0" + day : day}/${
      month <= 9 ? "0" + month : month
    }`;
    newXaxisFormat.push(dateFormat);
  }
  
  return newXaxisFormat;
}
