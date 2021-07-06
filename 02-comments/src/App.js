import CommentsList from "./components/CommentsList";

function App() {
  const comments = [
    {
      comment: "Que pasada",
    },
    {
      comment: "Muy mal la comida",
    },
  ];

  return (
    <div className="App">
      <CommentsList comments={comments} />
    </div>
  );
}

export default App;
