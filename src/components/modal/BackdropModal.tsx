import { TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import React, { ReactNode } from "react";
import Animated, {
  FadeIn,
  FadeOut,
  SlideInDown,
  SlideOutDown,
} from "react-native-reanimated";

type Props = {
  children: ReactNode;
  showModal: boolean;
  setShowModal: (val: boolean) => void;
};

const BackdropModal = (props: Props) => {
  const toggleModal = () => props.setShowModal(!props.showModal);

  return (
    <Animated.View
      className="bg-black/50 absolute top-0 bottom-0 left-0 right-0 z-10"
      entering={FadeIn}
      exiting={FadeOut}
    >
      {/* Backdrop Pressing function */}
      <TouchableOpacity
        className="flex-1 justify-center items-center"
        onPress={toggleModal}
      >
        {/* Modal Content */}
        <TouchableWithoutFeedback>
          <Animated.View entering={SlideInDown} exiting={SlideOutDown}>
            {props.children}
          </Animated.View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default BackdropModal;
