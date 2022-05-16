import { useMutation, useQueryClient } from 'react-query'

const useSendPanel = () => {
    const queryClient = useQueryClient();

    return useMutation((panel) =>
        fetch(`${process.env.REACT_APP_SERVER_URL}/new_panel`, {
            body: JSON.stringify(panel),
            method: 'POST',
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            }
        }),
        {
            onSuccess: () => {
                queryClient.refetchQueries("panels");
                queryClient.refetchQueries("boards")
            },

        }
    );
}

export default useSendPanel;