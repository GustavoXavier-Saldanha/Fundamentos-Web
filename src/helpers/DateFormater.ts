export const formatData = (data: any) => {
  const date = new Date(data);
  const year = date.getFullYear();
  let month: any = date.getMonth() + 1;
  let dt: any = date.getDate();

  if (dt < 10) {
    dt = "0" + dt;
  }
  if (month < 10) {
    month = "0" + month;
  }

  return `${year}-${month}-${dt}`;
};
