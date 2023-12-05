import { useState } from "react";
import { Option } from "../common/Option";
import { QuestionPoll } from "./QuestionPoll";

export const QuestionDetail = ({
    questionData,
    questionText,
    authorData,
    handleAnswer,
    authedUserId,
}) => {
    const optOne = questionData.optionOne;
    const optTwo = questionData.optionTwo;
    const optionOneSelected = optOne?.votes?.includes(authedUserId);
    const optionTwoSelected = optTwo?.votes?.includes(authedUserId);
    const totalVotes = optOne?.votes?.length + optTwo?.votes?.length;
    const disabled = optionOneSelected || optionTwoSelected;
    const [choosen, setChoosen] = useState("");

    const [isSelecting, setIsSelecting] = useState(false);

    const onSelect = (option) => {
        setIsSelecting(() => true);
        setChoosen(() => option);
        handleAnswer(option);
    };

    return (
        <div className="question-detail">
            <h4>Poll by {questionData.author}</h4>
            <img
                src={authorData.avatarURL}
                alt="Author Avatar"
            />
            <h4>{questionText}</h4>
            <div className="options">
                <Option
                    key={"option-no-one"}
                    id={"option-no-one"}
                    value={optOne.text}
                    option={"optionOne"}
                    handleClick={onSelect}
                    selected={optionOneSelected || choosen === "optionOne"}
                    disabled={isSelecting || disabled}
                />
                <Option
                    key={"option-no-two"}
                    id={"option-no-two"}
                    value={optTwo.text}
                    option={"optionTwo"}
                    handleClick={onSelect}
                    selected={optionTwoSelected || choosen === "optionTwo"}
                    disabled={isSelecting || disabled}
                />
            </div>
            <QuestionPoll
                optionOne={optOne}
                optionTwo={optTwo}
                optionOneSelected={optionOneSelected}
                optionTwoSelected={optionTwoSelected}
                totalVotes={totalVotes}
            />
        </div>
    );
};
