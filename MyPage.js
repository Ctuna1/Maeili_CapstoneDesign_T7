import { View, Text, Button, StyleSheet, Image } from "react-native";
import BasicButton from "../components/Button/BasicButton";
import { useState } from "react";
import BasicModal from "../components/Modal/BasicModal";
import Timer from "../components/Timer"


function MyPage() {
  const [modalVisible, setModalVisible] = useState(false);
  const [currentStep, setCurrentStep] = useState(0); // 각 버튼의 상태를 저장할 변수

  const handleModalVisible = (step) => {
    setCurrentStep(step); // 현재 단계를 설정
    setModalVisible(true); // 모달을 열기
  };

  const handleModalClose = () => {
    setModalVisible(false); // 모달을 닫기
  };

  // 버튼에 대한 이미지 경로를 반환하는 함수
  const getImageSource = (step) => {
    switch (step) {
      case 1:
        return require("../assets/홈.png");
      case 2:
        return require("../assets/캘린더.png");
      case 3:
        return require("../assets/회고록.png");
      case 4:
        return require("../assets/환경설정.png");
      default:
        return null;
    }
  };

  const handleNextStep = () => {
    // 다음 단계로 이동하는 함수
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePreviousStep = () => {
    // 이전 단계로 이동하는 함수
    setCurrentStep((prevStep) => prevStep - 1);
  };

  return (
    <>
      <View>
        <Text style={[S.header]}>
          환경설정
        </Text>
      </View>

      <View style={[S.container]}>


        <View style={[S.container]}>
          <BasicButton
            title={"매일이 가이드"}
            onPress={() => handleModalVisible(1)}
            style={S.text} // 스타일 추가
          />

          <BasicButton
            title={"타이머"}
            onPress
            style={S.text}
          />

          <BasicModal
            modalVisible={modalVisible}
            setModalVisible={handleModalClose}
          >
            <View style={S.modalContainer}>


              <Image source={getImageSource(currentStep)} style={S.image} />

              <View style={S.buttonContainer}>
                {currentStep > 1 && (
                  <Button
                    title="이전"
                    onPress={handlePreviousStep}
                    color="#DCB3FE"
                  />
                )}
                {currentStep < 4 && (
                  <Button
                    title="다음"
                    onPress={handleNextStep}
                    color="#DCB3FE"
                  />
                )}
              </View>

              <Button
                title="닫기"
                onPress={handleModalClose}
                color="#DCB3FE"
              />
            </View>
          </BasicModal>
        </View>
        <Timer />
      </View>
    </>
  );
}

export default MyPage;

const S = StyleSheet.create({
  modalContainer: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fbfbff",
    flex: 1,
  },

  image: {
    flex: 1,
    resizeMode: "contain",
  },

  header: {
    fontFamily: "WomanFlower",
    marginTop: 20,
    fontSize: 40,
    fontWeight: "600",
    padding: 20,
    textAlign: "left",
    backgroundColor: "#fbfbff",
    borderBottomColor: "rgba(0,0,0,0.3)",
    borderBottomWidth: 1,
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
    marginTop: 20,
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


});