export const removeDuplicatesById = array => {
  return array.filter(
    (item, index) => array.findIndex(item2 => item2.id === item.id) === index,
  );
};
