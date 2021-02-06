interface Todo {
  id: number;
  description: string;
  place?: Place;
  status: boolean;
}

interface CompletedTodo extends Todo {
  status: true;
}

type Place = "home" | "work" | { custom: string };
