import { hasEventsDateMap } from "../data/dateHasEvents";
export const updateDate = (oldDateStr, updateDateStr) => {
 // check if the old date has other events
 // if no, remove the key-pair
  let value = hasEventsDateMap.get(oldDateStr);
  if (value === 1) {
    hasEventsDateMap.delete(oldDateStr);
  } else {
    value--;
    hasEventsDateMap.set(oldDateStr, value);
  }
  // check if the map has already had the update date
  // if no, add the key-pair
  if (!hasEventsDateMap.has(updateDateStr)) {
    hasEventsDateMap.set(updateDateStr, 1);
  } else {
    let value = hasEventsDateMap.get(updateDateStr);
    value++;
    hasEventsDateMap.set(updateDateStr, value);
  }
};

export const addDate = (dateStr) =>{
    if (!hasEventsDateMap.has(dateStr)) {
      hasEventsDateMap.set(dateStr, 1);
    } else {
      let value = hasEventsDateMap.get(dateStr) + 1;
      hasEventsDateMap.set(dateStr, value);
    }
      
}

export const deleteDate = (dateStr) =>{
    let value = hasEventsDateMap.get(dateStr);
    if (value === 1) {
      hasEventsDateMap.delete(dateStr);
    } else {
      let value = hasEventsDateMap.get(dateStr) - 1;
      hasEventsDateMap.set(dateStr, value);
    }

}
