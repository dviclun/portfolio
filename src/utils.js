export const shortText = (text, characters = 100) => {
    let recorted;

    if (text && text.length > characters) {
      recorted = text.slice(0, characters);
      return recorted + '...';
    }

    return text;
  };