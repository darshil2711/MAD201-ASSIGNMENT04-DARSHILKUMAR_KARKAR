#Darshilkumar Karkar(A00203357)
#F2025 MAD201-01 Cross Platform MA
#Assignment 4
Overview
In this assignment, students will create a Personal Portfolio App using React Native and Expo.
The app should include multiple screens, demonstrate the use of core React Native components, and
showcase well-organized layouts and styling using Flexbox and StyleSheet.
By the end of this project, students will understand how to structure a React Native app, apply consistent
styles, and handle navigation between basic screens.
Objective
Students will be able to:
• Build a multi-screen React Native application using Expo.
• Use core components: View, Text, Button, Image, ScrollView, TouchableOpacity.
• Style layouts using Flexbox, StyleSheet, and inline styles.
• Create reusable components and apply consistent theming.
• Navigate between screens using React Navigation.
App Concept
Develop a simple portfolio application that introduces the user (student) and showcases their skills,
hobbies, and projects.
The app will include three screens:
• Home Screen – Displays the user’s name, photo, and short introduction.
• Projects Screen – Displays a list of sample projects in card format using Flexbox.
• Contact Screen – Displays social links or contact buttons (email, LinkedIn, GitHub).
Requirements
Part A – Home Screen
• Display:
o Profile picture (Image)
o Name (Text)
o Short bio (Text)
• Use Flexbox to center and align content vertically.
• Add a button (e.g., TouchableOpacity) that navigates to the Projects screen.
• Example:
<TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Projects')}>
<Text style={styles.buttonText}>View My Projects</Text>
</TouchableOpacity>
Part B – Projects Screen
• Use a ScrollView or FlatList to display a set of projects.
• Each project card should contain:
o Project name
o Short description
o A “Learn More” button (non-functional)
• Use Flexbox for grid or column layout.
• Example:
const projects = [
{ id: 1, title: "Weather App", description: "Displays current weather using an API" },
{ id: 2, title: "ToDo List", description: "Task tracker with local storage" },
];
Part C – Contact Screen
• Display contact options using icons or buttons (LinkedIn, GitHub, Email).
• Layout should demonstrate row and column alignment using Flexbox.
• Example:
<View style={styles.contactRow}>
<TouchableOpacity><Text style={styles.link}>LinkedIn</Text></TouchableOpacity>
<TouchableOpacity><Text style={styles.link}>GitHub</Text></TouchableOpacity>
</View>
Navigation Setup
• Use React Navigation (Stack Navigation) to switch between screens:
o npm install @react-navigation/native @react-navigation/native-stack
o npx expo install react-native-screens react-native-safe-area-context
• Example setup:
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
• Use a stylesheet for all styles. Example:
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
• Apply consistent color scheme and spacing.
• Demonstrate understanding of Flexbox properties: flexDirection, justifyContent, alignItems
.
Documentation
When you submit your Flutter program, include proper documentation. Documentation is part of
programming best practices and will count toward your grade.
• Header Comments at the top of each Dart file:Include:
o Course code and lab number
o Your full name and Student ID
o A short description of what program does.
• Class & Method Documentation using DartDoc style (///):
o /// Represents a travel destination.
o class Destination {
o /// Name of the destination.
o final String name;
o
o /// Toggles favorite status for this destination.
o void toggleFavorite() { ... }
o }
• Inline Comments
Submission
All work for this lab must be submitted through GitHub. You will practice both coding and professional
collaboration workflows.
1. Create a Repository
a. Go to Github and create a new public repository.
b. Name it : MAD201-ASSIGNMENT02-YOURNAME
c. Add a README.md with:
i. Lab title and your name / ID
ii. A short description of the project
2. Commit Requirements
a. You must have at least 5 commits.
b. Commits should be meaningful and descriptive (not “update” or “fix”).
3. Pull Request Requirements.
a. You must create at least 3 Pull Requests (PRs), each with a clear title and description.
b. Each PR should represent a logical feature or change. For example:
i. Add Student class and constructors.
ii. Implement Gradebook menu and input handling
iii. Add utilities (operator demo, type casting, recursion)
c. Even if you are working alone, you can:
i. Create a new branch (e.g., feature-student-class)
ii. Push changes
iii. Open a PR into main
iv. Merge it after review (self-review allowed in this case).
4. Final Submission
a. Push your final version to Github.
b. Ensure your repo has:
i. All code with complete documentation
ii. At least 5 meaningful commits.
iii. At least 3 merged pull requests.
iv. A README.md explaining your project.
5. What to Submit to Instructor
a. Submit the GitHub Repository link.
b. Make sure the repo is public.
Marking Rubric (30 points)
• Functionality (15 marks)
• Code Quality & Structure (3 marks)
• UI / UX Design (2 marks)
• GitHub Workflow (5 marks)
• Documentation ( 5 marks)
