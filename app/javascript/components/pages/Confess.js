import React from "react"
import PropTypes from "prop-types"

class Confess extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            form: {
                name: ""
            }
        }
    }

    render() {
        return (
            <form>
                <label>Confession Box</label>
                <input type="text" name="name" />

                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default Confess
