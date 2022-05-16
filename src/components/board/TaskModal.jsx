/*import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const TaskModal = ({ show, onClose, task }) => {
    return (
        <Modal
            isOpen={show}
            onRequestClose={onClose}
            className={"modal"}
            overlayClassName={"overlay"}
        >
            <div className={"close-btn-ctn"}>
                <h1 style={{ flex: "1 90%" }}>{task.name}</h1>
                <button className="close-btn" onClick={onClose}>X</button>
            </div>
            <div>
                <h2>Description</h2>
                <p>{task.desciption}</p>
                <h2>Status</h2>
                <p>{`${task.status}`}</p>
            </div>
        </Modal>
    );
};

export default TaskModal;*/
import React, { useRef, useState } from 'react'
import useSendTask from '../hooks/useSendTask'
import StyledTaskModal, { TaskModalForm, TaskModalHeader } from "../styled/TaskModal.styled"

const TaskModal = ({ setTaskModal, panel }) => {
  const [taskName, setTaskName] = useState("")
  const [description, setDescription] = useState("")
  const backgroundRef = useRef();

  const { mutate: sendTask } = useSendTask();

  return (
    <StyledTaskModal ref={backgroundRef} onClick={(e) => {
      if (e.target === backgroundRef.current) setTaskModal(false)
    }}>
      <TaskModalForm
        onSubmit={(e) => {
          e.preventDefault();
          const t_taskName = taskName;

          if (taskName.length > 0) {
            //send board to api
            sendTask({ taskName: t_taskName, panelId: panel.id})
          }

          setTaskName("")
          setDescription("")
          setTaskModal(false)
        }}>
        <TaskModalHeader><h1>New Task</h1></TaskModalHeader>
        <input
          type={"text"}
          name="taskName"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          maxLength="50" />
        <textarea
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          maxLength="255" />
        <sub>Characters Left: {255 - description.length}</sub>
        <button type="submit" >
          <p>Add</p>
        </button>
      </TaskModalForm>
    </StyledTaskModal>
  )
}

export default TaskModal;

