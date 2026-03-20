import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const IconButton = ({ onPress, icon, text }) => {
  const getIconEmoji = () => {
    switch (icon) {
      case 'google':
        return '🇬';
      case 'facebook':
        return '🇫';
      default:
        return '🔵';
    }
  };

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.icon}>{getIconEmoji()}</Text>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginVertical: 8,
  },
  icon: {
    fontSize: 24,
    marginRight: 12,
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
});

export default IconButton;