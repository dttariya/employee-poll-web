import { Button } from "./Button";

export const Option = ({ id, value, handleClick, option, selected, disabled }) => {
    const onClick = () => {
        handleClick(option);
    };

    return (
        <div className="option">
            <div>
                <p>{value}</p>
            </div>
            <Button
                id={id}
                text={selected ? "Your Choice" : "Click"}
                disabled={disabled}
                onClick={onClick}
            />
        </div>
    );
};
