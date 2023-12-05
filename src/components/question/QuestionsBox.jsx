import { Question } from "./Question";

export const QuestionsBox = ({ title, questions }) => {
    return (
        
            <div className="questions-box">
                <h3>{title}</h3>
                <div className="questions">
                    {Array.isArray(questions) &&
                        questions.map((question, index) => {
                            return (
                                <Question
                                    key={index}
                                    questionId={question.id}
                                    createdTime={question.timestamp}
                                    createdUser={question.author}
                                />
                            );
                        })}
                </div>
            </div>
        
    );
};
