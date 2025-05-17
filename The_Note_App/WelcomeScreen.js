import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

export default function WelcomeScreen({ navigation, route }) {
  const username = route.params?.username || 'User';

  return (
    <ImageBackground
    // //   source={require('../assets/note_background.jpg')} // use your image here
    //   style={styles.background}
    //   resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.welcomeText}>Welcome, {username}!</Text>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CreateNote')}>
          <Text style={styles.buttonText}>📝 Create New Note</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ViewNotes')}>
          <Text style={styles.buttonText}>📂 View Notes</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Profile')}>
          <Text style={styles.buttonText}>⚙️ Profile / Settings</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    padding: 24,
  },
  welcomeText: {
    fontSize: 28,
    color: '#fff',
    marginBottom: 40,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#3B82F6',
    padding: 14,
    borderRadius: 8,
    marginVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
  },
});
