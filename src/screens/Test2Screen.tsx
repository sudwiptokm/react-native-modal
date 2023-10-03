import { View, Text, SafeAreaView, Button } from "react-native";
import React, { useState } from "react";
import Modal from "react-native-modal";

type Props = {};

const Test2Screen = (props: Props) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <SafeAreaView className="flex-1 justify-center items-center">
      <Button title="Show modal" onPress={toggleModal} />

      <Modal isVisible={isModalVisible} onBackdropPress={toggleModal}>
        {/* Content of the modal */}
        <View className="bg-white rounded-xl p-6">
          <Text>Hello World!</Text>
          <Button title="Hide modal" onPress={toggleModal} />
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default Test2Screen;
