import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

const AccordionIcons = ({icon,text}) => {
  return (
    <View style={styles.amenityContainer}>
        <Icon name={icon} size={20} style={styles.iconStyle} />
        <Text style={styles.textStyle}>{text}</Text>
    </View>
  )
}

export default AccordionIcons

const styles = StyleSheet.create({
    amenityContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      margin: 10,
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderRadius: 10,
      backgroundColor: '#f0f0f0',
    },
    iconStyle: {
      marginRight: 8,
      color: '#000',
    },
    textStyle: {
      fontSize: 14,
      color: '#000',
    },
  });