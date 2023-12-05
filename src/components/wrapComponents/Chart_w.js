import { connect } from 'react-redux';
import Chart from '../Chart';
import mapStateToProps from '../../store/mapStateToProps';
import mapDispatchToProps from '../../store/mapDispatchToProps';

const Chart_W = connect(mapStateToProps("Chart"), mapDispatchToProps("Chart"))(Chart);

export default Chart_W;