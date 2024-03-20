import { View, Text, TextInput, TouchableOpacity } from "react-native";
import Logo from "../../../assets/imgs/Logo";
import { useState } from "react";
import { useNavigate } from "react-router-native";
function Login() {
  const [isFocused, setIsFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleLogin = () => {
    const emailBack = "cayoromipastor@gmail.com";
    const passwordBack= "yugotegana"
    if (email === "" || password === "") {
      return alert("Email or Password cannot be empty");
    } else if (emailBack !== email || passwordBack !== password) {
        return alert("Email or Password is incorrect");
        }
    alert("Login successful");
    navigate("/home");

    
  };

  return (
    <View className="justify-between flex-1 items-center px-8">
      <View className="flex-1 justify-end items-center w-full space-y-8">
        <Text className="text-[#27DEBF] font-extrabold text-3xl">
          Entre Aquí
        </Text>
        <Text className="font-bold text-lg text-center mb-8">
          !Bienvenido de nuevo, te hemos extrañado!
        </Text>
        <View className="w-full space-y-6">
          <View>
            {(isFocused || email !== "") && (
              <Text className="text-left font-semibold text-xs absolute left-2 -top-2 bg-white z-10 px-1">
                Email
              </Text>
            )}
            <TextInput
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              value={email}
              onChangeText={(e) => setEmail(e)}
              placeholder={isFocused ? "" : "Email"}
              className={`p-4 border-2 border-[#27DEBF]
              rounded-md`}
            />
          </View>
          <View>
            {(isPasswordFocused || password !== "")&& (
              <Text className="text-left text-xs font-semibold absolute left-2 -top-2 bg-white z-10 px-1">
                Password
              </Text>
            )}
            <TextInput
              onFocus={() => setIsPasswordFocused(true)}
              onBlur={() => setIsPasswordFocused(false)}
              value={password}
              onChangeText={(e) => setPassword(e)}
              placeholder={isPasswordFocused ? "" : "Password"}
              secureTextEntry={true}
              className={`p-4 border-2 border-[#27DEBF]
              rounded-md`}
            />
          </View>
          <TouchableOpacity>
            <Text className=" text-[#27DEBF] text-right font-medium">
              Olvidaste tu contraseña?
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          className="bg-[#27DEBF] w-full rounded-md"
          onPress={() => handleLogin()}
        >
          <Text className="p-4 text-center font-extrabold text-[#f1f1f1] text-lg ">
            Iniciar Sesión
          </Text>
        </TouchableOpacity>
      </View>
      <View className="h-[35%] py-8">
        <Logo />
      </View>
    </View>
  );
}

export default Login;
