import React from "react";
import ToolComponent from "./component/Tool.component";
import ListComponent from "./component/List.component";
import { useGetTodoQuery } from "./store/service/endpoints/todo.endpoints";

const App = () => {
  const { isLoading, isError, data, refetch } = useGetTodoQuery();

  const handleRefetch = () => {
    refetch() 
  }

  return (
    <div>
      <ToolComponent handleRefetch={handleRefetch}/>
      <ListComponent isLoading={isLoading} data={data}/>
    </div>
  );
};

export default App;
