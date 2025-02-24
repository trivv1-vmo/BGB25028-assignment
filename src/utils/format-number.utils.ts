export const formatNumber = (number: string | undefined) => {
  if (!number) return "-";
  return number.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}