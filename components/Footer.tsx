import { Text, StyleSheet, View} from "react-native";

export default function Footer() {
    return(
        <View style={styles.footer}>
            <Text style={styles.footerText}>Burguer Craft ° Sabor artesanal de verdade</Text>
            </View>
    );
}

const styles = StyleSheet.create({
   footer:{
    marginBlock: 40,
    alignItems: "center"
  },
  footerText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#9b9b9b",
  },
});