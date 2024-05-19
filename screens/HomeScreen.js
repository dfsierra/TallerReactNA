import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

const HomeScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>¡Bienvenido!</Text>
      <Text style={styles.text}>
        Bienvenido a la aplicación de ejemplo para la clase de Diseño de Software I.{"\n"}
        Integrantes: {"\n"}
        Daniel Felipe Sierra {"\n"}
        Jason Estrada
      </Text>
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam convallis tempor iaculis. Mauris sit amet nisi volutpat, pharetra turpis eget, mattis ex. Quisque venenatis est in ex lacinia tempor. Vestibulum varius tellus pellentesque augue gravida mollis. Proin sagittis in neque nec elementum. Etiam sed gravida risus. Nulla leo mi, faucibus at odio et, fermentum porttitor nisl. Ut quis consequat tellus, cursus molestie est. Praesent a vestibulum ipsum, vitae rhoncus purus. Aliquam congue ultricies ultricies. Morbi et tempor nunc, in mollis metus.

Phasellus congue id dui a fermentum. Curabitur non tellus maximus mauris imperdiet convallis. Sed molestie vulputate erat a tempus. Donec placerat, enim ullamcorper ornare auctor, libero metus tincidunt nulla, vitae aliquet elit turpis ac neque. Donec malesuada tincidunt vulputate. Nulla et erat pellentesque, feugiat diam id, convallis dolor. Cras pretium, leo eget dapibus eleifend, nisl eros aliquam magna, vel ornare turpis nisl eu justo. Fusce malesuada id leo sagittis auctor. Maecenas libero nisi, iaculis sit amet purus eu, viverra auctor nunc. Morbi justo mauris, elementum quis dolor ac, fringilla lobortis justo. Donec eu ligula porta, sollicitudin dui id, vulputate enim. Cras ultricies dignissim blandit.

Duis pretium quam erat, vitae lacinia ex euismod rutrum. Phasellus bibendum fermentum lorem, a laoreet urna. Pellentesque facilisis odio id odio vulputate interdum. Cras vitae molestie odio, ac ornare tellus. Donec viverra urna sed pellentesque pretium. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec elit metus, ultricies non nunc a, molestie sollicitudin dolor. Maecenas elementum non tellus a feugiat. Etiam nec nisl sit amet elit pellentesque imperdiet quis et orci. Nullam a velit eget odio facilisis ultricies vel a leo. Nunc pulvinar pretium imperdiet. Vestibulum pretium tincidunt orci, vitae viverra lacus mattis eget. Morbi vel blandit tellus. Nullam consectetur enim turpis, sed molestie sem varius et. In laoreet semper congue. Sed lobortis elit ut leo finibus, quis molestie lacus malesuada.

Ut at ex ac odio tristique tempus. Donec lobortis metus mauris, sit amet ornare nulla tempus at. Phasellus in viverra quam. Vivamus dapibus lorem vitae nunc tincidunt euismod. Praesent placerat tincidunt eros ut vehicula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce massa nisl, semper quis pretium eu, rhoncus nec dui.

Cras id condimentum ante. Morbi pulvinar tincidunt euismod. Fusce ut diam quis dui vulputate vestibulum. Maecenas massa massa, varius ut aliquam vitae, vestibulum et enim. Pellentesque placerat justo luctus, ullamcorper metus et, vulputate neque. Suspendisse quis neque leo. Nam feugiat eros sed nisi tempor dictum.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
  },
});

export default HomeScreen;
