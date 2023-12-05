import { QuestionPollRow } from "./QuestionPollRow";

export const QuestionPoll = ({
    optionOne,
    optionOneSelected,
    optionTwo,
    optionTwoSelected,
    totalVotes,
}) => {
    return (
        <div className="question-statistic">
            <div className="question-detail-row title">
                <div className="chose-option">
                    <strong>Option</strong>
                </div>
                <div className="number">
                    <strong>Voted</strong>
                </div>
                <div className="number">
                    <strong>Percent</strong>
                </div>
            </div>
            <QuestionPollRow
                selected={optionOneSelected}
                optionText={optionOne.text}
                votesNumber={optionOne?.votes?.length}
                totalVotes={totalVotes}
            />
            <QuestionPollRow
                selected={optionTwoSelected}
                optionText={optionTwo.text}
                votesNumber={optionTwo?.votes?.length}
                totalVotes={totalVotes}
            />
        </div>
    );
};
