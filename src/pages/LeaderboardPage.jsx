import { useEffect } from "react";
import { LeaderBoardRow } from "../components/leaderboard/LeaderBoardRow";
import { updateLeaderboard } from "../store/pollsDataAsyncActions";

export const LeaderboardPage = ({ dispatch, pollsData }) => {
    const leaderboardData = pollsData?.leaderboardData;
    useEffect(() => {
        if (pollsData?.userData?.id) {
            dispatch(updateLeaderboard());
        }
    }, [dispatch, pollsData?.userData?.id]);
    return (
        <>
            <div className="user-row title">
                <div
                    className="user-info"
                    style={{ marginLeft: 40 }}
                >
                    <strong>Users</strong>
                </div>
                <div>
                    <strong>Voted</strong>
                </div>
                <div>
                    <strong>Created</strong>
                </div>
            </div>
            {Array.isArray(leaderboardData) &&
                leaderboardData.map((user, index) => {
                    return (
                        <LeaderBoardRow
                            userData={user}
                            key={index}
                        />
                    );
                })}
        </>
    );
};
