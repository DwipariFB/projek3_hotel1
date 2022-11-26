import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { firebase } from "../config";

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  loginUser = async (email, password) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View Style={styles.container}>
      <Text style={styles.mainHeader}>Login Form</Text>

      <View Style={{ marginTop: 40 }}>
        <Text style={styles.labels}> Enter Your Name</Text>
        <TextInput
          style={styles.inputStyle}
          placeHolder="Email"
          onChangeText={(email) => setEmail(email)}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Text style={styles.mainHeader}>Password</Text>
        <Text style={styles.labels}> Enter Your Password</Text>
        <TextInput
          style={styles.inputStyle}
          placeHolder="Password"
          onChangeText={(password) => setPassword(password)}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
        />
      </View>

      <TouchableOpacity
        onPress={() => loginUser(email, password)}
        style={styles.buttonStyle}
      >
        <Text style={{ fontWeight: "bold", fontSize: 22, color: "#fff" }}>
          Login
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Registration")}
        Style={{ marginTop: 20 }}
      >
        <Text
          style={{ fontWeight: "light", fontSize: 16, textAlign: "center" }}
        >
          Don't have an account? Register Now
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 100,
  },
  TextInput: {
    paddingTop: 20,
    paddingBottom: 10,
    width: 400,
    fontSize: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    marginBottom: 10,
    textAlign: "center",
  },
  button: {
    marginTop: 50,
    // height: 70,
    width: 250,
    backgroundColor: "#026efd",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    alignContent: "center",
  },
  // buttonStyle: {
  //   borderWidth: 1,
  //   borderColor: "rgba(0,0,0,0.3)",
  //   borderRadius: 50,
  //   paddingHorizontal: 15,
  //   paddingVertical: 7,
  //   borderRadius: 5,
  //   fontSize: 18,
  //   marginTop: 20,
  // },

  mainContainer: {
    height: 100,
    paddingHorizontal: 30,
    paddingTop: 30,
    backgroundColor: "#fff",
  },
  mainHeader: {
    fontSize: 25,
    color: "#344055",
    fontWeight: "500",
    paddingTop: 20,
    paddingBottom: 15,
    textTransform: "capitalize",
    marginLeft: 30,
  },
  description: {
    fontSize: 20,
    color: "#7d7d7d",
    paddingBottom: 20,
    lineHeight: 25,
  },
  inputContainer: {
    marginTop: 20,
  },
  labels: {
    fontSize: 18,
    color: "#7d7d7d",
    marginTop: 10,
    marginBottom: 5,
    lineHeight: 25,
    marginLeft: 30,
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.3)",
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 1,
    fontSize: 18,
    marginLeft: 30,
    marginRight: 30,
  },
  buttonStyle: {
    // width: 250,
    height: 50,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.3)",
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 50,
    fontSize: 18,
    marginTop: 20,
    marginLeft: 40,
    marginRight: 40,
    alignItems: "center",
    // alignContent: "center",
    color: "#fff",
    backgroundColor: "#4630eb",
  },
});
