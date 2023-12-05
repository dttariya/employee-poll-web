import { Form } from "../common/Form";
import { Input } from "../common/Input";
import { updateUserData } from "../../store/pollsDataAsyncActions";

export const LogInForm = ({ formError, dispatch }) => {
    const handleSubmit = (formData) => {
        dispatch(updateUserData(formData));
    };

    return (
        <Form
            formLabel="Login"
            submitText="Submit"
            handleSubmit={handleSubmit}
            formError={formError}
            >
            <Input
                inputName="username"
                placeholder="Your Username"
                inputType="text"
                inputLabel="Username"
                required={true}
            />
            <Input
                inputName="password"
                placeholder="Your Password"
                inputType="password"
                inputLabel="Password"
                required={true}
            />
        </Form>
    );
};
