export const renderMessages = (value) => {
  const regex = /```([^`]+)```/g;
  const parts = [];
  let lastIndex = 0;

  value.replace(regex, (match, content, index) => {
    if (index > lastIndex) {
      parts.push({
        content: value.slice(lastIndex, index),
        type: 'text'
      });
    }
    parts.push({
      content,
      type: 'code'
    });
    lastIndex = index + match.length;
  });

  if (lastIndex < value.length) {
    parts.push({
      content: value.slice(lastIndex),
      type: 'text'
    });
  }

  return parts;
};
