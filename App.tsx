import { useState } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import Header from './components/Header';
import Footer from './components/Footer';
import CoffeeCard from './components/BurguerCard';
import { AntDesign } from '@expo/vector-icons'; 
import { ImageBackground } from 'react-native/types_generated/index';


export default function App() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleOrder = () => {
    if (name.trim() === ""){
      setMessage("Por favor, informe seu nome!");
    } else {
      setMessage(`Olá, ${name}! Seu pedido foi recebido.`);
    }
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior="padding"
      keyboardVerticalOffset={30}
    >
      <ScrollView style={styles.container}>
        
        {/* Header */}
        <Header />

        {/* Conteúdo */}
        <View style={styles.content}>
          <View style={styles.conteudoSection}>
            <Text style={styles.conteudoTitle}>Bateu a fome?</Text>
            <Text style={styles.conteudoSubtitle}>
              Escolha seu burguer artesanal de hoje
            </Text>
          </View>

          <View style={styles.featured}>
            <Image
              style={styles.image}
              source={require('./assets/burguer_title.png')}
            />
            <Text style={styles.destaque}> DESTAQUE DA CASA</Text>
            <Text style={styles.featuredTitle}>
              Smash Duplo Cheddar
            </Text>
            <Text style={styles.featuredDescription}>
              Dois blends de 100g, queijo cheddar derretido e molho especial
            </Text>
            
           
            <View style={styles.priceRow}>
              <Text style={styles.featuredPrice}>R$ 34,90</Text>
              

              <TouchableOpacity style={styles.addDestaque}>
                <View style={styles.avatarAdicionar}>
                  <AntDesign name="plus" size={24} color="white" />
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <Text style={styles.sectionTitle}>Nossos Burgers</Text>

          <View style={styles.menu}>
              <CoffeeCard
                image={require("./assets/classic_burguer.png")}
                name="Classic Burger"
                description="Pão brioche, blend 160g e queijo prato"
                 price="R$ 26,00"
               />

              <CoffeeCard
                image={require("./assets/bacon_crispy.png")}
                name="Bacon Crispy"
                description="Blend 160g com fatias crocantes de bacon"
                price="R$ 32,00"
                />

            <CoffeeCard 
              image={require("./assets/chicken_crunchy.png")}
              name="Chicken Crunchy"
              description="Frango empanado com maionese da casa" 
              price="R$ 28,50"
            />

            <CoffeeCard
              image={require("./assets/veggie_grill.png")} 
              name="Veggie Grill"
              description="Hambúrguer de grão de bico e cogumelos" 
              price="R$ 29,90"
            />
          </View>

          <View style={styles.orderSection}>
            <Text style={styles.question}>Como podemos te chamar?</Text>
            <Text style={styles.subtitlequestion}>Insira seus dados para agilizar sua retirada ou entrega</Text>

            <TextInput
              style={styles.input}
              placeholder="Digite seu nome"
              value={name}
              onChangeText={setName}
            />

            <TouchableOpacity style={styles.button} onPress={handleOrder} activeOpacity={0.8} 
            >
              <Text style={styles.buttonText}>Fazer meu pedido</Text>
              </TouchableOpacity>

            {message !== "" && (
              <View style={styles.messageBox}>
                <View style={styles.checkAvatar}>
                <AntDesign name="check"
                size={18} color="#ffffff" />
                </View>
                
              <Text style={styles.messageText}>{message}</Text> 
              </View>    
            )}
          </View>
        
        {/* Footer */}
        <Footer />

        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9', 
  },
  content: {
    paddingHorizontal: 24,
  },
  conteudoSection: {
    marginTop: 10,
    marginBottom: 24,
  },
  conteudoTitle: {
    fontSize: 32,
    fontWeight: '900',
    color: '#1E1E1E',
  },
  conteudoSubtitle: {
    fontSize: 15,
    color: '#6C757D',
    marginTop: 8,
    fontWeight: '400',
  },
  featured: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    marginBottom: 32,
  },
  image: {
    width: '100%',
    height: 180,
    marginBottom: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  destaque:{
    fontSize: 13,
    fontWeight: "800",
    color: "#E65100",
    textAlign: "center",
    marginTop: 11,
    width: '40%',
    height: 20,
    backgroundColor: '#FFF3E0',
    borderRadius: 10,
  },
  featuredTitle: {
    fontWeight: '900',
    color: '#1E1E1E',
    fontSize: 22,
    marginTop: 10
  },
  featuredDescription: {
    fontSize: 13,
    fontWeight: '400',
    color: '#6C757D',
    marginTop: 4,
    marginBottom: 12, 
  },

  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  featuredPrice: {
    fontSize: 24,
    color: '#E65100',
    fontWeight: '900',
    marginBottom: 11,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '900',
    color: '#1E1E1E',
    marginBottom: 16,
  },
  menu: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  orderSection: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 24,
    shadowColor: '#000000',
    shadowOpacity: 0.05,
    elevation: 4,
    marginTop: 10,
    marginBottom: 30
  },
  question: {
    fontSize: 18,
    fontWeight: '900',
    color: '#1E1E1E',
  },
  input: {
    width: '100%',
    height: 56,
    backgroundColor: '#efeae9ff',
    borderRadius: 10,
    paddingHorizontal: 16, 
    marginBottom: 16,
    fontWeight: '500',  
  },
  messageText: {
    flex: 1,
    fontSize: 14,
    fontWeight: "700",
    color: "#2E7D32"

  },
  subtitlequestion: {
    fontSize: 12,
    color: '#6C757D',
    fontWeight: "400",
    marginTop: 4,
    marginBottom: 12, 
  },
  avatarAdicionar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E65100',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addDestaque:{
  },
  button: {
    width: '100%',
    backgroundColor: '#E65100',
    borderRadius: 30,
    paddingVertical: 16,
    paddingHorizontal: 30,
    alignItems: 'center',
    marginTop: 5,
    elevation: 4
  },
  buttonText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: "700"
  },
  messageBox: {
    width: "100%",
    backgroundColor: "#E8F5E9",
    borderRadius: 12,
    padding: 12,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  checkAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#2E7D32',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
