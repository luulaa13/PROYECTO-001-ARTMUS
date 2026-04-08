import React from "react";
import {Image, View, Text, TextInput, TouchableOpacity, StyleSheet, Pressable} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  // Regex para @gmail o @hotmail con .com o .es
  const emailRegex = /^[\w.-]+@(gmail|hotmail)\.(com|es)$/i;

  const handleEmailChange = (text: string) => {
    setEmail(text);

    // Validación en tiempo real
    if (text === '' || emailRegex.test(text)) {
      setEmailError('');
    } else {
      setEmailError('Formato incorrecto');
    }
  };

  const handleLogin = () => {
    if (!emailRegex.test(email)) {
      setEmailError('Formato incorrecto');
      return;
    }

    console.log("Email válido:", email);
    // Aquí  seguir con la lógica de login
  };

  
  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
          source={require('../assets/logo.png')} 
          style={styles.logo}
        />

      {/* Email */}
      <Text style={styles.label}>Email</Text>
      <View style={[styles.inputContainer, emailError ? { borderColor: 'red' } : null]}>
        <Icon name="mail-outline" size={20} color="#1E3A5F" />
        <TextInput
          placeholder="ejemplo@gmail.com"
          style={styles.input}
          keyboardType="email-address"
          value={email}
          onChangeText={handleEmailChange}
        />
      </View>
      {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

      {/* Password */}
      <Text style={styles.label}>Password</Text>
      <View style={styles.inputContainer}>
        <Icon name="lock-closed-outline" size={20} color="#1E3A5F" />
        <TextInput
          placeholder="********"
          secureTextEntry
          style={styles.input}
        />
      </View>

      {/* Forgot password */}
       <TouchableOpacity  
      activeOpacity={0.4}>
      <Text style={styles.forgot}>Forgot password ?</Text>
      </TouchableOpacity>

      {/* Button */}
          <Pressable
              style={({ pressed }) => [
                  styles.button,
                  pressed && { backgroundColor: '#ffff',},
              ]}
          >
            {({ pressed }) => (
            <Text style={[styles.buttonText, pressed && { color: '#1E3A5F' }]}>
                  ACCEDER
            </Text>
             )}
         </Pressable>

     {/* Divider */}
    <View style={styles.dividerContainer}>
    <View style={styles.line} />
    <Text style={styles.or}>or</Text>
    <View style={styles.line} />
    </View>

      {/* Google */}
      <TouchableOpacity style={styles.googleButton}  
      activeOpacity={0.7}>
        <Image
          source={require('../assets/google-color.png')} 
          style={styles.googleIcon}
        />
        <Text style={styles.googleText}>Continue with Google</Text>
      </TouchableOpacity>

      {/* Apple */}
      <TouchableOpacity style={styles.appleButton}  
      activeOpacity={0.7}>
         <Icon name="logo-apple" size={25} color="#0000" />
        <Text style={styles.appleText}>Continue with Apple</Text>
      </TouchableOpacity>

      {/* Signup */}
     <View style={styles.signupContainer}>
        <Text style={styles.signup}>
            Need an account?{' '}
        </Text>
        <TouchableOpacity onPress={() => console.log('Sign up pressed')}>
            <Text style={styles.signupBold}>Sign up</Text>
        </TouchableOpacity>
    </View>

    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1FF85",
    padding: 20,
    justifyContent: "center",
  },
logo: {
  width: 140,          // ancho del logo
  height: 140,         // alto del logo
  resizeMode: 'contain', // mantiene proporción de la imagen
  alignSelf: 'center',   // centra horizontalmente
  marginTop: 10,      // espacio debajo del logo
},
  label: {
    marginBottom: 5,
    color: "#1E3A5F",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#1E3A5F",
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginBottom: 15,
  },
  input: {
    flex: 1,
    marginLeft: 10,
  },
  errorText: {
    color: 'red', marginBottom: 10 
  },
  forgot: {
    textAlign: "right",
    marginBottom: 20,
    color: "#1E3A5F",
  },
  button: {
    backgroundColor: "#1F3A5F",
    padding: 15,
    borderRadius: 25,
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  or: {
    textAlign: "center",
    marginHorizontal: 20, 
    color: "#1E3A5F",
  },
  googleButton: {
    borderRadius: 25,
    marginBottom: 15,
    flexDirection: 'row',           // línea horizontal: icono + texto
    alignItems: 'center',           // centra verticalmente el ícono y el texto
    justifyContent: 'center',
    backgroundColor: "#1F3A5F",
    padding: 15,
  },
  googleText: {
    color: "#fff",
     marginLeft: 20,   
  },
  appleButton: {
    flexDirection: 'row',
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: 'center',
    marginBottom: 20,
  },
  appleText: {
    color: "#1E3A5F",
    marginLeft: 20,
  },

  signupContainer: {
  flexDirection: 'row',       // texto y botón en la misma línea
  justifyContent: 'center',   // centrado horizontal
  marginTop: 20,
},

  signup: {
    fontSize: 14,
    textAlign: "center",
    color: "#999999",
  },
  signupBold: {
     fontSize: 14,
    fontWeight: "bold",
     color: "#1E3A5F",
  },
  dividerContainer: {
  flexDirection: 'row',       // horizontal
  alignItems: 'center',       // centra el "or" verticalmente
  marginVertical: 20,         // espacio arriba y abajo
},
  line: {
    width: 130,
    height: 1,
    backgroundColor: '#A19D9D4D'
  },
    googleIcon: {
    width: 22,
    height: 22,
    resizeMode: 'contain',   
  },
});
