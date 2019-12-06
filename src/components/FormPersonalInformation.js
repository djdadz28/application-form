import React, { Component } from 'react'
import AppBar from '@material-ui/core'
import { Container } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

export class FormPersonalInformation extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <React.Fragment>
                <Container>
                    <Grid Container spacing={1}>
                        <Grid item xs={12}>
                            <TextField id="standard-basic" label="First Name" placeholder="Enter First Name" />
                        </Grid>
                        <Grid item xs={12}>
                            <br />
                            <Button variant="contained" color="primary" onClick={this.props.nextPage}>
                                Continue
                            </Button>
                        </Grid>
                    </Grid>
                </Container>
            </React.Fragment>
        )
    }
}

export default FormPersonalInformation
