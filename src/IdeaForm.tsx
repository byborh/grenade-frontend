import { useMutation } from "@apollo/client/react";
import { useState } from "react";
import { CREATE_IDEA } from "./graphql/mutations";



export default function IdeaForm({ refetch }: { refetch: () => void }) {
    const [text, setText] = useState('');
    const [createIdea] = useMutation(CREATE_IDEA);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if(!text) return
        await createIdea({ variables: { text }});
        setText('');
        refetch();
    };

    return (
        <form onSubmit={handleSubmit} className="mb-3">
            <input
                type="text"
                className="form-control mb-2"
                placeholder="Proposer une idée"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button className="btn btn-primary" type="submit">Proposer</button>
        </form>
    );
};