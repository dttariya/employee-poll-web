import { Link } from "react-router-dom";
import { Button } from "../common/Button";

export const Question = ({ questionId, createdUser, createdTime }) => {
    const convertedTime = new Date(createdTime);
    return (
        <td>
            <div className="question">
                <h4>{createdUser}</h4>
                <small>{convertedTime.toLocaleString()}</small>
                 <Link to={`questions/${questionId}`}>
                    <Button text={"Show"} />
                </Link>
            </div>
        </td>
    );
};
