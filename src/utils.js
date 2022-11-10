export default function formatDate(date) {
  const [year, month, day] = date.split("-");
  const formattedDate = `${day}/${month}/${year}`;
  return formattedDate;
}
