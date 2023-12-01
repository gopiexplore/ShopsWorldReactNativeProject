import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native';

const VendorRegistration = ({navgation}) => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };
const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };
  const handleRegister = () => {
    // Handle form submission logic here
    console.warn('Form submitted!');
  };
 
  const steps = [
    <Step1 key={1} onNext={handleNext} />,
    <Step2 key={2} onNext={handleNext} onBack={handleBack} />,
    <Step3 key={3} onNext={handleNext} onBack={handleBack} />,
    <Step4 key={4} onRegister={handleRegister} onBack={handleBack} />, // Note: Call handleNext on Submit for the final step
  ];

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Text style={styles.entryTitle}>Vendor Registration - Step {currentStep}</Text>
        {steps[currentStep - 1]}
      </View>
    </ScrollView>
  );
};


const Step1 = ({ onNext }) => {
  return (
    <View style={styles.formContainer}>
      <Text style={styles.registrationFormHeading}>Registration</Text>
      <Text>Vendor Name</Text>
      <TextInput style={styles.input} placeholder="Vendor Name" />
      <Text>Email</Text>
      <TextInput style={styles.input} placeholder="Email" />
      <Text>Password</Text>
      <TextInput style={styles.input} placeholder="Password" />
      <Text>User Name</Text>
      <TextInput style={styles.input} placeholder="User Name" />
      <TouchableOpacity style={[styles.nextButton, { marginTop: 10 }]} onPress={onNext}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};
const Step2 = ({onBack, onNext }) => {
  return (
    <View style={styles.formContainer}>
      <Text style={styles.registrationFormHeading}>Vendor Registration</Text>
      <Text>Store Name</Text>
      <TextInput style={styles.input} placeholder="Store Name " />
      <Text>Mobile No</Text>
      <TextInput style={styles.input} placeholder="Mobile No" />
       <Text>Address</Text>
      <TextInput style={styles.input} placeholder="Address" />
       <Text>Pincode</Text>
      <TextInput style={styles.input} placeholder="Pincode" />
       <Text>State</Text>
      <TextInput style={styles.input} placeholder="State" />
       <Text>City</Text>
      <TextInput style={styles.input} placeholder="City" />
       <Text>Street</Text>
      <TextInput style={styles.input} placeholder="Street" />
      <View style={styles.buttonContainer}>
  <TouchableOpacity style={styles.previousButton} onPress={onBack}>
    <Text style={styles.buttonText}>Previous</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.nextButton} onPress={onNext}>
    <Text style={styles.buttonText}>Next</Text>
  </TouchableOpacity>
</View>

    </View>
   
  );
};
const Step3 = ({ onBack,onNext }) => {
  return (
    
    <View style={styles.formContainer}>
      <Text style={styles.registrationFormHeading}>Vendor Registration</Text>
      <Text>Store </Text>
      <TextInput style={styles.input} placeholder="Store Logo" />
      <Text>Store Banner</Text>
      <TextInput style={styles.input} placeholder="Store Banner" />
      <Text>Store Description</Text>
      <TextInput style={styles.input} placeholder="Store Description" />
     <View style={styles.buttonContainer}>
  <TouchableOpacity style={styles.previousButton} onPress={onBack}>
    <Text style={styles.buttonText}>Previous</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.nextButton} onPress={onNext}>
    <Text style={styles.buttonText}>Next</Text>
  </TouchableOpacity>
  
</View>
    </View>
   
  );
};
const Step4 = ({ onBack,onRegister }) => {
  return (
    
    <View style={styles.formContainer}>
      <Text style={styles.registrationFormHeading}>Vendor Registration</Text>
      <Text>Payment Method</Text>
      <Text>Bank Details</Text>
       <Text>A/C Name</Text>
      <TextInput style={styles.input} placeholder="A/C Name" />
      <Text>A/C Number</Text>
      <TextInput style={styles.input} placeholder="A/C Number" />
      <Text>Bank Name</Text>
      <TextInput style={styles.input} placeholder="Bank Name" />
      <Text>IFSC Code</Text>
      <TextInput style={styles.input} placeholder="IFSC code" />
      <View style={styles.buttonContainer}>
  <TouchableOpacity style={styles.previousButton} onPress={onBack}>
    <Text style={styles.buttonText}>Previous</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.nextButton} onPress={onRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
</View>
    </View>
    
  );
};

const styles = StyleSheet.create({
  entryTitle:{fontSize:24,
  fontWeight:'bold',
  padding:10},
  registrationFormHeading:{
    fontSize:18,
    fontWeight:'bold'
  },
  formContainer:{
    margin:10,
    backgroundColor:'white',
    padding:10,
    borderWidth:1,
    borderRadius:8,
  },
  input:{
    borderWidth:1,
    padding:5,
    borderRadius:8,
  },
  buttonText:{
    color:'white'
  },
   buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },

  previousButton: {
    backgroundColor: '#2A3344',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  nextButton: {
    backgroundColor: '#2A3344',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'flex-end',
  },
});

export default VendorRegistration;
