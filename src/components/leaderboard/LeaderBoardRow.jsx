import { UserDetails } from "./UserDetails";

export const LeaderBoardRow = ({ userData }) => {
    return (
        <div className="user-row">
            <UserDetails userData={userData} />
            <div>{userData.answers}</div>
            <div>{userData.created}</div>
        </div>
    );
};
