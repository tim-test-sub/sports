import React, { useState, useCallback } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, runOnJS } from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const FRIEND_ITEM_HEIGHT = 80;

const FriendList = () => {
    const [friends, setFriends] = useState([
        { id: '1', name: '김철수', status: '온라인', avatar: 'https://via.placeholder.com/40' },
        { id: '2', name: '이영희', status: '오프라인', avatar: 'https://via.placeholder.com/40' },
        { id: '3', name: '박지성', status: '자리비움', avatar: 'https://via.placeholder.com/40' },
    ]);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentItemId, setCurrentItemId] = useState<string | null>(null); // 아이템 ID를 상태로 저장

    const deleteFriend = useCallback((id: string) => {
        setFriends(currentFriends => currentFriends.filter(friend => friend.id !== id));
    }, []);

    const translateX = useSharedValue(0);
    const itemHeight = useSharedValue(FRIEND_ITEM_HEIGHT);

    const rStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: translateX.value }],
    }));

    const rContainerStyle = useAnimatedStyle(() => ({
        height: itemHeight.value,
        marginBottom: itemHeight.value === 0 ? 0 : 10,
    }));

    // panGesture 내부에 onStart 핸들러를 추가하여 제스처 시작 시 item ID를 설정
    const panGesture = Gesture.Pan()
        .onBegin(() => {
            if (currentItemId !== null) {
                setCurrentItemId(currentItemId); // currentItemId가 설정됨
            }
        })
        .onUpdate((event) => {
            translateX.value = event.translationX;
        })
        .onEnd(() => {
            const shouldBeDismissed = translateX.value < -100;
            if (shouldBeDismissed && currentItemId !== null) { // currentItemId가 null이 아닐 때 처리
                translateX.value = withTiming(-1000);
                itemHeight.value = withTiming(0, {}, (isFinished) => {
                    if (isFinished) {
                        runOnJS(deleteFriend)(currentItemId); // currentItemId를 전달
                    }
                });
            } else {
                translateX.value = withTiming(0);
            }
        });

    const renderFriendItem = useCallback(({ item }: { item: { id: string; name: string; status: string; avatar: string } }) => {
        const getStatusColor = (status: string) => {
            switch (status) {
                case '온라인': return '#4CAF50';
                case '오프라인': return '#9E9E9E';
                case '자리비움': return '#FFC107';
                default: return '#9E9E9E';
            }
        };

        return (
            <Animated.View style={rContainerStyle}>
                <GestureDetector gesture={panGesture}>
                    <Animated.View style={[styles.friendItem, rStyle]}>
                        <Image source={{ uri: item.avatar }} style={styles.avatar} />
                        <View style={styles.friendInfo}>
                            <Text style={styles.name}>{item.name}</Text>
                            <Text style={[styles.status, { color: getStatusColor(item.status) }]}>{item.status}</Text>
                        </View>
                        <TouchableOpacity style={styles.chatButton} onPress={() => console.log('Chat with', item.name)}>
                            <FontAwesome name="comments" size={20} color="#007AFF" />
                            <Text style={styles.chatButtonText}>채팅하기</Text>
                        </TouchableOpacity>
                    </Animated.View>
                </GestureDetector>
            </Animated.View>
        );
    }, [deleteFriend, rStyle, rContainerStyle, panGesture]);

    const filteredFriends = friends.filter(friend =>
        friend.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <GestureHandlerRootView style={styles.container}>
            <Text style={styles.title}>친구 목록</Text>
            <View style={styles.searchContainer}>
                <FontAwesome name="comments" size={20} color="#999" style={styles.searchIcon} />
                <TextInput
                    style={styles.searchInput}
                    placeholder="친구 검색..."
                    value={searchTerm}
                    onChangeText={setSearchTerm}
                />
            </View>
            {filteredFriends.map(friend => (
                <View key={friend.id}>
                    {renderFriendItem({ item: friend })}
                </View>
            ))}
        </GestureHandlerRootView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#F5F5F5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    searchIcon: {
        marginRight: 10,
    },
    searchInput: {
        flex: 1,
        height: 40,
    },
    friendItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 10,
        height: FRIEND_ITEM_HEIGHT,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    friendInfo: {
        flex: 1,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    status: {
        fontSize: 14,
    },
    chatButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F0F0F0',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 15,
    },
    chatButtonText: {
        marginLeft: 5,
        color: '#007AFF',
    },
});

export default FriendList;
