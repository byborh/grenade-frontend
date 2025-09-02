import { useQuery, useMutation } from '@apollo/client/react';
import { VOTE_IDEA } from './graphql/mutations';
import { GET_IDEAS } from './graphql/queries';

export default function IdeaList() {
  const { data, loading, error, refetch } = useQuery(GET_IDEAS);
  const [voteIdea] = useMutation(VOTE_IDEA);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p className="text-danger">Erreur : {error.message}</p>;
  if (!data || !(data as { ideas: any[] }).ideas) return <p>Aucune idée trouvée.</p>;

  const handleVote = async (id: string) => {
    await voteIdea({ variables: { id } });
    refetch();
  };

  return (
    <ul className="list-group">
        {(data as { ideas: any[] }).ideas.map((idea: any) => (
            <li key={idea.id} className="list-group-item d-flex justify-content-between align-items-center">
            {idea.text}
            <button className="btn btn-sm btn-success" onClick={() => handleVote(idea.id)}>
                👍 {idea.votes}
            </button>
            </li>
        ))}
    </ul>
  );
}
