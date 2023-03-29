import css from './CItem.module.css';

function CItem() {
  return (
    <div className={css.flex}>
      <div className={css.info}>
        <img src="" alt="img" />
        <p className={css.dataRow}>
          icon <span>date</span>
        </p>
      </div>
      <div className="about">
        <h3>title</h3>
        <p>speaker</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          commodi illum ipsa, explicabo distinctio veniam.
        </p>
      </div>
    </div>
  );
}

export default CItem;
