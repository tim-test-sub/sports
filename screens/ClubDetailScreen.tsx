import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { MapPin, Calendar, Users, Award, Bell, ChevronRight, Clock } from 'lucide-react-native';

const ClubDetailScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.header}>
                    <View style={styles.headerContent}>
                        <View style={styles.clubInfo}>
                            <Image
                                source={{ uri: 'https://via.placeholder.com/100' }}
                                style={styles.clubLogo}
                            />
                            <View>
                                <Text style={styles.clubName}>FC 샘플 클럽</Text>
                                <View style={styles.locationContainer}>
                                    <MapPin size={16} color="#fff" />
                                    <Text style={styles.locationText}>서울시 강남구</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.activityTimeContainer}>
                            <Clock size={14} color="#fff" />
                            <Text style={styles.activityTimeText}>매주 토요일 오후 2시 - 5시</Text>
                        </View>
                        <View style={styles.statsContainer}>
                            <StatBadge icon={<Users size={14} color="#fff" />} value="50명" label="회원" />
                            <StatBadge icon={<Calendar size={14} color="#fff" />} value="2010년" label="설립" />
                            <StatBadge icon={<Award size={14} color="#fff" />} value="15회" label="대회" />
                        </View>
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>클럽 소개</Text>
                    <Text style={styles.description}>
                        FC 샘플 클럽은 2010년에 설립된 아마추어 축구 클럽입니다. 우리는 매주 토요일 오후에 모여 축구를 즐기고 있습니다.
                    </Text>
                </View>

                <View style={styles.section}>
                    <View style={styles.noticeHeader}>
                        <Bell size={20} color="#3b82f6" />
                        <Text style={[styles.sectionTitle, { marginLeft: 8 }]}>최근 공지사항</Text>
                    </View>
                    <Text style={styles.noticeText}>다음 주 토요일 연습 경기가 있습니다. 모든 회원들의 참여 바랍니다!</Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>대회 기록</Text>
                    <TournamentItem name="2023 서울시 아마추어 리그" result="준우승" />
                    <TournamentItem name="2022 강남구 친선 대회" result="우승" />
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>갤러리</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.gallery}>
                        {[1, 2, 3, 4, 5].map((item) => (
                            <Image
                                key={item}
                                source={{ uri: `https://via.placeholder.com/150?text=Activity${item}` }}
                                style={styles.galleryImage}
                            />
                        ))}
                    </ScrollView>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>클럽 리더</Text>
                    <View style={styles.leaderContainer}>
                        <Image
                            source={{ uri: 'https://via.placeholder.com/50' }}
                            style={styles.leaderAvatar}
                        />
                        <View>
                            <Text style={styles.leaderName}>홍길동</Text>
                            <Text style={styles.leaderRole}>클럽 리더</Text>
                        </View>
                    </View>
                </View>

                <TouchableOpacity style={styles.joinButton}>
                    <Text style={styles.joinButtonText}>클럽 가입 신청</Text>
                    <ChevronRight size={20} color="#fff" />
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
};

// @ts-ignore
const StatBadge = ({ icon, value, label }) => (
    <View style={styles.statBadge}>
        <View style={styles.statIconContainer}>{icon}</View>
        <Text style={styles.statValue}>{value}</Text>
        <Text style={styles.statLabel}>{label}</Text>
    </View>
);

// @ts-ignore
const TournamentItem = ({ name, result }) => (
    <View style={styles.tournamentItem}>
        <Text style={styles.tournamentName}>{name}</Text>
        <Text style={styles.tournamentResult}>{result}</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3f4f6',
    },
    header: {
        backgroundColor: '#3b82f6',
        padding: 16,
    },
    headerContent: {
        alignItems: 'flex-start',
    },
    clubInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    clubLogo: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginRight: 16,
        borderWidth: 4,
        borderColor: '#fff',
    },
    clubName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 4,
    },
    locationText: {
        marginLeft: 4,
        color: '#fff',
        fontSize: 14,
    },
    activityTimeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 16,
        paddingVertical: 4,
        paddingHorizontal: 8,
        marginBottom: 8,
    },
    activityTimeText: {
        color: '#fff',
        fontSize: 12,
        marginLeft: 4,
    },
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    statBadge: {
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 8,
        padding: 8,
    },
    statIconContainer: {
        marginBottom: 4,
    },
    statValue: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 12,
    },
    statLabel: {
        color: '#fff',
        fontSize: 10,
    },
    section: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 16,
        marginHorizontal: 16,
        marginTop: 16,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    description: {
        color: '#4b5563',
        lineHeight: 20,
    },
    noticeHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    noticeText: {
        color: '#4b5563',
    },
    tournamentItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#e5e7eb',
        paddingVertical: 8,
    },
    tournamentName: {
        color: '#4b5563',
    },
    tournamentResult: {
        fontWeight: 'bold',
        color: '#3b82f6',
    },
    gallery: {
        flexDirection: 'row',
        marginTop: 8,
    },
    galleryImage: {
        width: 120,
        height: 120,
        borderRadius: 8,
        marginRight: 8,
    },
    leaderContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    leaderAvatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 16,
    },
    leaderName: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    leaderRole: {
        color: '#6b7280',
        fontSize: 14,
    },
    joinButton: {
        backgroundColor: '#3b82f6',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
        borderRadius: 12,
        margin: 16,
    },
    joinButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
        marginRight: 8,
    },
});

export default ClubDetailScreen;
