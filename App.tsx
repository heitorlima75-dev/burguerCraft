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
import CustomButton from './components/CustomButton';
import { AntDesign } from '@expo/vector-icons'; 


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
              name="Classic Burger"
              description="Pão brioche, blend 160g e queijo prato" 
              price="R$ 26,00"
            />

            <CoffeeCard 
              name="Bacon Crispy"
              description="Blend 160g com fatias crocantes de bacon" 
              price="R$ 32,00"
            />

            <CoffeeCard 
              name="Chicken Crunchy"
              description="Frango empanado com maionese da casa" 
              price="R$ 28,50"
            />

            <CoffeeCard 
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

            <CustomButton title='Fazer meu pedido' onPress={handleOrder}/>
            {message !== "" && (
              <Text style={styles.messageText}>{message}</Text>     
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
    fontSize: 22,
    fontWeight: '800',
    color: '#2f2d2c',
  },
  conteudoSubtitle: {
    fontSize: 16,
    color: '#9b9b9b',
    marginTop: 8,
  },
  featured: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 24,
    marginBottom: 32,
  },
  image: {
    width: '100%',
    height: 180,
    marginBottom: 16,
    borderRadius: 16,

  },
  destaque:{
    fontSize: 13,
    fontWeight: "700",
    color: "#E65100",
    textAlign: "center",
    marginTop: 11,
    width: '50%',
    height: 20,
    backgroundColor: '#FFF3E0',
    borderRadius: 10,
  },
  featuredTitle: {
    fontWeight: '800',
    color: '#2f2d2c',
    fontSize: 20,
    marginTop: 10
  },
  featuredDescription: {
    fontSize: 14,
    color: '#9b9b9b',
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
    fontSize: 18,
    color: '#E65100',
    fontWeight: '800'
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#2f2d2c',
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
    fontWeight: '800',
    color: '#2f2d2c',
    marginBottom: 16,
  },
  input: {
    width: '100%',
    height: 56,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    paddingHorizontal: 16, // Adicionado para o texto não ficar colado na borda
    marginBottom: 16,     // Adicionado espaço antes do botão
  },
  messageText: {
    fontSize: 16,
    fontWeight: "800",
    color: "#2E7D32",
    textAlign: "center",
    marginTop: 20,
    width: '100%',
    height: 30,
    backgroundColor: '#E8F5E9',
    borderRadius: 10
  },
  subtitlequestion: {
    fontSize: 14,
    color: '#9b9b9b',
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

  }
});
