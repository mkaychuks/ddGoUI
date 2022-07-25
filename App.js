import { StatusBar } from "expo-status-bar";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import {
  AdjustmentsIcon,
  DotsVerticalIcon,
  FireIcon,
  SearchIcon,
} from "react-native-heroicons/solid";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.headerContainer}>
        <View style={styles.searchContainer}>
          <SearchIcon fill="black" size={20} />
          <TextInput placeholder="Search or type URL" style={styles.text} />
        </View>
        <FireIcon fill="black" size={20} />
        <AdjustmentsIcon fill="black" size={20} />
        <DotsVerticalIcon fill="black" size={20} />
      </View>
      <View style={styles.mainBody}>
        <Image
          source={{
            uri: "https://th.bing.com/th/id/R.e172013c933bc44c7edec94a15226b60?rik=L77oNzoYPYumTw&riu=http%3a%2f%2fdwglogo.com%2fwp-content%2fuploads%2f2016%2f01%2fDuckDuckGo-Logo.png&ehk=0BMYsGx%2fYianLjoPXqB4M3E2KnpK9gBLBJBWM2xQHoE%3d&risl=&pid=ImgRaw&r=0",
          }}
          style={styles.image}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerContainer: {
    paddingHorizontal: 8,
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 10,
    borderBottomColor: "#cccc",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#cccc",
    borderRadius: 60,
    paddingVertical: 8,
    paddingStart: 8,
    width: "70%",
  },
  text: {
    paddingStart: 8,
  },
  mainBody: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#f8f5f5",
    paddingTop: 4,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 50,
  },
});
