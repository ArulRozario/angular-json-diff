export function orderById(obj1: any, obj2: any) {
  for (const key in obj1) {
    if (!obj1[key] || !obj2[key]) continue;
    if (Array.isArray(obj1[key]) && obj1[key].length) {
      if (typeof obj1[key][0] === 'object') {
        const sortedArrays = orderArraysByIds(obj1[key], obj2[key]);
        obj1[key] = sortedArrays.arr1sorted;
        obj2[key] = sortedArrays.arr2sorted;
      }
    } else if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
      const orderedObj = orderById(obj1[key], obj2[key]);
      obj1[key] = orderedObj.obj1;
      obj2[key] = orderedObj.obj2;
    } else {
      continue;
    }
  }
  return { obj1, obj2 };
}
export function orderArraysByIds(
  arr1: { id: string }[],
  arr2: { id: string }[],
  _options?: { idKey: string }
) {
  const arr1sorted = [];
  const arr2sorted = [];
  const obj1Ids = arr1
    .filter((item) => !!item && !!item.id)
    .map((item) => item.id);
  const obj2Ids = arr2
    .filter((item) => !!item && !!item.id)
    .map((item) => item.id);
  const commonIds: string[] = obj1Ids.filter((id) => obj2Ids.includes(id));
  commonIds.forEach((id) => {
    const arr1Item = arr1
      .filter((item) => !!item)
      .find((item) => item.id === id);
    const arr2Item = arr2
      .filter((item) => !!item)
      .find((item) => item.id === id);
    if (!arr1Item || !arr2Item) return;
    const sortedObjsResult = orderById(arr1Item, arr2Item);
    arr1sorted.push(sortedObjsResult.obj1);
    arr2sorted.push(sortedObjsResult.obj2);
  });
  const arr1ItemsWithoutId = arr1
    .filter((item) => !!item)
    .filter((item) => !item.hasOwnProperty('id'));
  const arr2ItemsWithoutId = arr2
    .filter((item) => !!item)
    .filter((item) => !item.hasOwnProperty('id'));
  const nonCommonArr1Objs = arr1
    .filter((item) => !!item)
    .filter(
      (item) => item.hasOwnProperty('id') && !commonIds.includes(item.id)
    );
  const nonCommonArr2Objs = arr2
    .filter((item) => !!item)
    .filter(
      (item) => item.hasOwnProperty('id') && !commonIds.includes(item.id)
    );
  arr1sorted.push(...nonCommonArr1Objs, ...arr1ItemsWithoutId);
  arr2sorted.push(...nonCommonArr2Objs, ...arr2ItemsWithoutId);
  return { arr1sorted, arr2sorted };
}
