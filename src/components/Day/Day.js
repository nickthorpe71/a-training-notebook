import React from 'react';
import './Day.css'

export default function Day(props) {
  if (props.fullDate == null) {
    return <div className="empty-state-day" />
  }

  const date = props.fullDate.getDate();
  let className = 'day';

  if (props.selected) {
    className = 'day day-selected'
  } else if (props.hovering) {
    className = 'day day-hovering'
  }

  return (
    <button
      className={className}
      onClick={props.onClick.bind(this, date)}
      onMouseEnter={props.onMouseEnter.bind(this, date)}
      onMouseLeave={props.onMouseLeave}

    >
      {date}
    </button>
  );
}