import React, { Component } from 'react'
import NavBar from './NavBar'
import PageTracker from './PageTracker'
import { Container } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'


export class FormContactDetails extends Component {

    render() {
        const { values, home, nextPage, prevPage, handleChange, logout} = this.props
        
        return (
            <React.Fragment>
            <NavBar navTitle="Contact Information" logout={logout} home={home}/>
                <Container className="main-container" maxWidth="sm">
                    <Grid container position={'row'} spacing={2} className="textfield-container">
                        <Grid item xs={12}>
                            <PageTracker page={values.page}/>
                            <form id="form-contact-info" onSubmit={(e)=> {e.preventDefault(); nextPage()}}>
                                <Grid container position={'row'} spacing={2} justify="space-between">
                                    <Grid item xs={12}>
                                        <br/><Divider variant="middle" />
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <TextField
                                        id="outlined-basic"
                                        variant="outlined"
                                        label="Mobile Number"
                                        placeholder="e.g. 09987654321"
                                        className="textfield-fullwidth"
                                        type="number"
                                        defaultValue={values.mobileNumber}
                                        onChange={handleChange('mobileNumber')}
                                        required
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={8}>
                                        <TextField
                                        id="outlined-basic"
                                        variant="outlined"
                                        type="email"
                                        label="Email Address"
                                        placeholder="e.g. juandelacruz@gmail.com"
                                        className="textfield-fullwidth"
                                        defaultValue={values.emailAddress}
                                        onChange={handleChange('emailAddress')}
                                        required
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={8}>
                                        <TextField
                                        id="outlined-basic"
                                        variant="outlined"
                                        label="Alternate Mobile No. (Optional)"
                                        placeholder="e.g. 09987654321"
                                        className="textfield-fullwidth"
                                        type="number"
                                        defaultValue={values.alternateMobile}
                                        onChange={handleChange('alternateMobile')}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Divider variant="middle" />
                                        <h4>Person to contact in case of emergency</h4>
                                    </Grid>
                                    <Grid item xs={12} sm={12}>
                                        <TextField
                                        id="outlined-basic"
                                        variant="outlined"
                                        label="Full Name"
                                        placeholder="e.g. Juan Dela Cruz"
                                        className="textfield-fullwidth"
                                        defaultValue={values.emergencyFullName}
                                        onChange={handleChange('emergencyFullName')}
                                        required
                                        />
                                    </Grid>
                                    <Grid item xs={6} sm={6}>
                                        <TextField
                                        id="outlined-basic"
                                        variant="outlined"
                                        label="Mobile Number"
                                        type="number"
                                        placeholder="e.g. 09987654321"
                                        className="textfield-fullwidth"
                                        defaultValue={values.emergencyMobile}
                                        onChange={handleChange('emergencyMobile')}
                                        required
                                        />
                                    </Grid>
                                    <Grid item xs={6} sm={6}>
                                        <TextField
                                        id="outlined-basic"
                                        variant="outlined"
                                        label="Relationship"
                                        placeholder="e.g. Sister"
                                        className="textfield-fullwidth"
                                        defaultValue={values.relationship}
                                        onChange={handleChange('relationship')}
                                        required
                                        />
                                    </Grid>
                                    <Grid item xs={6} sm={6}container justify="flex-start">
                                        <Button variant="contained" onClick={prevPage}>
                                            Back
                                        </Button>
                                    </Grid>
                                    <Grid item xs={6} sm={6}container justify="flex-end">
                                        <Button variant="contained" color="primary" type="submit" form="form-contact-info">
                                            Continue
                                        </Button>
                                    </Grid>
                                </Grid>
                            </form>
                        </Grid>
                    </Grid>
                </Container>
            </React.Fragment>
        )
    }
}

export default FormContactDetails
