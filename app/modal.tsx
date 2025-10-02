import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from "expo-router";
import { StyleSheet } from "react-native";

export default function Modal() {
  return (
    <ThemedView style={styles.container}>
      <Link href="/Login/login" style={styles.link}>
        <ThemedText type="link">Go to login</ThemedText>
      </Link>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
