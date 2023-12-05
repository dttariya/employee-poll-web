import { useEffect } from "react";
import { QuestionsBox } from "../components/question/QuestionsBox";
import { fetchQuestions } from "../store/pollsDataAsyncActions";

export const HomePage = ({ pollsData, dispatch }) => {
    const questionsData = pollsData?.questionsData;
    const answeredQuestionsId = pollsData?.userData?.answers;
    const answeredQuestions =
        answeredQuestionsId &&
        Array.isArray(questionsData) &&
        questionsData.filter((question) => answeredQuestionsId[question.id]);
    const unansweredQuestions =
        answeredQuestionsId &&
        Array.isArray(questionsData) &&
        questionsData.filter((question) => !answeredQuestionsId[question.id]);

    useEffect(() => {
        if (
            pollsData?.userData?.id &&
            (!questionsData || Object.keys(questionsData).length === 0)
        ) {
            dispatch(fetchQuestions());
        }
    }, [dispatch, pollsData?.userData?.id, questionsData]);

    return (
        <div className="home">
            <div className="wrapper">
                <table>
                <tr>
                        <QuestionsBox
                                questions={unansweredQuestions}
                                title={"New Questions"}
                            />
                </tr>   
                <tr>   
                   
                            <QuestionsBox
                                questions={answeredQuestions}
                                title={"Completed"}
                            />
                </tr>
                   
                    </table>  
                </div>
        </div>
    );
};
