import React from 'react';
import Card from './Card';
import TodoContext from './Context/TodoContext';
import ThemeContext from './Context/ThemeContext';
import TodoForm from './TodoForm';

const { ThemeProvider } = ThemeContext;
const { TodoProvider } = TodoContext;

export default function ContextPage() {
  return (
    <ThemeProvider>
      <TodoProvider>
        <Card>
          <TodoForm />
        </Card>
      </TodoProvider>
    </ThemeProvider>
  );
}
