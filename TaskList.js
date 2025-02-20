import { useSelector } from "react-redux";
import TaskCard from "./TaskCard";

const TaskList = () => {
    const { tasks } = useSelector(state => state.taskReducer);

    return (
        <div>
            {tasks.map(task =>
                <TaskCard
                    key={task.id}
                    id={task.id}
                    title={task.title}
                    description={task.description}
                    completed={task.completed}
                />
            )}
        </div>
    );
};

export default TaskList;
