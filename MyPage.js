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
        return require("../assets/가이드화면/홈가이드 (1).png");
      case 2:
        return require("../assets/가이드화면/홈가이드 (2).png");
      case 3:
        return require("../assets/가이드화면/홈가이드 (3).png");
      case 4:
        return require("../assets/가이드화면/홈가이드 (4).png");
      case 5:
        return require("../assets/가이드화면/홈가이드 (5).png");
      case 6:
        return require("../assets/가이드화면/홈가이드 (6).png");
      case 7:
        return require("../assets/가이드화면/홈가이드 (7).png");
      case 8:
        return require("../assets/가이드화면/홈가이드 (8).png");
      case 9:
        return require("../assets/가이드화면/홈가이드 (9).png");
      case 10:
        return require("../assets/가이드화면/홈가이드 (10).png");
      case 11:
        return require("../assets/가이드화면/홈가이드 (11).png");
      case 12:
        return require("../assets/가이드화면/홈가이드 (12).png");
      case 13:
        return require("../assets/가이드화면/홈가이드 (13).png");
      case 14:
        return require("../assets/가이드화면/홈가이드 (14).png");
      case 15:
        return require("../assets/가이드화면/홈가이드 (15).png");
      case 16:
        return require("../assets/가이드화면/홈가이드 (16).png");
      case 17:
        return require("../assets/가이드화면/홈가이드 (17).png");
      case 18:
        return require("../assets/가이드화면/홈가이드 (18).png");

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
        <BasicButton
          title={"홈 가이드"}
          onPress={() => handleModalVisible(1)}
          style={S.text} // 스타일 추가
        />

         <BasicButton
          title={"캘린더 가이드"}
          onPress={() => handleModalVisible(41)} // 새로운 스텝 번호(41) 사용하여 타이머 버튼 누를 시, 모달에 새로운 화면을 띄움
          style={S.text}
        /> 

        <BasicButton
          title={"회고록 가이드"}
          onPress={() => handleModalVisible(41)} // 새로운 스텝 번호(41) 사용하여 타이머 버튼 누를 시, 모달에 새로운 화면을 띄움
          style={S.text}
        /> 

        <BasicButton
          title={"환경설정 가이드"}
          onPress={() => handleModalVisible(41)} // 새로운 스텝 번호(41) 사용하여 타이머 버튼 누를 시, 모달에 새로운 화면을 띄움
          style={S.text}
        /> 

        <BasicButton
          title={"타이머"}
          onPress={() => handleModalVisible(41)} // 새로운 스텝 번호(41) 사용하여 타이머 버튼 누를 시, 모달에 새로운 화면을 띄움
          style={S.text}
        /> 

        <BasicModal
          modalVisible={modalVisible}
          setModalVisible={handleModalClose}
          
        >
          {currentStep === 41 ? ( //스텝이 41일 경우 해당하는 화면(Timer)를 띄움
            <Timer />
            
          ) : (
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
          )}
        </BasicModal>
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
    marginBottom: 35, // 버튼 간 간격
  },


});