import { useQuery } from "react-query";

const useTasks = (board_id) => {

    return useQuery("tasks", async({board_id = 1}) => {
        const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/get_tasks?board_id=${board_id}`, {
            credentials: "include"
        });
        if (!res.ok) {
            throw new Error("something went wrong serer-side")
        }
        const data = await res.json()
        console.log(data.rows)
        return data.rows;
    })

}

export default useTasks;