import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { AlbumCount } from "../../interfaces";

interface AlbumsPerUserChartProps {
  data: AlbumCount[];
}

export const AlbumsPerUserChart: React.FC<AlbumsPerUserChartProps> = ({
  data,
}) => (
  <ResponsiveContainer width="100%" height={300}>
    <BarChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="userId" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="albumCount" fill="#8884d8" name="Albums per User" />
    </BarChart>
  </ResponsiveContainer>
);
