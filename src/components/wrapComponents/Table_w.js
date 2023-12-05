import { connect } from 'react-redux';
import mapStateToProps from '../../store/mapStateToProps';
import mapDispatchToProps from '../../store/mapDispatchToProps';
import Table from "../Table";

const Table_W = connect(mapStateToProps("Table"), mapDispatchToProps("Table"))(Table);

export default Table_W;