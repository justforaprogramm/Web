const DUMMY_DATA = [
  {id: 'd1', value: 10, region: 'USA'},
  {id: 'd2', value: 11, region: 'India'},
  {id: 'd3', value: 12, region: 'China'},
  {id: 'd4', value: 6, region: 'Germany'},
];

const container = d3.select('div')
  .classed('container', true);

const bars = container
  .select('.container')
  .data(DUMMY_DATA)
  .enter()
  .append('rect')
  .classed('bar', true)
  .attr('width', 50)
  .attr('height', data => (data.value * 15));


//d3.select('div')
//  .select('p')
//  .data(DUMMY_DATA)
//  .enter()
//  .append('p')
//  .text(dta => dta.region);