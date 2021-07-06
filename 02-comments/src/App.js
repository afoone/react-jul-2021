import CommentsList from "./components/CommentsList";
import faker from 'faker'

function App() {
  const comments = [];

  for (let index = 0; index < 10; index++) {
    comments.push(
      {
        author: faker.name.firstName(),
        date: faker.date.recent(400),
        avatar: faker.image.avatar(),
        comment: faker.lorem.sentence(),
      }
    )
  }


  return (
    <div className="App ui container">
      <CommentsList comments={comments} />
    </div>
  );
}

export default App;
