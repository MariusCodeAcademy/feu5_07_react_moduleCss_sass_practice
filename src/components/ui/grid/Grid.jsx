import css from './grid.module.css';

function Grid(props) {
  const inlineStyleObj = {
    // color: 'tomato',
    gridTemplateColumns: `repeat(${props.cols}, 1fr)`,
  };

  const Element = props.ul ? 'ul' : 'div';

  // if (props.ul) {
  //   return (
  //     <ul style={inlineStyleObj} className={css.grid}>
  //       {props.children}
  //     </ul>
  //   );
  // }
  return (
    <Element style={inlineStyleObj} className={css.grid}>
      {props.children}
    </Element>
  );
}
export default Grid;
