import React, { useState } from "react";
import { usePostTodoMutation } from "../store/service/endpoints/todo.endpoints";

const ToolComponent = ({handleRefetch}) => {
  const [fun, data] = usePostTodoMutation();

  const [item, setItem] = useState("");

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    await fun({
      text: item
    });
    handleRefetch()
  };

  const handleTextInput = (e) => {
    setItem(e.target.value);
  };
  return (
    <div>
      <h1 className="">Todo App</h1>
      <form onSubmit={handleSubmitForm}>
        <input
          value={item}
          onChange={handleTextInput}
          type="text"
          name="text"
          id="text"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ToolComponent;
