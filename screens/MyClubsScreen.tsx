import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

// 클럽 데이터 타입 정의
interface Club {
    id: string;
    name: string;
    location: string;
    members: number;
}

const MyClubsScreen = () => {
    // 상태 변수에 타입을 지정: Club 타입의 배열
    const [clubs, setClubs] = useState<Club[]>([]);

    useEffect(() => {
        const fetchClubs = async () => {
            // 클럽 데이터 예시
            const clubData: Club[] = [
                { id: '1', name: 'A 배드민턴 클럽', location: '서울', members: 30 },
                { id: '2', name: 'B 배드민턴 클럽', location: '부산', members: 25 },
                { id: '3', name: 'C 배드민턴 클럽', location: '대전', members: 40 },
            ];

            setClubs(clubData); // 클럽 데이터를 상태에 저장
        };

        fetchClubs();
    }, []);

    // 클럽 항목을 렌더링하는 함수
    const renderClubItem = ({ item }: { item: Club }) => (
        <View style={styles.clubItem}>
            <Text style={styles.clubName}>{item.name}</Text>
            <Text>위치: {item.location}</Text>
            <Text>멤버 수: {item.members}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>내 클럽 리스트</Text>
            <FlatList
                data={clubs}
                renderItem={renderClubItem}
                keyExtractor={item => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    clubItem: {
        padding: 16,
        marginVertical: 8,
        backgroundColor: '#f9f9f9',
        borderRadius: 8,
        elevation: 2,
    },
    clubName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default MyClubsScreen;
