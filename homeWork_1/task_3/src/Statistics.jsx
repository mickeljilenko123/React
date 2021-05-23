import React from 'react';

const Statistics = ({ stats }) => {
    return(
        <section className="statistics">
  <h2 className="title">Upload stats</h2>

  <ul className="stat-list">
    {stats.map(stat => (
        <li key={stat.id}>
            <span class="label">{stat.label}</span>
            <span class="percentage">{`${stat.percentage}%`}</span>
        </li>
    ))}
  </ul>
</section>
    )
}
export default Statistics;