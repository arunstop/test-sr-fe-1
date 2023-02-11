export interface TodoData {
  id: string;
  title: string;
  description: string;
  date: number;
  done?: boolean;
  deleted?: boolean;
}


export interface TodoDataFromApi{
  userId: number
    id: number
    title: string
    completed: boolean
}

export interface TTodoContext{
  todos:Map<number,TodoDataFromApi>;
  addTodo:(title:string)=>void
  updateTodo: (todo:TodoDataFromApi)=>void
  initTodos: ()=>void
  deleteTodo: (todoId:number)=>void
}
