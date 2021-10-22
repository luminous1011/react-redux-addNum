import { connect } from 'react-redux'
const B = (props) => {
    return (
        <div>{props.count}</div>
    )
}
const mapStateToProps = (state) => {
    return state
}
export default connect(mapStateToProps)(B)