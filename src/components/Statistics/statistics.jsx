import css from "./statistics.module.css";

export const Statistics = ({ title, stats }) => {
  
  return (
    <section className={css.statistics}>
     {title ? <h2 className={css.title}>{title}</h2> : " "}

      <ul className={css.stat_list}>
        
        {stats.map(stat=> {
          return (<li className={css.item} key={stat.id}>
              <span className={css.label}>{stat.label}</span>
              <span className={css.percentage}>{stat.percentage}%</span>
            </li>)
          })}
      
  </ul>
    </section>
  )
}


