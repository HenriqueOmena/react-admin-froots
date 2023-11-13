import React, { useEffect, useState } from "react";
import { useDataProvider } from "react-admin";
import { AlbumsPerUserChart } from "../components/AlbumsPerUserChart";
import { Album, AlbumCount } from "../interfaces";

export const Dashboard: React.FC = () => {
  const dataProvider = useDataProvider();
  const [chartData, setChartData] = useState<AlbumCount[]>([]);

  useEffect(() => {
    dataProvider
      .getList<Album>("albums", {
        pagination: { page: 1, perPage: 1000 },
        sort: { field: "id", order: "ASC" },
        filter: {},
      })
      .then(({ data }) => {
        const albumCountsPerUser = data.reduce(
          (acc: Record<number, number>, album: Album) => {
            acc[album.userId] = (acc[album.userId] || 0) + 1;
            return acc;
          },
          {}
        );

        const processedChartData: AlbumCount[] = Object.entries(
          albumCountsPerUser
        ).map(([userId, count]) => ({
          userId: parseInt(userId, 10),
          albumCount: count,
        }));

        setChartData(processedChartData);
      })
      .catch((error) => {
        console.error("Error loading album data for chart:", error);
      });
  }, [dataProvider]);

  return (
    <div>
      <AlbumsPerUserChart data={chartData} />
    </div>
  );
};
