"use client"

import { TrendingUp } from "lucide-react"
import { CartesianGrid, LabelList, Line, LineChart, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A line chart with a label"

const chartData = [
  { month: "January", desktop: 4, mobile: 4 },
  { month: "February", desktop: 10, mobile: 6 },
  { month: "March", desktop: 5, mobile: 8 },
  { month: "April", desktop: 3, mobile: 1 },
  { month: "May", desktop: 6, mobile: 4 },
  { month: "June", desktop: 2, mobile: 5 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function Chcard() {
    return (
        <Card className="flex h-full">
        {/* CardFooter on the left */}
        <div className="flex-1 flex flex-col p-4 justify-center">
          <h4 className="flex font-medium text-gray-800">
            Trending up by 5.2% this month
          </h4>
          <p className="text-sm text-gray-600">
            Showing total visitors for the last 6 months
          </p>
          
        </div>
      
        {/* CardContent on the right */}
        <CardContent className="flex-1 flex items-center">
          <ChartContainer config={chartConfig} className="w-full">
            <LineChart
              accessibilityLayer
              data={chartData}
              margin={{
                top: 30,
                left: 12,
                right: 12,
                bottom: 0, // Ensure consistent space around the chart
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="line" />}
              />
              <Line
                dataKey="desktop"
                type="natural"
                stroke="var(--color-desktop)"
                strokeWidth={2}
                dot={{
                  fill: "var(--color-desktop)",
                }}
                activeDot={{
                  r: 6,
                }}
              >
                <LabelList
                  position="top"
                  offset={12}
                  className="fill-foreground"
                  fontSize={12}
                />
              </Line>
            </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>
      

      

      
    )
  }
  
  
