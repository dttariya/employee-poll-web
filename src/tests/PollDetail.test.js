import { PollDetails } from "../components/question/PollDetails";
import { render, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";


describe("PollDetails", () => {
    const mockQuestionData = {
        id: 'xj352vofupe1dqz9emx13r',
        author: 'mtsamis',
        timestamp: 1493579767190,
        optionOne: {
            votes: ['mtsamis', 'zoshikanlu'],
            text: 'deploy to production once every two weeks',
        },
        optionTwo: {
            votes: ['tylermcginnis'],
            text: 'deploy to production once every month'
        }
    }
    const mockAuthedUser = {
        id: 'sarahedo',
        password: 'password123',
        name: 'Sarah Edo',
        avatarURL: '/images/1.jpg',
        answers: {
            "8xf0y6ziyjabvozdd253nd": 'optionOne',
            "6ni6ok3ym7mf1p33lnez": 'optionOne',
            "am8ehyc8byjqgar0jgpub9": 'optionTwo',
            "loxhs1bqm25b708cmbf3g": 'optionTwo'
        },
        questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
    }
    it('will handle option one', () => {
        const handleAnswer = jest.fn()
        const component = render(
            <MemoryRouter>
                <PollDetails
                    questionData={mockQuestionData}
                    authorData={mockAuthedUser}
                    questionText="Would You Rather?"
                    handleAnswer={handleAnswer}
                    authedUserId={mockAuthedUser?.id}
                />
            </MemoryRouter>
        );
        const choseOption = component.getByTestId("option-no-one");
        fireEvent.click(choseOption);
        expect(handleAnswer).toHaveBeenCalledWith("optionOne");
    });

    it('will handle option two', () => {
        const handleAnswer = jest.fn()
        const component = render(
            <MemoryRouter>
                <PollDetails
                    questionData={mockQuestionData}
                    authorData={mockAuthedUser}
                    questionText="Would You Rather?"
                    handleAnswer={handleAnswer}
                    authedUserId={mockAuthedUser?.id}
                />
            </MemoryRouter>
        );
        const choseOption = component.getByTestId("option-no-two");
        fireEvent.click(choseOption);
        expect(handleAnswer).toHaveBeenCalledWith("optionTwo");
    });
});