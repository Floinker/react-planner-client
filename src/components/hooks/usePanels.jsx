import { useQuery } from "react-query";

const usePanels = (board_id) => {

    return useQuery("panels", async({board_id = 1}) => {
        const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/get_panels?board_id=${board_id}`, {
            credentials: "include"
        });
        if (!res.ok) {
            throw new Error("something went wrong serer-side")
        }
        const data = await res.json()
        return data.rows;
    })

}

export default usePanels;