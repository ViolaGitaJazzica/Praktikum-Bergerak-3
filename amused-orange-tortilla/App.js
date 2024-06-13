import React, { useState } from 'react';
import { View, Text, TextInput, Image, Button, ScrollView, FlatList, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const App = () => {
  const [text, setText] = useState('');
  const [items, setItems] = useState([
    { key: '1', name: 'ES ALA ALA', image: 'https://www.ruparupa.com/blog/wp-content/uploads/2021/12/Screen-Shot-2021-12-23-at-17.02.58.png' },
    { key: '2', name: 'ES KOPI', image: 'https://api-lotte.hollacode.com/api/static/inspirasi/1676431881959-menu-minuman-kekinian-ala-cafe-yang-dapat-dibuat-sendiri-di-rumah.jpg' },
    { key: '3', name: 'ES KRIM', image: 'https://cdns.klimg.com/merdeka.com/i/w/news/2023/01/27/1515915/540x270/6-resep-minuman-enak-dan-menyegarkan-mudah-dibuat.jpg' },
    { key: '4', name: 'ES DAWET', image: 'https://shopee.co.id/inspirasi-shopee/wp-content/uploads/2021/04/minuman-untuk-buka-puasa.webp' },
    { key: '5', name: 'KAYU MANIS ANGET', image: 'https://bobobox.com/blog/wp-content//uploads/2021/11/rekomendasi-minuman-hangat-1200x840.jpg' },
    { key: '6', name: 'JENANG', image: 'https://blog-images.reddoorz.com/uploads/image/file/3616/wedang-ronde.jpg' },
    { key: '7', name: 'KOPI ANGET', image: 'https://www.rukita.co/stories/wp-content/uploads/2021/07/resep-minuman-hangat-ala-kafe.jpeg' },
    { key: '8', name: 'TEH ANGET', image: 'https://asset-a.grid.id/crop/0x0:0x0/x/photo/2022/10/13/4-resep-minuman-hangat-untuk-saj-20221013022816.jpg' },
    { key: '9', name: 'ANGSLE', image: 'https://blog-static.mamikos.com/wp-content/uploads/2021/04/sekoteng.png' },
  ]);

  const addItem = () => {
    if (text) {
      setItems([...items, { key: Math.random().toString(), name: text, image: 'https://example.com/default-nasi.jpg' }]);
      setText('');
    }
  };

  const removeItem = (key) => {
    setItems(items.filter(item => item.key !== key));
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>DAFTAR MENU ES ANGET</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Masukkan nama minuman"
          value={text}
          onChangeText={setText}
        />
        <Button title="Tambahkan Item" onPress={addItem} color="#841584" />
      </View>
      <Image
        style={styles.logoImage}
        source={{ uri: 'https://w7.pngwing.com/pngs/647/1018/png-transparent-technology-font-technology-electronics-animated-cartoon-drink.png' }}
      />
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image style={styles.itemImage} source={{ uri: item.image }} />
            <Text style={styles.itemText}>{item.name}</Text>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => Alert.alert(
                "Hapus Item",
               
                [
                  { text: "Tidak" },
                  { text: "Ya", onPress: () => removeItem(item.key) }
                ]
              )}
            >
              <Text style={styles.deleteButtonText}>Hapus</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  header: {
    padding: 20,
    backgroundColor: '#6200ea',
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  inputContainer: {
    marginBottom: 20,
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  logoImage: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 20,
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 5,
    marginBottom: 10,
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 10,
  },
  itemText: {
    fontSize: 18,
    flex: 1,
  },
  deleteButton: {
    backgroundColor: '#ff5252',
    padding: 10,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: '#fff',
  },
});

export default App;