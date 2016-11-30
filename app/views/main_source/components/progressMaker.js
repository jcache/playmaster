import React from 'react';

export default class ProgressMaker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const radius = this.props.radius - this.props.strokeWidth / 2;
    const width = this.props.radius * 2;
    const color = this.props.color;
    const bgcolor = this.props.bgcolor;
    const height = this.props.radius * 2;
    const viewBox = `0 0 ${width} ${height}`;
    const dashArray = radius * Math.PI * 2;
    const dashOffset = dashArray - dashArray * this.props.percentage / 100;

    return (
      <svg
        className="ProgressMaker"
        width={this.props.radius * 2}
        height={this.props.radius * 2}
        viewBox={viewBox}>
        <circle
          className="ProgressMaker-Bg"
          cx={this.props.radius}
          cy={this.props.radius}
          r={radius}
          style={{
              stroke: bgcolor
          }}
          strokeWidth={`${this.props.strokeWidth}px`} />
        <circle
          className="ProgressMaker-Fg"
          cx={this.props.radius}
          cy={this.props.radius}
          r={radius}
          strokeWidth={`${this.props.strokeWidth+1}px`}
          style={{
              stroke: color,
              strokeDasharray: dashArray,
              strokeDashoffset: dashOffset
          }} />
      </svg>
    );
  }
}

ProgressMaker.defaultProps = {
    radius: 50,
    percentage: 50,
    strokeWidth: 1
};
