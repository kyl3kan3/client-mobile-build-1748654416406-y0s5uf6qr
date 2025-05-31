import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

// Import available components (adjust based on actual converted files)
const LearningModules = () => <View><Text>Learning Modules</Text></View>;
const ProgressDashboard = () => <View><Text>Progress Dashboard</Text></View>;
const PracticeLab = () => <View><Text>Practice Lab</Text></View>;
const ModuleAssessment = () => <View><Text>Module Assessment</Text></View>;

export default function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');

  const renderPage = () => {
    switch(currentPage) {
      case 'dashboard':
        return <ProgressDashboard />;
      case 'modules':
        return <LearningModules />;
      case 'practice':
        return <PracticeLab />;
      case 'assessment':
        return <ModuleAssessment />;
      default:
        return <ProgressDashboard />;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎓 AI Learning Companion</Text>
      
      {/* Navigation */}
      <View style={styles.navigation}>
        <TouchableOpacity 
          style={[styles.navButton, currentPage === 'dashboard' && styles.activeNav]}
          onPress={() => setCurrentPage('dashboard')}
        >
          <Text style={styles.navText}>📊 Dashboard</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.navButton, currentPage === 'modules' && styles.activeNav]}
          onPress={() => setCurrentPage('modules')}
        >
          <Text style={styles.navText}>📚 Modules</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.navButton, currentPage === 'practice' && styles.activeNav]}
          onPress={() => setCurrentPage('practice')}
        >
          <Text style={styles.navText}>🧪 Practice</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.navButton, currentPage === 'assessment' && styles.activeNav]}
          onPress={() => setCurrentPage('assessment')}
        >
          <Text style={styles.navText}>📝 Assessment</Text>
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <ScrollView style={styles.content}>
        {renderPage()}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
    paddingTop: 50,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#1e293b',
  },
  navigation: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  navButton: {
    flex: 1,
    padding: 15,
    marginHorizontal: 5,
    backgroundColor: '#e2e8f0',
    borderRadius: 12,
    alignItems: 'center',
  },
  activeNav: {
    backgroundColor: '#3b82f6',
  },
  navText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#475569',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
});