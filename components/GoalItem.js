import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem({ text, id, onDeleteItem }) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{
          color: "#2c055e",
          borderRadius: 6,
          overflow: "hidden",
        }}
        style={({ pressed }) => pressed && styles.pressedItem}
        onPress={() => onDeleteItem(id)}
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    overflow: "hidden",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: "white",
    padding: 8,
    borderRadius: 6,
  },
});
