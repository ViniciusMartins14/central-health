import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { styles } from "./styles";
import { colors } from "@/styles/colors";
import { OptionsModal } from "@/app/components/modal"; // Importa o modal componetizado

interface RecordCardProps {
  name: string;
  lastReview: string;
  reviews: number;
}

export default function RecordCard({ name, lastReview, reviews }: RecordCardProps) {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => setModalVisible(!modalVisible);

  const handleEdit = () => {
    setModalVisible(false);
    console.log("Edit Patient");
  };

  const handleDelete = () => {
    setModalVisible(false);
    console.log("Delete Patient");
  };

  return (
    <View style={styles.card}>
      <View style={styles.content}>
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.lastReview}>Last Review {lastReview}</Text>
        </View>
        <TouchableOpacity onPress={toggleModal}>
          <Feather name="more-vertical" size={24} color={colors.blue[500]} />
        </TouchableOpacity>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity style={styles.viewButton}>
          <Text style={styles.viewText}>View</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.reviewButton}>
          <Text style={styles.reviewText}>Reviews</Text>
        </TouchableOpacity>
      </View>

      <OptionsModal
        visible={modalVisible}
        onClose={toggleModal}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </View>
  );
}
