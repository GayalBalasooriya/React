import React from 'react';
//import { connect } from 'react-redux'
//import { createStream } from '../../actions'
import { Field, reduxForm } from 'redux-form';

class StreamForm extends React.Component {

    renderError({error, touched}) {
        if(touched && error) {
            return(
                <div className="ui error message">
                    <div className="header">{ error }</div>
                </div>
            )
        }
    }

    renderInput = (formProps) => {
        const className = `field ${formProps.meta.error && formProps.meta.touched ? 'error' : ''}`
        return (
            <div className={className}>
                <label>{ formProps.label }</label>
                <input { ...formProps.input } autoComplete="off" />
                {/* <div>{ formProps.meta.error }</div> */}
                { this.renderError(formProps.meta) }
            </div>          
        )
    }

    // onSubmit = (formValues) => {
    //     //console.log(formValues)
    //     this.props.createStream(formValues)
    // }

    onSubmit = (formValues) => {
        //console.log(formValues)
        this.props.onSubmit(formValues)
    }

    render() {
        return <form 
            className="ui form error" 
            onSubmit={this.props.handleSubmit(this.onSubmit)} >
            <Field 
                name="title" 
                component={this.renderInput} 
                label="Enter Title" 
            />
            <Field 
                name="description" 
                component={this.renderInput} 
                label="Enter Description" 
            />
            <button className="ui button primary">Submit</button>
        </form>
    }
}

const validate = (formValues) => {
    const errors = {}

    if(!formValues.title) {
        errors.title = 'You must enter a title'
    }

    if(!formValues.description) {
        errors.description = "You must enter a description"
    }

    return errors
}
    
// export default reduxForm({
//     form: 'streamCreate',
//     validate: validate
// })(StreamCreate);

// const formWrapped = reduxForm({
//     form: 'streamCreate',
//     validate: validate
// })(StreamForm);

export default reduxForm({
    form: 'streamForm',
    validate: validate
})(StreamForm);

//export default connect(null, { createStream })(formWrapped)