


export const SortEventsFromOld = (eventsList) =>{
   let sortedList = eventsList
      .slice()
      .sort(
        (a, b) =>
          new Date(a.date).getTime() -
          new Date(b.date).getTime()
      );
      return sortedList;
}

export const SortEventsFromLatest = (eventsList) => {
 let sortedList= eventsList
    .slice()
    .sort(
      (a, b) =>
        new Date(b.date).getTime() -
        new Date(a.date).getTime()
    );
          return sortedList;

};

