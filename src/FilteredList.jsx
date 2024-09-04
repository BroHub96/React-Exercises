import { useMemo } from "react"

export function FilteredList({items}){
    const filteredItems = useMemo(() => { 
        return items.filter((item) => item.age > 18);
    }, [items]);

    
  return (
    <div>
      <h2>Filtered List (Age: over 18)</h2>
      <ul>
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <li key={item.id}>
              Name: {item.name}, Age: {item.age}
            </li>
          ))
        ) : (
          <li>No items found.</li>
        )}
      </ul>
    </div>
  );
}