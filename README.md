## Darshilkumar Karkar (A00203357)
F2025 MAD201-01 Cross Platform MA – Assignment 4
Overview

In this assignment, students will create a Personal Portfolio App using React Native and Expo.
The app should include multiple screens, demonstrate the use of core React Native components, and showcase well-organized layouts and styling using Flexbox and StyleSheet.
By the end of this project, students will understand how to structure a React Native app, apply consistent styles, and handle navigation between basic screens.

Objective

Students will be able to:

Build a multi-screen React Native application using Expo.

Use core components: View, Text, Button, Image, ScrollView, TouchableOpacity.

Style layouts using Flexbox, StyleSheet, and inline styles.

Create reusable components and apply consistent theming.

Navigate between screens using React Navigation.

App Concept

Develop a simple portfolio application that introduces the user (student) and showcases their skills, hobbies, and projects.

The app will include three screens:

Home Screen – Displays the user’s name, photo, and short introduction.

Projects Screen – Displays a list of sample projects in card format using Flexbox.

Contact Screen – Displays social links or contact buttons (email, LinkedIn, GitHub).

Requirements
Part A – Home Screen

Display:

Profile picture (Image)

Name (Text)

Short bio (Text)

Use Flexbox to center and align content vertically.

Add a button (e.g., TouchableOpacity) that navigates to the Projects screen.

Example:

<TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Projects')}>
  <Text style={styles.buttonText}>View My Projects</Text>
</TouchableOpacity>

Part B – Projects Screen

Use a ScrollView or FlatList to display a set of projects.

Each project card should contain:

Project name

Short description

A “Learn More” button (non-functional)

Use Flexbox for grid or column layout.

Example:

const projects = [
  { id: 1, title: "Weather App", description: "Displays current weather using an API" },
  { id: 2, title: "ToDo List", description: "Task tracker with local storage" },
];

Part C – Contact Screen

Display contact options using icons or buttons (LinkedIn, GitHub, Email).
Layout should demonstrate row and column alignment using Flexbox.

Example:

<View style={styles.contactRow}>
  <TouchableOpacity><Text style={styles.link}>LinkedIn</Text></TouchableOpacity>
  <TouchableOpacity><Text style={styles.link}>GitHub</Text></TouchableOpacity>
</View>

Navigation Setup

Use React Navigation (Stack Navigation) to switch between screens:

npm install @react-navigation/native @react-navigation/native-stack
npx expo install react-native-screens react-native-safe-area-context


Example setup:

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Projects" component={ProjectsScreen} />
        <Stack.Screen name="Contact" component={ContactScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

Styling Requirements

Use a stylesheet for all styles.

Example:

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});


Apply:

A consistent color scheme

Consistent spacing

Flexbox properties: flexDirection, justifyContent, alignItems

Documentation

When you submit your Flutter program, include proper documentation. Documentation is part of programming best practices and will count toward your grade.

Header Comments

Include at the top of each Dart file:

Course code and lab number

Your full name and Student ID

A short description of what the program does

Class & Method Documentation (DartDoc style)

Example:

/// Represents a travel destination.
class Destination {
  /// Name of the destination.
  final String name;

  /// Toggles favorite status for this destination.
  void toggleFavorite() { ... }
}

Inline Comments

Use inline comments wherever necessary.

Submission
1. Create a Repository

Create a public GitHub repository.

Name it: MAD201-ASSIGNMENT02-YOURNAME

Add a README.md with:

Lab title and your name / ID

A short description of the project

2. Commit Requirements

At least 5 commits

Commit messages must be meaningful (not “update” or “fix”).

3. Pull Request Requirements

At least 3 Pull Requests (PRs) with clear titles and descriptions.

Each PR should represent a logical feature or change.

Examples:

Add Student class and constructors.

Implement Gradebook menu and input handling.

Add utilities (operator demo, type casting, recursion).

Workflow:

Create a new branch (example: feature-student-class)

Push changes

Open PR into main

Merge after review (self-review allowed)

4. Final Submission

Ensure your repo contains:

All code with complete documentation

At least 5 commits

At least 3 merged PRs

A README.md explaining your project

5. What to Submit

Submit your GitHub Repository link

Ensure the repo is public

Marking Rubric (30 points)

Functionality – 15 marks

Code Quality & Structure – 3 marks

UI / UX Design – 2 marks

GitHub Workflow – 5 marks

Documentation – 5 marks
