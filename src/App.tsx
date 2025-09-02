import { useQuery } from "@apollo/client/react/compiled"
import { GET_IDEAS } from "./graphql/queries"
import IdeaForm from "./IdeaForm";
import IdeaList from "./IdeaList";

function App() {
  const { refetch } = useQuery(GET_IDEAS);
  
  return (
    <div className="container mt-5">
      <h1 className="mb-4">Grenade – Le vote express</h1>
      <IdeaForm refetch={refetch} />
      <IdeaList />
    </div>
  );
}

export default App