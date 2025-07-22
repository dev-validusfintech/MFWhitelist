import { FontAwesome5, Ionicons, MaterialIcons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        🎉 Welcome to <Text style={styles.highlight}>MFWhitelist</Text>
      </Text>

      <Text style={styles.subtitle}>
        Your trusted gateway to Mutual Fund onboarding.
      </Text>

      <View style={styles.featureList}>
        {[
    { icon: <Ionicons name="flash-outline" size={22} color="#4CAF50" />, text: 'Lightning-fast performance' },
    { icon: <MaterialIcons name="update" size={22} color="#4CAF50" />, text: 'Instant OTA updates' },
    { icon: <FontAwesome5 name="mobile-alt" size={20} color="#4CAF50" />, text: 'One codebase for iOS, Android, and Web' },
  ].map((item, index) => (
    <View key={index} style={styles.featureItem}>
      <View style={styles.iconContainer}>{item.icon}</View>
      <Text style={styles.featureText}>{item.text}</Text>
    </View>
  ))}
    
      </View>

      <Text style={styles.otaNote}>
  🔧 We're continuously improving the experience. New features and UI components will be added soon — all without needing app store updates, thanks to Expo OTA.
</Text>


      <Text style={styles.footer}>
        This is just the beginning — stay tuned for regular feature updates via Expo OTA.
      </Text>

      <Text style={styles.version}>
        App Version: {Constants.manifest?.version || '1.0.0'}
      </Text>
    </View>
  );
  
}

const styles = StyleSheet.create({

  featureList: {
  width: '100%',
  marginTop: 20,
},
featureItem: {
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 16,
},
iconContainer: {
  width: 28,
  alignItems: 'center',
},
featureText: {
  fontSize: 16,
  color: '#333',
  flex: 1,
  marginLeft: 12,
},
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#111',
    textAlign: 'center',
    marginBottom: 10,
  },
  highlight: {
    color: '#007AFF',
  },
  otaNote: {
  fontSize: 13,
  color: '#666',
  textAlign: 'center',
  marginTop: 20,
  paddingHorizontal: 10,
  lineHeight: 18,
},

  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
  },


  icon: {
    marginRight: 12,
  },
 
  footer: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  version: {
    marginTop: 20,
    fontSize: 13,
    color: '#aaa',
  },
});
