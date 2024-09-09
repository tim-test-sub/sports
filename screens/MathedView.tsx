import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

// 각 라운드의 매치를 정의하는 인터페이스
interface Match {
    teamA: string | null;
    teamB: string | null;
}

// 팀 수에 맞춰 라운드를 생성하는 함수
const generateRounds = (teams: (string | null)[]): { rounds: Match[][] } => {
    const rounds: { rounds: Match[][] } = { rounds: [] };
    let currentRoundTeams = teams;

    // 부전승 처리
    if (currentRoundTeams.length % 2 !== 0) {
        currentRoundTeams.push(null); // 홀수일 경우 부전승 팀 추가
    }

    // 각 라운드 생성
    while (currentRoundTeams.length > 1) {
        const nextRound: Match[] = [];
        for (let i = 0; i < currentRoundTeams.length; i += 2) {
            nextRound.push({
                teamA: currentRoundTeams[i],
                teamB: currentRoundTeams[i + 1],
            });
        }
        rounds.rounds.push(nextRound);

        // 승리한 팀만 다음 라운드로 진출
        currentRoundTeams = nextRound.map((match) =>
            match.teamA && match.teamB ? `Winner of Match ${match.teamA} vs ${match.teamB}` : match.teamA || match.teamB
        );
    }

    return rounds;
};

// 팀 리스트
const teams = [
    'Team A', 'Team B', 'Team C', 'Team D',
    'Team E', 'Team F', 'Team G', 'Team H',
    'Team I', 'Team J', 'Team K', 'Team L',
    'Team M', 'Team N', 'Team O', 'Team P'
];

// 대진표를 생성
const teamsData = generateRounds(teams);

const getRoundTitle = (roundIndex: number, totalRounds: number) => {
    const roundsTitles = ['결승', '4강', '8강', '16강'];
    return roundsTitles[totalRounds - roundIndex - 1];
};

const TournamentBracket = () => {
    const renderMatch = (teamA: string | null, teamB: string | null) => (
        <View style={styles.match}>
            <Text style={styles.team}>{teamA ?? 'BYE'}</Text>
            <Text style={styles.vs}>vs</Text>
            <Text style={styles.team}>{teamB ?? 'BYE'}</Text>
        </View>
    );

    return (
        <ScrollView horizontal contentContainerStyle={styles.container}>
            <View style={styles.roundContainer}>
                {teamsData.rounds.map((round, roundIndex) => (
                    <View key={roundIndex} style={styles.round}>
                        <Text style={styles.roundTitle}>{getRoundTitle(roundIndex, teamsData.rounds.length)}</Text>
                        {round.map((match, index) => (
                            <View key={index} style={styles.matchContainer}>
                                {renderMatch(match.teamA, match.teamB)}
                            </View>
                        ))}
                    </View>
                ))}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: 20,
        minWidth: width * 2,
        minHeight: height,
    },
    roundContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
    },
    round: {
        flexDirection: 'column',
        marginVertical: 20,
        width: 240,
        alignItems: 'center',
        paddingVertical: 30,
        paddingHorizontal: 10,
        borderRadius: 12,
        backgroundColor: '#f0f0f0',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 4,
        overflow: 'hidden',
    },
    roundTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20,
    },
    matchContainer: {
        alignItems: 'center',
        marginBottom: 40,
        width: '100%',
    },
    match: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: 16,
        backgroundColor: '#ffffff',
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 6,
        elevation: 4,
        marginVertical: 10,
        overflow: 'hidden',
    },
    vs: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#555',
        marginVertical: 10,
    },
    team: {
        fontSize: 18,
        fontWeight: '600',
        color: '#444',
        lineHeight: 24,
        textAlign: 'center',
        flexWrap: 'wrap',
        overflow: 'hidden',
    }
});

export default TournamentBracket;
