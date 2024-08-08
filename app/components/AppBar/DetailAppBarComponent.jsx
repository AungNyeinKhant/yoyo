import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { CommonStyles } from '../../style/CommonStyles';
import backIcon from '../../assets/icons/backIcon.png';
import moreIcon from '../../assets/icons/moreIcon.png';
import theme from '../../style/colors';

const DetailAppBarComponent = ({ title, onMorePress, navigation }) => (
  <View style={styles.headerIcons}>
    <TouchableOpacity onPress={navigation.goBack}>
      <Image
        source={backIcon}
        style={CommonStyles.appBarIcon} 
      />
    </TouchableOpacity>
    <Text style={styles.title}>{title}</Text>
    {onMorePress ? (
      <TouchableOpacity onPress={onMorePress}>
        <Image
          source={moreIcon}
          style={CommonStyles.appBarIcon}
        />
      </TouchableOpacity>
    ) : (
      <View style={styles.placeholder} />
    )}
  </View>
);

const styles = StyleSheet.create({
  headerIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 16,
  },
  title: {
    fontWeight: '900',
    fontSize: 18,
    color: theme.colors.textDark,
    marginTop:10
  },
  placeholder: {
    width: 30,  // To maintain spacing consistency
  },
});

export default DetailAppBarComponent;
