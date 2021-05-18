import { Component } from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin()
export default class App extends Component {
    constructor() {
    super()
      .state = {
            // initial state
            loading: true,
          navOpen: false,
          confirmationModalOpen: false,
          confirmationTextVisible: false,
          stepIndex: 0,
          appointmentDateSelected: false,
          appointmentMeridiem: 0,
          validEmail: false,
          validPhone: false,
          smallScreen: window.innerWidth < 768,
          confirmationSnackbarOpen: false
        }
        
  //method bindings
    }
   handleNavToggle = handleNavToggle.bind()
    handleNextStep = handleNextStep.bind(this)
    handleSetAppointmentDate = handleSetAppointmentDate.bind(this)
    handleSetAppointmentSlot = handleSetAppointmentSlot.bind(this)
    handleSetAppointmentMeridiem = handleSetAppointmentMeridiem.bind(this)
    handleSubmit = handleSubmit.bind(this)
   validateEmail = validateEmail.bind(this)
    validatePhone = validatePhone.bind(this)
    checkDisableDate = checkDisableDate.bind(this)
    renderAppointmentTimes = renderAppointmentTimes.bind(this)
    renderConfirmationString = renderConfirmationString.bind(this)
    renderAppointmentConfirmation = renderAppointmentConfirmation.bind(this)
    resize = resize.bind(this)
}
  //component methods?
  
  //lifecycle methods
componentWillMount() 
        //fetch data from cosmic, watch window width
    
  componentWillUnmount() 
        //remove window width event listener
    
  render() 
     //define variables
      return (
        <div>
          </div>
        )
    

state = {
    loading: true,
    navOpen: false,
    confirmationModalOpen: false,
    confirmationTextVisible: false,
    stepIndex: 0,
    appointmentDateSelected: false,
    appointmentMeridiem: 0,
    validEmail: false,
    validPhone: false,
    smallScreen: window.innerWidth < 768,
    confirmationSnackbarOpen: false
  }