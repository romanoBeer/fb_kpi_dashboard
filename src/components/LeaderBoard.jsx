import { useEffect, useState } from "react";
import mockData from "../data/mockLeaderboard.json";

function LeaderBoard() {
  const [previousData, setPreviousData] = useState([]);
  const [currentData, setCurrentData] = useState([]);
  const badgeState = "badge badge-success";

  // Helper: sort by engagement and assign rank
  const withRank = (arr) =>
    [...arr]
      .sort((a, b) => b.engagement - a.engagement)
      .map((item, index) => ({ ...item, rank: index + 1 }));

  useEffect(() => {
    const initial = withRank(mockData);
    setPreviousData(initial);
    setCurrentData(initial);
  }, [currentData, previousData]);

  return (
    <div className="p-2 bg-base-100 rounded-lg h-1/2">
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th className="text-center">Rank</th>
              <th className="text-center">Manager Name</th>
              <th className="text-center">Page Name</th>
              <th className="text-center">Engagement Rate</th>
              <th className="text-center">Followers</th>
              <th className="text-center">Growth</th>
              <th className="text-center">Reach</th>
              <th className="text-center">Avg. Reactions/Post</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((row, index) => (
              <tr key={index}>
                <td className="text-center">
                  {row.rank === 1 && (
                    <span className="badge badge-success">{row.rank}</span>
                  )}
                  {row.rank === 2 && (
                    <span className="badge badge-warning">{row.rank}</span>
                  )}
                  {row.rank === 3 && (
                    <span className="badge badge-error">{row.rank}</span>
                  )}
                  {row.rank > 3 && <span className="badge">{row.rank}</span>}
                </td>
                <td className="text-center">{row.manager}</td>
                <td className="text-center">{row.page}</td>
                <td className="text-center">{row.engagement}</td>
                <td className="text-center">{row.followers}</td>
                <td className="text-center">{row.growth}</td>
                <td className="text-center">{row.reach}</td>
                <td className="text-center">{row.reactions}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LeaderBoard;
