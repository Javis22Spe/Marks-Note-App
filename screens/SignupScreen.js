import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  ImageBackground,
  SafeAreaView,
} from 'react-native';

export default function SignupScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  // Function to validate email format
  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleSignUp = () => {
    if (!validateEmail(email)) {
      alert('Please enter a valid email address!');
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    setLoading(true);
    console.log('Signing up with:', username, email, password);
    setTimeout(() => {
      setLoading(false);
      // Navigate or validate here
      alert('Account created!');
      navigation.navigate('Login');
    }, 2000);
  };

  return (
      <SafeAreaView style={styles.safe}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backButtonText}>← Back</Text>
    </TouchableOpacity>

        <View style={styles.overlay}>
          <View style={styles.move}>
            <Text style={styles.title}>Create an Account</Text>

                        
              <TextInput
                style={styles.input}
                placeholder="Username"
                placeholderTextColor="#ccc"
                value={username}
                onChangeText={setUsername}
                autoCapitalize="none"
              />

              <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#ccc"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />

              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#ccc"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />

              <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                placeholderTextColor="#ccc"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
              />

              <TouchableOpacity style={styles.button} onPress={handleSignUp} disabled={loading}>
                {loading ? (
                  <ActivityIndicator color="#fff" />
                ) : (
                  <Text style={styles.buttonText}>Sign Up</Text>
                )}
              </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
   
  );
}

const styles = StyleSheet.create({

  safe: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)', 
  },
  move: {
    borderWidth: 3,
    borderColor: 'red',
    marginTop: 30
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    padding: 24,
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 32,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
    backgroundColor: 'rgba(255,255,255,0.1)',
    color: '#fff',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 10,
    padding: 10,
  },
  backButtonText: {
    borderWidth: 3,
    borderColor: 'red',
    color: '#fff',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#6366F1',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
