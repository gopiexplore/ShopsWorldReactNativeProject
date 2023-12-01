import { StyleSheet, Text, View,ScrollView,TextInput,TouchableOpacity } from 'react-native'
import React from 'react'

const Contactus = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.mainArea}>
        <View style={styles.primaryContentArea}>
          <View style={styles.primaryContentWrap}>
            <View style={styles.pageHead}>
              <Text style={styles.entryTitle}>Contact Us</Text>
            </View>
            <View style={styles.thunkContentWrap}>
              {/* Your Contact Form Goes Here */}
              <View style={styles.contactForm}>
                <Text style={styles.formHeading}>Contact Us</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Name"
                />
                <TextInput
                  style={styles.input}
                  placeholder="Email"
                  keyboardType="email-address"
                />
                <TextInput
                  style={styles.input}
                  placeholder="Contact Number"
                  keyboardType="numeric"
                />
                <TextInput
                  style={[styles.input, styles.textarea]}
                  placeholder="Message"
                  multiline
                />
                <TouchableOpacity style={styles.submitButton}>
                  <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
              </View>
              {/* End of Contact Form */}
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default Contactus

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  mainArea: {
    // Add styles for main-area
  },
  primaryContentArea: {
    // Add styles for primary-content-area
  },
  primaryContentWrap: {
    // Add styles for primary-content-wrap
  },
  pageHead: {
    // Add styles for page-head
  },
  entryTitle: {
    // Add styles for entry-title
    fontSize: 24,
    fontWeight: 'bold',
  },
  
 
  homeLink: {
    // Add styles for home-link
    textDecorationLine: 'underline',
  },
  thunkContentWrap: {
    // Add styles for thunk-content-wrap
    backgroundColor:'white'
  },
  contactForm: {
    // Add styles for contact-form
  },
  formHeading: {
    // Add styles for form-heading
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    // Add styles for input fields
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 10,
  },
  textarea: {
    // Add styles for textarea
    height: 80,
    textAlignVertical: 'top',
  },
  submitButton: {
    // Add styles for submit-button
    backgroundColor: '#2A3344',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  buttonText: {
    // Add styles for button-text
    color: 'white',
    fontWeight: 'bold',
  },
})