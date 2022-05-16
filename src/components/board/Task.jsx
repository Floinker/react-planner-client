import React, { Fragment, useState, useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import TaskModal from "./TaskModal";
import ITEM_TYPE from "../../data/types";
import StyledTask from "../styled/Task.styled"
const Task = ({ task, index, moveItem, status }) => {
    const ref = useRef(null);

    const [, drop] = useDrop({
        accept: ITEM_TYPE,
        hover(item, monitor) {
            if (!ref.current) {
                return
            }
            const dragIndex = item.index;
            const hoverIndex = index;

            if (dragIndex === hoverIndex) {
                return
            }

            const hoveredRect = ref.current.getBoundingClientRect();
            const hoverMiddleY = (hoveredRect.bottom - hoveredRect.top) / 2;
            const mousePosition = monitor.getClientOffset();
            const hoverClientY = mousePosition.y - hoveredRect.top;

            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }

            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }
            moveItem(dragIndex, hoverIndex);
            item.index = hoverIndex;
        },
    });

    const [{ isDragging }, drag] = useDrag({
        type: ITEM_TYPE,
        task: { type: ITEM_TYPE, ...task, index },
        collect: monitor => ({
            isDragging: monitor.isDragging()
        })
    });

    const [show, setShow] = useState(false);

    const onOpen = () => {
        setShow(true);
    }

    const onClose = () => setShow(false);

    drag(drop(ref));

    return (
        <Fragment>
            <StyledTask
                ref={ref}
                style={{ opacity: isDragging ? 0 : 1 }}
                className={"item"}
                onClick={onOpen}
            >
                <p className={"item-title"}>{task.task_name}</p>
                <p className={"item-status"}>{task.status}</p>
            </StyledTask>
        </Fragment>
    );
};

export default Task;