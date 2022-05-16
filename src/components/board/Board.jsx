import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import StyledBoard, { BoardHeader, CreatePanelButton, CreateTaskButton, PanelContainer, PanelHeader, RemovePanelButton } from "../styled/Board.styled"
import { useState } from 'react';
import usePanels from '../hooks/usePanels';
import DropWrapper from './DropWrapper';
import { statuses } from '../../data/data';
import Col from './Col';
import useTasks from '../hooks/useTasks';
import Task from './Task';
import PanelModal from './PanelModal';
import useRemovePanel from '../hooks/useRemovePanel';
import TaskModal from '../styled/TaskModal.styled';

const Board = () => {
    const location = useLocation();
    const board = location.state.board;

    const [panelModalOpen, setPanelModal] = useState(false);
    const [taskModalOpen, setTaskModal] = useState(false);

    const {data: panels, status} = usePanels(board.id);
    const {data: tasks} = useTasks();

    const [items, setItems] = useState(tasks);

    const { mutate: removePanel } = useRemovePanel();

    const onDrop = (item, monitor, status) => {
        const mapping = statuses.find(si => si.status === status);

        setItems(prevState => {
            const newItems = prevState
                .filter(i => i.id !== item.id)
                .concat({ ...item, status, icon: mapping.icon });
            return [ ...newItems ];
        });
    };

    const moveItem = (dragIndex, hoverIndex) => {
        const item = items[dragIndex];
        setItems(prevState => {
            const newItems = prevState.filter((i, idx) => idx !== dragIndex);
            newItems.splice(hoverIndex, 0, item);
            return  [ ...newItems ];
        });
    };

    const addPanel = () => {
        console.log("add panel");
        setPanelModal(c => !c);
    };

    const deletePanel = (panelId) => {
        console.log("delete panel " + panelId);
        removePanel({ panelId: panelId})
    }

    const addTask = (panelId) => {
        console.log("add Task to panel " + panelId)
        setTaskModal(c => !c);
    }

    return (
        <>
            <BoardHeader>{board.board_name}</BoardHeader>
            <StyledBoard>
                {panels?.map(panel => {
                    return (
                        <PanelContainer key={panel.id} className={"col-wrapper"}>
                            <div style={{flexDirection: "row"}}>
                                <PanelHeader>{panel.panel_name.toUpperCase()}</PanelHeader>
                                <RemovePanelButton onClick={() => deletePanel(panel.id)}>-</RemovePanelButton>
                            </div>
                            
                            <DropWrapper onDrop={onDrop} status={panel.panel_name}>
                                <Col>
                                {tasks?.filter(t => t.panel_id === panel.id)
                                        .map((t, idx) => <Task key={t.id} task={t} index={idx} moveItem={moveItem} status={panel} />)
                                }
                                </Col>
                            </DropWrapper>
                            <CreateTaskButton onClick={() => addTask(panel.id)}>add Task</CreateTaskButton>
                            {taskModalOpen && <TaskModal setTaskModal={setTaskModal} panel={panel}/>}
                        </PanelContainer>
                    );
                })}
                <CreatePanelButton onClick={addPanel}>Add Panel</CreatePanelButton>
                {panelModalOpen && <PanelModal setPanelModal={setPanelModal} board={board}/>}
                
               
            </StyledBoard>
        </>
    )
}

export default Board