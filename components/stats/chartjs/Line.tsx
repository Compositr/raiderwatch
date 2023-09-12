"use client"

import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip,
  plugins,
} from "chart.js"
import { Line } from "react-chartjs-2"
import { TypedChartComponent } from "react-chartjs-2/dist/types"

ChartJS.register(
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  plugins
)

export default function LineChart({
  data, title
}: LineChartProps ) {
  return (
    <Line
      data={data}
      options={{
        responsive: true,

        plugins: {
          title: {
            text: title,
            display: true,
          },
        },
      }}
    />
  )
}

export interface LineChartProps {
  data: Parameters<TypedChartComponent<"line">>[0]["data"],
  title: string
}
