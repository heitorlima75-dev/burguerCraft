
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
    width: '390%',
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
    color: '#1E1E1E',
  },
  headerSubtitle: {
    fontSize: 12,
    color: '#6C757D',
    marginTop: 4,
    fontWeight: "500"
  },
  avatarPlaceHolder: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#E9ECEF',
    justifyContent: 'center',
    alignItems: 'center',
  },
    avatar: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },

});