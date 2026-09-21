import { Text, StyleSheet, View} from "react-native";


type BurguerCardProps = {
    name: string;
    description: string;
    price: string;
};

export default function BurguerCard({name, description, price,}: BurguerCardProps) {
    return(
        <View style={styles.Card}>
            <Text style={styles.cardTitle}>{name}</Text>
            <Text style={styles.cardSubtitle}>{description}</Text>
            <Text style={styles.cardPrice}>{price}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    Card: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 16,
    width: '48%',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.05,
    elevation: 5,
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
  },
  cardSubtitle: {
    fontSize: 12,
    marginTop: 4,
    color: '#9b9b9b',
  },
  cardPrice: {
    fontSize: 16,
    fontWeight: '800',
    marginTop: 12,
    color: '#E65100',
  },
  imageBurguer: {
    width: '100%',
    height: 110,
    marginBottom: 16,
    borderRadius: 16,
  }
})


