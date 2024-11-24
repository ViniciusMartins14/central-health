import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Modal, TouchableWithoutFeedback } from "react-native";
import { Feather } from "@expo/vector-icons";
import { colors } from "@/styles/colors";
import { styles } from "./styles";

interface OptionsModalProps {
  visible: boolean;
  onClose: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

export function OptionsModal({ visible, onClose, onEdit, onDelete }: OptionsModalProps) {
  return (
    <Modal
      transparent={true}
      visible={visible}
      animationType="slide"
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.modalOverlay}>
          <TouchableWithoutFeedback>
            <View style={styles.modalContent}>
              <TouchableOpacity style={styles.option} onPress={onEdit}>
                <Feather name="edit" size={24} color={colors.blue[700]} />
                <Text style={styles.editText}>Edit review</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.option} onPress={onDelete}>
                <Feather name="trash-2" size={24} color={colors.red[300]} />
                <Text style={styles.deleteText}>Delete review</Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
