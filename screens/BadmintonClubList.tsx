import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// 클럽 데이터 인터페이스
interface Club {
  id: number;
  name: string;
  location: string;
  members: number;
  meetingDay: string;
  image: string;
  latitude: number;
  longitude: number;
}

// 클럽 데이터 리스트
const clubs: Club[] = [
  {
    id: 1,
    name: '서울 셔틀콕스',
    location: '서울시 강남구',
    members: 35,
    meetingDay: '매주 토요일',
    image: 'https://via.placeholder.com/100',
    latitude: 37.5172,
    longitude: 127.0473
  },
  {
    id: 2,
    name: '인천 스매시어스',
    location: '인천시 연수구',
    members: 28,
    meetingDay: '매주 일요일',
    image: 'https://via.placeholder.com/100',
    latitude: 37.4092,
    longitude: 126.6792
  },
  {
    id: 3,
    name: '부산 라켓마스터즈',
    location: '부산시 해운대구',
    members: 42,
    meetingDay: '매주 수요일, 토요일',
    image: 'https://via.placeholder.com/100',
    latitude: 35.1631,
    longitude: 129.1637
  },
  {
    id: 4,
    name: '대전 윙스파이크',
    location: '대전시 유성구',
    members: 20,
    meetingDay: '매주 금요일',
    image: 'https://via.placeholder.com/100',
    latitude: 36.3504,
    longitude: 127.3845
  }
];

// 클럽 카드 컴포넌트
const ClubCard = ({ club, onPress, onMapPress }: { club: Club, onPress: () => void, onMapPress: () => void }) => (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: club.image }} style={styles.image} />
      <View style={styles.cardContent}>
        <View>
          <Text style={styles.clubName}>{club.name}</Text>
          <Text style={styles.clubInfo}>{club.location} • {club.members}명 • {club.meetingDay}</Text>
        </View>
        <TouchableOpacity style={styles.mapButton} onPress={onMapPress}>
          <Text style={styles.mapButtonText}>지도 보기</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
);

// 배드민턴 클럽 리스트 컴포넌트
const BadmintonClubList = () => {
  const navigation = useNavigation();

  // 클럽 상세 보기
  const handleClubPress = (clubId: number) => {
    // @ts-ignore
    navigation.navigate('ClubDetailScreen', { clubId });
  };

  // 지도 보기 모달 열기
  const handleMapPress = (club: Club) => {
    //setSelectedClub(club);
    //setModalVisible(true);

    navigation.navigate('MapScreen', {
      latitude: club.latitude,
      longitude: club.longitude,
      name: club.name,
    });

  };

  return (
      <View style={styles.container}>
        <Text style={styles.title}>배드민턴 동호회 목록</Text>
        <FlatList
            data={clubs}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <ClubCard
                    club={item}
                    onPress={() => handleClubPress(item.id)}
                    onMapPress={() => handleMapPress(item)}
                />
            )}
            contentContainerStyle={styles.listContainer}
        />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  listContainer: {
    paddingBottom: 16,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 16,
    overflow: 'hidden',
    elevation: 2,
  },
  image: {
    width: 100,
    height: 100,
  },
  cardContent: {
    flex: 1,
    padding: 12,
    justifyContent: 'space-between',
  },
  clubName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  clubInfo: {
    fontSize: 14,
    color: '#666',
  },
  mapButton: {
    alignSelf: 'flex-end',
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
  },
  mapButtonText: {
    fontSize: 12,
    color: '#333',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalTitle: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalText: {
    marginBottom: 10,
    textAlign: 'center',
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 15,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    flex: 1,
    marginHorizontal: 5,
  },
  buttonCancel: {
    backgroundColor: '#2196F3',
  },
  buttonConfirm: {
    backgroundColor: '#4CAF50',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
});

export default BadmintonClubList;
