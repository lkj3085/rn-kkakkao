import { FlatList, Platform, StyleSheet, View } from "react-native";
import Header from "./src/Header";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Profile from "./src/Profile";
import { friendProfiles, myProfile } from "./src/data";
import Margin from "./src/Margin";
import Division from "./src/Division";
import FriendSection from "./src/FriendSection";
import FriendList from "./src/FriendList";
import { useState } from "react";
import TabBar from "./src/TabBar";

export default function App() {
  const [isOpened, setIsOpened] = useState(true);
  const [selectedTabIdx, setSelectedTabIdx] = useState(0);

  const onPressArrow = () => {
    setIsOpened(!isOpened);
  };

  const ItemSeparatorComponent = () => <Margin height={13} />;
  const renderItem = ({ item }) => (
    <View>
      <Profile
        uri={item.uri}
        name={item.name}
        introduction={item.introduction}
        isMe={false}
      />
    </View>
  );
  const ListHeaderComponent = () => (
    <View style={{ backgroundColor: "white" }}>
      <Header />

      <Margin height={10} />

      <Profile
        uri={myProfile.uri}
        name={myProfile.name}
        introduction={myProfile.introduction}
        isMe={true}
      />

      <Margin height={15} />
      <Division />
      <Margin height={12} />
      <FriendSection
        friendProfileLen={friendProfiles.length}
        onPress={onPressArrow}
        isOpened={isOpened}
      />
      <Margin height={5} />
    </View>
  );

  const ListFooterComponent = () => <Margin height={10} />;

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(_, index) => index}
        stickyHeaderIndices={[0]}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        data={isOpened ? friendProfiles : []}
        ItemSeparatorComponent={ItemSeparatorComponent}
        renderItem={renderItem}
        ListHeaderComponent={ListHeaderComponent}
        ListFooterComponent={ListFooterComponent}
      />
      <TabBar
        selectedTabIdx={selectedTabIdx}
        setSelectedTabIdx={setSelectedTabIdx}
      />
    </View>
  );

  // return (
  //   <SafeAreaProvider>
  //     <SafeAreaView
  //       style={styles.container}
  //       edges={["right", "bottom", "left"]}>
  //       <View style={{ flex: 1, paddingHorizontal: 15 }}>
  //         <Header />

  //         <Margin height={10} />

  //         <Profile
  //           uri={myProfile.uri}
  //           name={myProfile.name}
  //           introduction={myProfile.introduction}
  //         />

  //         <Margin height={15} />
  //         <Division />
  //         <Margin height={12} />
  //         <FriendSection
  //           friendProfileLen={friendProfiles.length}
  //           onPress={onPressArrow}
  //           isOpened={isOpened}
  //         />
  //         <FriendList data={friendProfiles} isOpened={isOpened} />
  //       </View>
  //       <TabBar
  //         selectedTabIdx={selectedTabIdx}
  //         setSelectedTabIdx={setSelectedTabIdx}
  //       />
  //     </SafeAreaView>
  //   </SafeAreaProvider>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? 15 : 40,
    paddingVertical: Platform.OS === "android" ? 0 : 15,
  },
});
