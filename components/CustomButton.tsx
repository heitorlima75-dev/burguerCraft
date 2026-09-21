import { Text, StyleSheet, TouchableOpacity } from "react-native";

type CustomButtonProps = {
  title: string;
  onPress: () => void;
};

export default function CustomButton({ title, onPress }: CustomButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    backgroundColor: "#c67c4e",
    borderRadius: 30,
    paddingVertical: 16,
    paddingHorizontal: 30,
    alignItems: "center",
    marginTop: 20,
    shadowColor: "#c67c4e",
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    elevation: 4,
  },

  buttonText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#ffffff",
  },
});