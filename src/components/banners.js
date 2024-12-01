import { useEffect, useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { getBanner } from "../services/api";

export default Banners = ({onBannerPress}) => {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    const loadBanners = async () => {
      try {
        const data = await getBanner();

        setBanners(data);
      } catch (error) {
        console.error("Error loading Banners", error);
      }
    };

    loadBanners();
  }, []);

  const handleBannerPress = (banner) => {
    onBannerPress("", "", banner.banner_id);
  };

  return (
    <View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {banners.map((banner, index) => (
          <View key={index} style={styles.banner}>
            <TouchableOpacity  onPress={() => handleBannerPress(banner)}>
              <Image source={{ uri: banner.icon }} style={styles.icone} />
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
    marginBottom: 15,
  },
  icone: {
    width: 220,
    height: 120,
    borderRadius: 20,
    resizeMode: "cover",
  },
});
