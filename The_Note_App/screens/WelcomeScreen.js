import 'react-native-gesture-handler'
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, ImageBackground, ActivityIndicator, SafeAreaView, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Footer from '../components/Footer';


export default function WelcomeScreen({ navigation }) {
  const [loadingLogin, setLoadingLogin] = useState(false);
  const [loadingSignUp, setLoadingSignUp] = useState(false);

  const handleLogin = () => {
    setLoadingLogin(true);
    setTimeout(() => {
      setLoadingLogin(false);
      navigation.navigate('Login');
    }, 1000);
  };

  const handleSignUp = () => {
    setLoadingSignUp(true);
    setTimeout(() => {
      setLoadingSignUp(false);
      navigation.navigate('Signup');
    }, 1000);
  };

  return (
    <ImageBackground
      source={{ uri: 'https://images.unsplash.com/photo-1508780709619-79562169bc64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80' }}
      style={styles.background}
      resizeMode="cover"
    >
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.overlay}>
            <Text style={styles.title}>Welcome to Note App!</Text>
            <Text style={styles.description}>
              Save your notes locally and securely to the cloud. Access them anytime, anywhere with ease!
            </Text>

            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={handleSignUp} disabled={loadingSignUp}>
                {loadingSignUp ? <ActivityIndicator color="#fff" /> : <Text style={styles.buttonText}>Sign Up</Text>}
              </TouchableOpacity>

              <TouchableOpacity style={[styles.button, styles.loginButton]} onPress={handleLogin} disabled={loadingLogin}>
                {loadingLogin ? <ActivityIndicator color="#fff" /> : <Text style={styles.buttonText}>Login</Text>}
              </TouchableOpacity>
            </View>

            <StatusBar style="light" />
          </View>
          <Footer />
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1, width: '100%', height: '100%' },
  scrollContainer: { flexGrow: 1 },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
    textAlign: 'center',
  },
  description: {
    fontSize: 18,
    color: '#E5E7EB',
    textAlign: 'center',
    marginBottom: 40,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    width: '80%',
    backgroundColor: '#6366F1',
    paddingVertical: 14,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center',
  },
  loginButton: {
    backgroundColor: '#22C55E',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
});
