import { Text, View, StyleSheet, Platform, Image } from "react-native";

export default function PokemonCard(data) {

    const getTypeDetails = (type) => {
        switch (type.toLowerCase()) {
            case "electric":
                return { borderColor: "#FFD700", emoji: "⚡️" };
            case "water":
                return { borderColor: "#6493EA", emoji: "💧" };
            case "fire":
                return { borderColor: "#FF5733", emoji: "🔥" };
            case "grass":
                return { borderColor: "#66CC66", emoji: "🌿" };
            default:
                return { borderColor: "#A0A0A0", emoji: "❓" };
        }
    };

    const { borderColor, emoji } = getTypeDetails(data?.type)

    return (
        <View style={styles.card}>
            <View style={styles.nameContainer}>
                <Text style={styles.name}>{data?.name}</Text>
                <Text style={styles.hp}>❤️{data?.hp}</Text>
            </View>
            <Image style={styles.image}
                source={data?.image}
                accessibilityLabel={`${data?.name} Pokemon`}
                resizeMode="contain">
            </Image>
            <View style = {styles.typeContainer}>
                <View style = {[styles.typeBadge, {borderColor}]}>
                    <Text style = {styles.typeEmoji}>{emoji}</Text>
                    <Text style = {styles.typeText}>{data?.type}</Text>
                </View>
            </View>
            <View style = { {marginBottom: 5}}>
                <Text style = {styles.movesAndWeaknessesText}>Moves: {data?.moves.join(", ")}</Text>
            </View>
            <View>
                <Text  style = {styles.movesAndWeaknessesText}>Weaknesses: {data?.weaknesses.join(", ")}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 16,
        borderWidth: 2,
        padding: 16,
        margin: 16,
        ...Platform.select({
            ios: {
                shadowOffset: { width: 2, height: 2 },
                shadowColor: '#333',
                shadowOpacity: 0.3,
                shadowRadius: 4
            },
            android: {
                elevation: 5
            }
        })
    },
    nameContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    name: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    hp: {
        fontSize: 18
    },
    image: {
        width: '100%',
        height: 200,
        marginBottom: 20
    },
    typeContainer: {
        alignItems: 'center',
        marginBottom: 30

    },
    typeBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 18,
        borderWidth: 2
    },
    typeEmoji: {
        fontSize: 15,
        marginRight: 10
    },
    typeText: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    movesAndWeaknessesText: {
        fontSize: 15,
        fontWeight: 'bold'
    }
})