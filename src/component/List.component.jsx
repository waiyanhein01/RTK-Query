import React from "react";

const ListComponent = ({isLoading,data}) => {
  return (
    <div>
      {isLoading ? (
        <h1>Loading</h1>
      ) : (
        <>
          {data.map((el) => (
            <ul key={el.id}>{el.id}. {el.text}</ul>
          ))}
        </>
      )}
    </div>
  );
};

export default ListComponent;
