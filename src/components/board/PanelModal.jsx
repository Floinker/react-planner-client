import React, { useRef, useState } from 'react'
import useSendPanel from '../hooks/useSendPanel'
import StyledPanelModal, { PanelModalForm, PanelModalHeader } from "../styled/PanelModal.styled"

const PanelModal = ({ setPanelModal, board }) => {
  const [panelName, setPanelName] = useState("")
  const backgroundRef = useRef();

  const { mutate: sendPanel } = useSendPanel();

  return (
    <StyledPanelModal ref={backgroundRef} onClick={(e) => {
      if (e.target === backgroundRef.current) setPanelModal(false)
    }}>
      <PanelModalForm
        onSubmit={(e) => {
          e.preventDefault();
          const t_panelName = panelName;

          if (panelName.length > 0) {
            //send board to api
            sendPanel({ panelName: t_panelName, board_id: board.id})
          }

          setPanelName("")
          setPanelModal(false)
        }}>
        <PanelModalHeader><h1>New Panel</h1></PanelModalHeader>
        <input
          type={"text"}
          name="panelName"
          value={panelName}
          onChange={(e) => setPanelName(e.target.value)}
          maxLength="50" />
        <button type="submit" >
          <p>Add</p>
        </button>
      </PanelModalForm>
    </StyledPanelModal>
  )
}

export default PanelModal;

