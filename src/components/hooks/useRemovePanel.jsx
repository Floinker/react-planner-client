import { useMutation, useQueryClient } from 'react-query'

const useRemovePanel = () => {
    const queryClient = useQueryClient();

    return useMutation((panelId) =>
        fetch(`${process.env.REACT_APP_SERVER_URL}/del_panel`, {
            body: JSON.stringify(panelId),
            method: 'POST',
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            }
        }),
        {
            onSuccess: () => {
                queryClient.refetchQueries("panels");
                queryClient.refetchQueries("dashboard")
            },

        }
    );
}

export default useRemovePanel;