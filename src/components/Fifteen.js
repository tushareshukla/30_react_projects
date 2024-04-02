import React from "react";

export default function Fifteen({ peopleNames }) {
  const [currentName, setCurrentName] = React.useState(1);
  const [items, setItems] = React.useState(10);
  const indexOfLastItem = currentName * items;
  const indexOfFirstItem = indexOfLastItem - items;
  const currentItems = peopleNames.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (op) => () => setCurrentName(op); // Wrap it in a function
  const handlePaginatePerPage = (e) => {
    setCurrentName(1);
    setItems(Number(e.target.value));
  };
  return (
    <div>
      {currentItems.map((item, index) => {
        return <div key={index}>{item}</div>;
      })}

      <div>
        <ul>
          {Array.from(
            { length: Math.ceil(peopleNames.length / items) },
            (_, i) => i + 1
          ).map((page) => {
            return (
              <li key={page}>
                <button onClick={paginate(page)}>{page}</button> {/* Call paginate within a function */}
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <label>Items per page</label>
        <select
          value={items}
          onChange={handlePaginatePerPage}
          name="items"
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
          <option value="50">50</option>
        </select>
      </div>
    </div>
  );
}
