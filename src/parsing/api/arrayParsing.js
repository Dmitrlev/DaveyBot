export const arrayParsing = (array, quantityPreviousMessages) => {

  const startIndex = Math.max(array.length - quantityPreviousMessages, 0);

  return array.slice(startIndex).map(item => ({
    role: item.messageSender === 'DAVID' ? 'assistant' : 'user',
    content: item.messageContent,
  }));
};

export const arrayParsingAll = (array) => {
  return array.map(item => ({
    role: item.messageSender === 'DAVID' ? 'assistant' : 'user',
    content: item.messageContent,
  }));
};