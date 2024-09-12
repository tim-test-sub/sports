import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const MathedView = () => {
    const [selectedTeam, setSelectedTeam] = useState<string | null>(null);

    const handleTeamPress = (team: string) => {
        setSelectedTeam(team);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>8팀 토너먼트 대진표</Text>
            <View style={styles.bracketContainer}>
                <View style={styles.round}>
                    <Match team1="팀 1" team2="팀 2" onPress={handleTeamPress} />
                    <Match team1="팀 3" team2="팀 4" onPress={handleTeamPress} />
                    <Match team1="팀 5" team2="팀 6" onPress={handleTeamPress} />
                    <Match team1="팀 7" team2="팀 8" onPress={handleTeamPress} />
                </View>
                <View style={styles.round}>
                    <Match team1="승자 1-2" team2="승자 3-4" onPress={handleTeamPress} />
                    <Match team1="승자 5-6" team2="승자 7-8" onPress={handleTeamPress} />
                </View>
                <View style={styles.round}>
                    <Match team1="결승진출 1" team2="결승진출 2" onPress={handleTeamPress} />
                </View>
                <View style={styles.winner}>
                    <Text style={styles.winnerText}>우승팀</Text>
                </View>
            </View>

            {selectedTeam && (
                <View style={styles.teamInfo}>
                    <Text style={styles.teamInfoText}>선택된 팀: {selectedTeam}</Text>
                    <Text style={styles.teamInfoText}>여기에 팀에 대한 자세한 정보를 표시하세요.</Text>
                </View>
            )}
        </ScrollView>
    );
};

const Match = ({ team1, team2, onPress }: { team1: string, team2: string, onPress: (team: string) => void }) => (
    <View style={styles.match}>
        <TouchableOpacity onPress={() => onPress(team1)} style={styles.teamContainer}>
            <Text style={styles.teamText}>{team1}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onPress(team2)} style={styles.teamContainer}>
            <Text style={styles.teamText}>{team2}</Text>
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f3f3f3',
        minHeight: '100%',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
        color: '#1e40af',
    },
    bracketContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    round: {
        flexDirection: 'column',
        justifyContent: 'center',
    },
    match: {
        marginBottom: 16,
    },
    teamContainer: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 8,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4,
    },
    teamText: {
        textAlign: 'center',
        fontSize: 16,
    },
    winner: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 24,
    },
    winnerText: {
        backgroundColor: '#fbbf24',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
        padding: 12,
        borderRadius: 8,
        textAlign: 'center',
    },
    teamInfo: {
        marginTop: 32,
        padding: 16,
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4,
    },
    teamInfoText: {
        fontSize: 16,
        color: '#333',
    },
});

export default MathedView;
