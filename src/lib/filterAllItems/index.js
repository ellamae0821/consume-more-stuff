function filterAllItems(arr,query){
  const data = arr.filter((elem) => {
    return elem.id === query;
  });
  return data;
}


export default filterAllItems;