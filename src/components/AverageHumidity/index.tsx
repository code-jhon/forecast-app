import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { AverageHumidityProps } from '../../utils/interfaces';
import '../../styles/AverageHumidityResponse.scss';

const AverageHumidity: React.FC<AverageHumidityProps> = ({ data }) => {
  const chartRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!data) return;

    // Extract average humidity values from each day's forecast
    const humidityData = data.forecast.forecastday.map((forecastDay) => forecastDay.day.avghumidity);

    // Create a new array with data and index pairs
    const chartData = humidityData.map((value, index) => ({ value, index }));

    // Set up chart dimensions
    const width = 200;
    const height = 200;
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

    // Define line generator
    const line = d3
      .line<{ value: number; index: number }>()
      .x((d) => xScale(d.index))
      .y((d) => yScale(d.value));

    // Draw line chart
    svg
      .append('path')
      .datum(chartData)
      .attr('class', 'line')
      .attr('d', line);

    // Add axes
    svg
      .append('g')
      .attr('transform', `translate(0,${innerHeight})`)
      .call(d3.axisBottom(xScale));

    svg.append('g').call(d3.axisLeft(yScale));
  }, [data]);

  return <svg ref={chartRef} className="average-humidity-chart"></svg>;
};

export default AverageHumidity;
