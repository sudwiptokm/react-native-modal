import {
  View,
  Button,
  SafeAreaView,
  Modal,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { StackScreenProps } from "@react-navigation/stack";

type Props = {};

const TestScreen = ({ navigation }: StackScreenProps<Props>) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <SafeAreaView className="flex-1 justify-center items-center">
      <Modal
        // animationType="fade"
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={() => {
          setShowModal(false);
        }}
      >
        {/* Backdrop wrapping the modal content */}
        <TouchableOpacity
          onPressOut={() => {
            console.log("Click Outside");
            setShowModal(false);
          }}
          className="bg-black/50 h-screen justify-center items-center"
        >
          {/* Modal Content */}
          <View>
            <View className="bg-black rounded-xl w-48 h-48">
              <Button title="hide modal" onPress={() => setShowModal(false)} />
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
      <Button title="Open Modal" onPress={toggleModal} />
    </SafeAreaView>
  );
};

export default TestScreen;
