import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet,ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Login from './Login';
//we are getting form error dinamically frome here 
const ValidationError = ({ error }) => (
  <Text style={styles.error}>
    {error}
  </Text>
);


//in the starting there is nothing we can communicate from here to back end all fields 
const MyAccount = () => {
  const navigation = useNavigation(); 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    validateForm();
  }, [name, email, password, phoneNumber]);

  const validateForm = () => {
    let errors = {};

    if (!name) {
      errors.name = 'Name is required.';
    }

    if (!email) {
      errors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid.';
    }

    if (!password) {
      errors.password = 'Password is required.';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters.';
    }

    if (!phoneNumber) {
      errors.phoneNumber = 'Phone number is required.';
    } else if (!/^\d{10}$/.test(phoneNumber)) {
      errors.phoneNumber = 'Phone number is invalid.';
    }

    setErrors(errors);
    setIsFormValid(Object.keys(errors).length === 0);
  };

  const handleSubmit = () => {
    validateForm();
    if (isFormValid) {
      console.log('Form submitted successfully!');
    } else {
      console.log('Form has errors. Please correct them.');
    }
  };

  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.userHeading}>User Registration</Text>
      <View style={{backgroundColor:'white'}}>
      <Text style={styles.label}>Full Name {errors.name && <ValidationError error={errors.name} />}</Text>
      <TextInput
        style={styles.input}
        placeholder="FirstName + LastName"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>Email id {errors.email && <ValidationError error={errors.email} />}</Text>
      <TextInput
        style={styles.input}
        placeholder="abc@gmail.com"
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.label}>Password {errors.password && <ValidationError error={errors.password} />}</Text>
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Text style={styles.label}>Phone Number  {errors.phoneNumber && <ValidationError error={errors.phoneNumber} />}
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="numeric"
      />
       <View>
          <Text>Already a Member</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>Login</Text>
          </TouchableOpacity>
        </View>

      <TouchableOpacity
        style={[styles.button, { opacity: isFormValid ? 1 : 0.5 }]}
        disabled={!isFormValid}
        onPress={handleSubmit}
      >
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
    borderRadius: 8,
    fontSize: 16,
  },
  button: {
    backgroundColor: 'green',
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 12,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  error: {
    color: 'red',
    fontSize: 14,
    marginBottom: 4,
  },
  userHeading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  label: {
    fontSize: 16
  }
});

export default MyAccount;
