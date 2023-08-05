import './table.css';

const Telement = ({ clgInfo }) => {
  return (
    <div className="tableHeader">
      <div className='ti'>{clgInfo.sino}</div>
      <div className='ti'>{clgInfo.name}</div>
      <div className='ti'>{clgInfo.branch}</div>
      <div className="ti">{clgInfo.cutoff}</div>
    </div>
  );
}

export default Telement;
