import css from './CItem.module.css';
// surasyti visas reiksmes is gautu props
function CItem({ item }) {
  const { title, room, speaker, img, date } = item;
  return (
    <div className={css.flex}>
      <div className={css.info}>
        <img className={css.img} src={img} height="60" alt="img" />
        <p className={css.dataRow}>
          icon <span>{date}</span>
        </p>
        <p className={css.dataRow}>
          icon <span>{room}</span>
        </p>
      </div>
      <div className="about">
        <h3>{title}</h3>
        <p>by {speaker}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          commodi illum ipsa, explicabo distinctio veniam.
        </p>
      </div>
    </div>
  );
}

export default CItem;
