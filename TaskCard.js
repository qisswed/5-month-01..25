import styles from './TaskCard.module.css';
import { useDispatch } from "react-redux";
import { DeleteTaskAction, EditTaskAction, ToggleTaskAction } from '../redux/actions/actions';
import { useState } from "react";

const TaskCard = ({ id, title, description, completed }) => {
    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(title);
    const [newDescription, setNewDescription] = useState(description);

    const handleDelete = () => {
        dispatch(DeleteTaskAction(id));
    };

    const handleEdit = () => {
        dispatch(EditTaskAction(id, newTitle, newDescription));
        setIsEditing(false);
    };

    const handleToggle = () => {
        dispatch(ToggleTaskAction(id));
    };

    return (
        <div className={styles.card}>
            {isEditing ? (
                <>
                    <input
                        type="text"
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                    />
                    <input
                        type="text"
                        value={newDescription}
                        onChange={(e) => setNewDescription(e.target.value)}
                    />
                    <button onClick={handleEdit}>Save</button>
                </>
            ) : (
                <>
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <div className={styles.buttons}>
                        <input
                            type="checkbox"
                            checked={completed}
                            onChange={handleToggle}
                        />
                        <button onClick={() => setIsEditing(true)}>Edit</button>
                        <button onClick={handleDelete}>Delete</button>
                    </div>
                </>
            )}
        </div>
    );
};

export default TaskCard;
