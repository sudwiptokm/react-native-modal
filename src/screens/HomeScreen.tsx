import { Button, SafeAreaView, Text, View } from "react-native";
import React, { useState } from "react";
import BackdropModal from "../components/modal/BackdropModal";

type Props = {
  navigation: { openDrawer: () => void; navigate: (name: string) => void };
};

const HomeScreen = ({ navigation }: Props) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <SafeAreaView className="flex-1 justify-center items-center">
      {showModal && (
        <BackdropModal setShowModal={setShowModal} showModal={showModal}>
          <View className="bg-white rounded-xl p-4">
            <Text>Hello World!</Text>
          </View>
        </BackdropModal>
      )}

      <Button title="show modal" onPress={() => setShowModal(true)} />
    </SafeAreaView>
  );
};

export default HomeScreen;
