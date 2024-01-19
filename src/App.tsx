import './App.css'
import KanbanColumn from './components/KanbanColumn';

function App() {
 

  return (
      <div className="flex justify-center flex-wrap gap-6">
          <KanbanColumn title="To do" />
          <KanbanColumn title="In progress" />
          <KanbanColumn title="Done" />
      </div>
  );
}

export default App
