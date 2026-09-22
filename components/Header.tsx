
import { Text, StyleSheet, View} from "react-native";
import { Image } from "react-native";


export default function Header() {
    return(
        <View style={styles.header}>
                <View>
                  <Text style={styles.headerTitle}>Burguer Craft </Text>
                  <Text style={styles.headerSubtitle}>
                    Sabor artesanal de verdade
                  </Text>
                </View>
        
                <View style={styles.avatarPlaceHolder}>
                  <Image
                  source={require("../assets/avatar-container.png")}
                  style={styles.avatar} 
                />
                </View>

              </View>
    );
}

const styles = StyleSheet.create({
    header: {
    width: '100%',
    paddingHorizontal: 24,
    paddingTop: 67,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#2f2d2c',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#9b9b9b',
    marginTop: 4,
  },
  avatarPlaceHolder: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
    avatar: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },

});