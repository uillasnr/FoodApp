import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

export default Banners = ({ banners }) => {
  return (
    <View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {banners.map((banner, index) => (
          <View key={index} style={styles.banner}>
            <TouchableOpacity>
              <Image source={banner.icone} style={styles.icone} />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  banner: {
    paddingRight: 10,
    marginTop: 15,
    marginBottom: 15,
  },
  icone: {
    width: 220,
    height: 120,
    borderRadius: 20,
    resizeMode: "cover",
  },
});
