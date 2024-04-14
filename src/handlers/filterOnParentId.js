const filterOnParentId = (items, parentId) =>
  items.filter(item => item.parentId === parentId)
export default filterOnParentId
