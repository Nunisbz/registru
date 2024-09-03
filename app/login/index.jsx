import React, { useState } from 'react';
import { View, Text, Pressable, TextInput, StyleSheet, SafeAreaView } from 'react-native';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');

  const registrarUsuário = async () => {
    if (!nome || !email || !senha) {
      console.log(nome, email, senha);
      return;
    }
    try {
      const resposta = await fetch('https://taskhub-s37f.onrender.com/auth/signup', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: nome, email: email, password: senha }),
      });
      const data = await resposta.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.logoText}>TaskHub</Text>
        <Text style={styles.description}>
          This project is part of a study,{"\n"}Create your user with email and password
        </Text>
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Sign Up</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setNome(text)}
          value={nome}
          placeholder="Name"
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder="Email"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => setSenha(text)}
          value={senha}
          placeholder="Password"
          secureTextEntry={true}
        />
        <Pressable style={styles.button} onPress={registrarUsuário}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </Pressable>
        <Pressable style={styles.googleButton}>
          <Text style={styles.googleButtonText}>Continue With Google</Text>
        </Pressable>
        <Text style={styles.signInText}>
          Already have an account? <Text style={styles.signInLink}>Sign In</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  leftContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#000',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
    marginTop: 10,
  },
  formContainer: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 30,
    borderRadius: 10,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: 'lightgray',
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  button: {
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 15,
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  googleButton: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 5,
    borderColor: '#000',
    borderWidth: 1,
    alignItems: 'center',
    marginBottom: 15,
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  googleButtonText: {
    color: '#000',
    fontSize: 16,
  },
  signInText: {
    textAlign: 'center',
    color: '#555',
    marginTop: 10,
  },
  signInLink: {
    color: '#000',
    fontWeight: 'bold',
  },
});

export default SignUp;
