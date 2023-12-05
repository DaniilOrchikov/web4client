import { connect } from 'react-redux';
import Form from '../Form';
import mapStateToProps from '../../store/mapStateToProps';
import mapDispatchToProps from '../../store/mapDispatchToProps';

const Form_W = connect(mapStateToProps("Form"), mapDispatchToProps("Form"))(Form);

export default Form_W;