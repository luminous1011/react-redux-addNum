import { connect } from 'react-redux'
const A = (props) => {
    const click=()=>{
        props.send()
    }
    return (
        <button onClick={click}>+</button>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        send: () => {
            dispatch({
                type: 'send',
            })

        }
    }
}
export default connect(null, mapDispatchToProps)(A)