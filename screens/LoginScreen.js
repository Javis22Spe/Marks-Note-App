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
import Footer from '../components/Footer';



export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    console.log('Logging in with:', email, password);
    setTimeout(() => {
      setLoading(false);
      // Navigate or validate here
    }, 2000);
  };

  return (
    <ImageBackground
      source={{ uri: 'data:image/jpeg;base64,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' }}
      style={styles.background}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.safe}>

      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backButtonText}>← Back</Text>
        </TouchableOpacity>

        <View style={styles.overlay}>
          <Text style={styles.title}>Login to Note App!</Text>

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

          <TouchableOpacity style={styles.button} onPress={handleLogin} disabled={loading}>
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.buttonText}>Login</Text>
            )}
          </TouchableOpacity>
         <Footer/> 
        </View>  
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  safe: {
    flex: 1,
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
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 10,
    padding: 10,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
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
