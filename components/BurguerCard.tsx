import {
  Text,
  StyleSheet,
  View,
  Image,
  ImageSourcePropType
} from "react-native";

type BurguerCardProps = {
  name: string;
  description: string;
  price: string;
  image: ImageSourcePropType;
};

export default function BurguerCard({
  name,
  description,
  price,
  image,
}: BurguerCardProps) {
  return (
    <View style={styles.card}>

      <Image
        source={image}
        style={styles.imageBurguer}
      />

      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{name}</Text>

        <Text style={styles.cardSubtitle}>
          {description}
        </Text>

        <Text style={styles.cardPrice}>
          {price}
        </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    width: "48%",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.05,
    elevation: 5,
    marginBottom: 16,

    // Faz a imagem respeitar o arredondamento do card
    overflow: "hidden",
  },

  imageBurguer: {
    width: "100%",
    height: 110,
    resizeMode: "cover",
  },

  cardContent: {
    padding: 12,
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#2f2d2c",
  },

  cardSubtitle: {
    fontSize: 12,
    marginTop: 4,
    color: "#9b9b9b",
  },

  cardPrice: {
    fontSize: 16,
    fontWeight: "800",
    marginTop: 12,
    color: "#E65100",
  },
});