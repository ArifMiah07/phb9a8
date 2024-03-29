import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import PropTypes from 'prop-types';

const getPath = (x, y, width, height) => (
  `M${x},${y + height}
   C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
   C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width}, ${y + height}
   Z`
);

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const Chart = ({readBooksData}) => {

  return (
    <BarChart width={800} height={300} className='bg-[#13131308] ' data={readBooksData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey={`bookName`} className='text-[10px]' />
      <YAxis  />
      <Tooltip />
      <Bar dataKey={`totalPages`} fill="#8884d8" shape={<TriangleBar />} />
    </BarChart>
  );
};


Chart.propTypes = {
  readBooksData: PropTypes.array
}

export default Chart;
