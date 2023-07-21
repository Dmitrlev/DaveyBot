export  const getTime = () =>  {
  const now = new Date(); // Получаем текущую дату и время
  const hours = now.getHours(); // Получаем текущий час (от 0 до 23)
  const minutes = now.getMinutes(); // Получаем текущие минуты (от 0 до 59)

  // Добавляем ведущий ноль, если число состоит из одной цифры
  const formattedHours = hours < 10 ? `0${hours}` : hours.toString();
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes.toString();

  const time = `${formattedHours}:${formattedMinutes}`; // Формируем строку времени в формате "чч:мм"
  return time;
}