import React, { useEffect, useRef } from 'react';
import { DayTemperatureChartProps } from '../../utils/interfaces';

import * as d3 from 'd3';
import '../../styles/AverageHumidityResponse.scss';

const DayTemperatureChart: React.FC<DayTemperatureChartProps> = ({ forecastDay }) => {
  const chartRef = useRef<SVGSVGElement | null>(null);
  //create a function to clear the information rendered in the chart
  const clearChart = () => {
    if (!chartRef.current) return;
    d3.select(chartRef.current).selectAll('*').remove();
  };

  const drawChart = () => {
    if (!forecastDay) return;

    clearChart();
    // Extract average humidity values from each day's forecast
    const humidityData = forecastDay[0].hour.map((hour) => hour.humidity);

    // Extract temp_c values from each day's forecast
    const tempData = forecastDay[0].hour.map((hour) => hour.temp_c);
    const windKphData = forecastDay[0].hour.map((hour) => hour.wind_kph);

    // Create a new array with data and index pairs
    const chartData = humidityData.map((value, index) => ({ value, index }));
    const chartMaxTempData = tempData.map((value, index) => ({ value, index }));
    const chartWindKphData = windKphData.map((value, index) => ({ value, index }));

    // Set up chart dimensions
    const width = 260;
    const height = 210;
    const margin = { top: 20, right: 20, bottom: 30, left: 50 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    // Create SVG element
    const svg = d3
      .select(chartRef.current)
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    // Define scales
    const xScale = d3
      .scaleLinear()
      .domain([0, chartData.length - 1])
      .range([0, innerWidth]);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(chartData, (d) => d.value) || 0])
      .range([innerHeight, 0]);

    const yScaleMaxTemp = d3
      .scaleLinear()
      .domain([0, d3.max(chartData, (d) => d.value) || 0])
      .range([innerHeight, 0]);

    const yScaleWindKph = d3
      .scaleLinear()
      .domain([0, d3.max(chartData, (d) => d.value) || 0])
      .range([innerHeight, 0]);

    // Define line generators
    const line = d3
      .line<{ value: number; index: number }>()
      .x((d) => xScale(d.index))
      .y((d) => yScale(d.value));

    const lineMaxTemp = d3
      .line<{ value: number; index: number }>()
      .x((d) => xScale(d.index))
      .y((d) => yScaleMaxTemp(d.value));
    
    const lineWindKph = d3
      .line<{ value: number; index: number }>()
      .x((d) => xScale(d.index))
      .y((d) => yScaleWindKph(d.value));

    // Draw line charts
    svg
      .append('path')
      .datum(chartData)
      .attr('class', 'line') // CSS class for the humidity line
      .attr('d', line);

    svg
      .append('path')
      .datum(chartMaxTempData)
      .attr('class', 'line-max-temp') // CSS class for the max temperature line
      .attr('d', lineMaxTemp);

    svg
      .append('path')
      .datum(chartWindKphData)
      .attr('class', 'line-wind-kph') // CSS class for the wind kph line
      .attr('d', lineWindKph);

    // Add axes
    svg
      .append('g')
      .attr('transform', `translate(0,${innerHeight})`)
      .call(d3.axisBottom(xScale));

    svg
      .append('g')
      .call(d3.axisLeft(yScale));

    svg.append("text")
      .attr("text-anchor", "end")
      .attr("fill", "white")
      .attr("viewBox", [20, -20, width, height])
      .attr("x", width - 100)
      .attr("y", height - 20)
      .text("Hours of the day");
  };

  useEffect(() => {
    drawChart();    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [forecastDay]);

  return <svg ref={chartRef} className="average-humidity-chart"></svg>;
};

export default DayTemperatureChart;
