import { useMutation, useQueryClient } from 'react-query'

const useSendBoard = () => {
    const queryClient = useQueryClient();

    return useMutation((board) =>
        fetch(`${process.env.REACT_APP_SERVER_URL}/new_board`, {
            body: JSON.stringify(board),
            method: 'POST',
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            }
        }),
        {
            onSuccess: () => {
                queryClient.refetchQueries("dashboard");
                queryClient.refetchQueries("my_posts")
            },

        }
    );
}

export default useSendBoard;