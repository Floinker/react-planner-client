import React, { useRef, useState } from 'react'
import useSendBoard from './hooks/useSendBoard'
import StyledBoardModal, { BoardModalForm, BoardModalHeader } from "./styled/BoardModal.styled"

const BoardModal = ({ setModal }) => {
  const [boardName, setBoardName] = useState("")
  const [description, setDescription] = useState("")
  const backgroundRef = useRef();

  const { mutate: sendBoard } = useSendBoard();

  return (
    <StyledBoardModal ref={backgroundRef} onClick={(e) => {
      if (e.target === backgroundRef.current) setModal(false)
    }}>
      <BoardModalForm
        onSubmit={(e) => {
          e.preventDefault();
          const t_boardName = boardName;
          const t_description = description;

          if (boardName.length > 0) {
            //send board to api
            sendBoard({ boardName: t_boardName, description: t_description })
          }

          setBoardName("")
          setDescription("")
          setModal(false)
        }}>
        <BoardModalHeader><h1>New Board</h1></BoardModalHeader>
        <input
          type={"text"}
          name="boardName"
          value={boardName}
          onChange={(e) => setBoardName(e.target.value)}
          maxLength="50" />
        <textarea
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          maxLength="255" />
        <sub>Characters Left: {255 - description.length}</sub>
        <button type="submit" >
          <p>Create</p>
        </button>
      </BoardModalForm>
    </StyledBoardModal>
  )
}

export default BoardModal;

