import { useMutation, useQueryClient } from 'react-query'

const useSendTask = () => {
    const queryClient = useQueryClient();

    return useMutation((task) =>
        fetch(`${process.env.REACT_APP_SERVER_URL}/new_task`, {
            body: JSON.stringify(task),
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

export default useSendTask;