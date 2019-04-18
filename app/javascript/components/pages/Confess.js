import React from "react"
import PropTypes from "prop-types"

class Confess extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            form: {
                confess: ""
            }
        }
    }

    render() {
        return (
            <form>
                <Label>Confession Box</Label>
                <input type="text" name="confess" />

                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default Confess
