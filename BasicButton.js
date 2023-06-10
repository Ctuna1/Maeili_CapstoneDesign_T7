import { View, Pressable, Text, StyleSheet } from "react-native";

function BasicButton({
  onPress,
  title = "매일이 가이드",
  backgroudColor = "#DCB3FE",
  fontSize = 20,
  width,
  height,
  color,
}) {
  return (
    <View style={S.container}>
      <Pressable
        style={[
          S.button,
          { backgroundColor: backgroudColor, width: width, height: height },
        ]}
        onPress={onPress}
      >
        <Text style={[S.text, { fontSize: fontSize, color: color }]}>
          {title}
        </Text>
      </Pressable>
    </View>
  );
}

const S = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderRadius: 4,
    elevation: 3,
    borderRadius: 25,
    marginBottom: 40, // 버튼 간 간격
    
  },
  
  text: {
    fontSize: 21,
    lineHeight: 21,
    fontWeight: "600",// 폰트두께
    letterSpacing: 0.25,
    fontFamily: 'WomanFlower',
  },
});

export default BasicButton;